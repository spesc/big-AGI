import * as React from 'react';

import type { SxProps } from '@mui/joy/styles/types';
import { Box, ColorPaletteProp, Tooltip } from '@mui/joy';

import { adjustContentScaling, themeScalingMap } from '~/common/app.theme';
import { useUIContentScaling } from '~/common/state/store-ui';


export function tokenCountsMathAndMessage(tokenLimit: number | 0, directTokens: number, historyTokens?: number, responseMaxTokens?: number, tokenPriceIn?: number, tokenPriceOut?: number): {
  color: ColorPaletteProp,
  message: string,
  remainingTokens: number,
  costMax?: number,
  costMin?: number,
} {
  const usedInputTokens = directTokens + (historyTokens || 0);
  const usedMaxTokens = usedInputTokens + (responseMaxTokens || 0);
  const remainingTokens = tokenLimit - usedMaxTokens;
  const gteLimit = (remainingTokens <= 0 && tokenLimit > 0);

  // message
  let message: string = gteLimit ? '⚠️ ' : '';

  // costs
  let costMax: number | undefined = undefined;
  let costMin: number | undefined = undefined;

  // no limit: show used tokens only
  if (!tokenLimit) {
    message += `Requested: ${usedMaxTokens.toLocaleString()} tokens`;
  }
  // has full information (d + i < l)
  else if (historyTokens || responseMaxTokens) {
    message +=
      `▶ ${Math.abs(remainingTokens).toLocaleString()} ${remainingTokens >= 0 ? 'available' : 'excess'} message tokens\n\n` +
      ` = Model max tokens: ${_alignRight(tokenLimit)}\n` +
      `     - This message: ${_alignRight(directTokens)}\n` +
      `          - History: ${_alignRight(historyTokens || 0)}\n` +
      `     - Max response: ${_alignRight(responseMaxTokens || 0)}`;

    // add the price, if available
    if (tokenPriceIn || tokenPriceOut) {
      costMin = tokenPriceIn ? usedInputTokens * tokenPriceIn / 1E6 : undefined;
      const costOutMax = (tokenPriceOut && responseMaxTokens) ? responseMaxTokens * tokenPriceOut / 1E6 : undefined;
      if (costMin || costOutMax) {
        message += `\n\n\n▶ Chat Turn Cost (max, approximate)\n`;

        if (costMin) message += '\n' +
          `       Input tokens: ${_alignRight(usedInputTokens)}\n` +
          `    Input Price $/M: ${tokenPriceIn!.toFixed(2).padStart(8)}\n` +
          `         Input cost: ${('$' + costMin!.toFixed(4)).padStart(8)}\n`;

        if (costOutMax) message += '\n' +
          `  Max output tokens: ${_alignRight(responseMaxTokens!)}\n` +
          `   Output Price $/M: ${tokenPriceOut!.toFixed(2).padStart(8)}\n` +
          `    Max output cost: ${('$' + costOutMax!.toFixed(4)).padStart(8)}\n`;

        if (costMin) message += '\n' +
          ` > Min message cost: <span class="highlight-cost yellow">${formatTokenCost(costMin).padStart(8)}</span>`;
        costMax = (costMin && costOutMax) ? costMin + costOutMax : undefined;
        if (costMax) message += '\n' +
          ` < Max message cost: <span>${formatTokenCost(costMax).padStart(8)}</span>\n` +
          '   (depends on assistant response)';
      }
    }
  }
  // Cleaner mode: d + ? < R (total is the remaining in this case)
  else {
    message +=
      `${(tokenLimit + usedMaxTokens).toLocaleString()} available tokens after deleting this\n\n` +
      ` = Currently free: ${_alignRight(tokenLimit)}\n` +
      `   + This message: ${_alignRight(usedMaxTokens)}`;
  }

  const color: ColorPaletteProp =
    (tokenLimit && remainingTokens < 0)
      ? 'danger'
      : remainingTokens < tokenLimit / 4
        ? 'warning'
        : 'primary';

  return { color, message, remainingTokens, costMax, costMin };
}

function _alignRight(value: number, columnSize: number = 8) {
  const str = value.toLocaleString();
  return str.padStart(columnSize);
}

export function formatTokenCost(cost: number) {
  return cost < 1
    ? (cost * 100).toFixed(cost < 0.010 ? 2 : 2) + ' ¢'
    : '$ ' + cost.toFixed(2);
}

const tooltipMessageSx: SxProps = {
  p: 2,
  whiteSpace: 'pre',
  '& .highlight-cost': {
    position: 'relative',
    color: 'black',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-2px',
      right: '-2px',
      top: '0.1em',
      bottom: '-0.1em',
      transform: 'skew(-5deg) rotate(-1deg)',
      zIndex: -1,
    },
    '&.yellow::before': {
      background: 'linear-gradient(104deg, rgba(255,255,132,0) 0.9%, rgba(255,255,132,1) 2.4%, rgba(255,252,132,1) 50%, rgba(255,255,132,1) 97.6%, rgba(255,255,132,0) 99.1%)',
    },
    '&.orange::before': {
      background: 'linear-gradient(104deg, rgba(255,204,132,0) 0.9%, rgba(255,204,132,1) 2.4%, rgba(255,187,132,1) 50%, rgba(255,204,132,1) 97.6%, rgba(255,204,132,0) 99.1%)',
    },
  },
};

export function TokenTooltip(props: { message: string | null, color: ColorPaletteProp, placement?: 'top' | 'top-end', children: React.ReactElement }) {

  // external state
  const contentScaling = useUIContentScaling();

  const fontSize = themeScalingMap[adjustContentScaling(contentScaling, -1)]?.blockFontSize ?? undefined;

  return (
    <Tooltip
      placement={props.placement}
      variant={props.color !== 'primary' ? 'solid' : 'soft'}
      color={props.color}
      title={!props.message ? null :
        <Box dangerouslySetInnerHTML={{ __html: props.message }} sx={tooltipMessageSx} />
      }
      sx={{
        fontFamily: 'code',
        fontSize: fontSize,
        // fontSize: '0.8125rem',
        border: '1px solid',
        borderColor: `${props.color}.outlinedColor`,
        boxShadow: 'md',
      }}
    >
      {props.children}
    </Tooltip>
  );
}