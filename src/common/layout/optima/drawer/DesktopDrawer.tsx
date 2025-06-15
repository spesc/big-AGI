import * as React from 'react';

import { Box, Sheet, styled } from '@mui/joy';

import { checkVisibleNav, NavItemApp } from '~/common/app.nav';
import { themeZIndexDesktopDrawer } from '~/common/app.theme';

import { OPTIMA_DRAWER_BACKGROUND } from '../optima.config';
import { optimaCloseDrawer, optimaOpenDrawer, useOptimaDrawerOpen, useOptimaDrawerPeeking } from '../useOptima';
import { useOptimaPortalOutRef } from '../portals/useOptimaPortalOutRef';


// Desktop Drawer

const DesktopDrawerFixRoot = styled(Box)({
  // fix the drawer size
  width: 'var(--AGI-Desktop-Drawer-width)',
  flexShrink: 0,
  flexGrow: 0,

  // Base state
  zIndex: themeZIndexDesktopDrawer,

  '&[aria-hidden="true"]': {
    contain: 'strict',
    pointerEvents: 'none',
  },

  '&.drawer-peeking': {
    zIndex: themeZIndexDesktopDrawer + 1, // elevate z-index when peeking
  },
});

const DesktopDrawerTranslatingSheet = styled(Sheet)(({ theme }) => ({
  // layout
  width: '100%',
  height: '100dvh',
  zIndex: 1, // just to allocate a layer; this was: themeZIndexDesktopDrawer

  // styling
  backgroundColor: OPTIMA_DRAWER_BACKGROUND,
  borderRight: '1px solid',
  // the border right color is from: theme.palette.divider, which is this /0.2 (light) and /0.16 (dark)
  borderRightColor: 'rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.4)',
  // borderTopRightRadius: OPTIMA_DRAWER_MOBILE_RADIUS,
  // borderBottomRightRadius: OPTIMA_DRAWER_MOBILE_RADIUS,
  // contain: 'strict',
  // boxShadow: theme.shadow.md, // too thin and complex; also tried 40px blurs
  boxShadow: `0px 0px 6px 0 rgba(${theme.palette.neutral.darkChannel} / 0.12)`,

  // content layout
  display: 'flex',
  flexDirection: 'column',


  // base state
  transform: 'none',
  transition: 'transform 0.42s cubic-bezier(.17,.84,.44,1)', // Default: normal open/close, and peeking exit
  willChange: 'transform', // optimize for transform animations

  // Closed state via aria
  '&[aria-hidden="true"]': {
    transform: 'translateX(-100%)',
  },

  // Peek state via class
  '&.drawer-peeking': {
    transition: 'transform 0.25s cubic-bezier(.4,0,.2,1)', // faster enter animation
    boxShadow: theme.shadow.lg,
  },
})) as typeof Sheet;


export function DesktopDrawer(props: { component: React.ElementType, currentApp?: NavItemApp }) {

  // state
  const drawerPortalRef = useOptimaPortalOutRef('optima-portal-drawer', 'DesktopDrawer');

  // external state
  const _isDrawerOpen = useOptimaDrawerOpen();
  const isDrawerPeeking = useOptimaDrawerPeeking();
  const isDrawerOpen = _isDrawerOpen || isDrawerPeeking;
  // const hasDrawerContent = useOptimaPortalHasInputs('optima-portal-drawer');


  // Desktop-only?: close the drawer if the current app doesn't use it
  const currentAppUsesDrawer = !props.currentApp?.hideDrawer;
  React.useEffect(() => {
    if (!currentAppUsesDrawer)
      optimaCloseDrawer();
  }, [currentAppUsesDrawer]);

  // [special case] remove in the future
  const shallOpenNavForSharedLink = !props.currentApp?.hideDrawer && checkVisibleNav(props.currentApp);
  React.useEffect(() => {
    if (shallOpenNavForSharedLink)
      optimaOpenDrawer();
  }, [shallOpenNavForSharedLink]);


  return (
    <DesktopDrawerFixRoot
      aria-hidden={!isDrawerOpen}
      className={isDrawerPeeking ? 'drawer-peeking' : undefined}
    >

      <DesktopDrawerTranslatingSheet
        ref={drawerPortalRef}
        component={props.component}
        aria-hidden={!isDrawerOpen}
        className={isDrawerPeeking ? 'drawer-peeking' : undefined}
      >

        {/* NOTE: this sort of algo was not used when we migrated this to Portals on 2024-07-30, so not restoring it ... */}
        {/*/!* [UX Responsiveness] Keep Mounted for now *!/*/}
        {/*{(!softDrawerUnmount || isDrawerOpen || !UNMOUNT_DELAY_MS) &&*/}
        {/*  appDrawerContent*/}
        {/*}*/}

      </DesktopDrawerTranslatingSheet>

    </DesktopDrawerFixRoot>
  );
}