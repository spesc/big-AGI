import { LLM_IF_ANT_PromptCaching, LLM_IF_OAI_Chat, LLM_IF_OAI_Vision } from '~/common/stores/llms/llms.types';

import type { ModelDescriptionSchema } from '../llm.server.types';


const roundTime = (date: string) => Math.round(new Date(date).getTime() / 1000);

export const hardcodedAnthropicModels: (ModelDescriptionSchema & { isLegacy?: boolean })[] = [
  // Claude 3.5 models - https://docs.anthropic.com/en/docs/about-claude/models
  // {
  //   id: 'claude-3.5-opus', // ...
  //   label: 'Claude 3.5 Opus',
  //   created: roundTime(?),
  //   description: ?,
  //   contextWindow: 200000 ?, // Characters
  //   maxCompletionTokens: 4096 ?,
  //   trainingDataCutoff: ?,
  //   interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision, LLM_IF_ANT_PromptCaching],
  //   pricing: { chatIn: 15, chatOut: 75, cache: { ... } },
  //   benchmark: {
  //     cbaElo: 1256, // Placeholder
  //     cbaMmlu: 86.8, // Placeholder
  //   },
  // },
  {
    id: 'claude-3-5-sonnet-20240620',
    label: 'Claude 3.5 Sonnet',
    created: roundTime('2024-06-20 06:00'),
    description: 'The most intelligent Claude model',
    contextWindow: 200000, // Characters
    maxCompletionTokens: 8192,
    trainingDataCutoff: 'Apr 2024',
    interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision, LLM_IF_ANT_PromptCaching],
    chatPrice: { input: 3, output: 15, cache: { cType: 'ant-bp', read: 0.30, write: 3.75, duration: 300 } },
    benchmark: { cbaElo: 1271, cbaMmlu: 88.7 },
  },
  // {
  //   id: 'claude-3.5-haiku', // ...
  //   label: 'Claude 3.5 Haiku',
  //   created: roundTime(?),
  //   description: ?,
  //   contextWindow: 200000 ?, // Characters
  //   maxCompletionTokens: 4096 ?,
  //   trainingDataCutoff: ?,
  //   interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision, LLM_IF_ANT_PromptCaching],
  //   pricing: { chatIn: 0.25, chatOut: 1.25, cache: { ... } },
  //   benchmark: {
  //     cbaElo: 1181, // Placeholder
  //     cbaMmlu: 75.2, // Placeholder
  //   },
  // },


  // Claude 3 models
  {
    id: 'claude-3-opus-20240229',
    label: 'Claude 3 Opus',
    created: roundTime('2024-02-29'),
    description: 'Powerful model for complex tasks',
    contextWindow: 200000,
    maxCompletionTokens: 4096,
    trainingDataCutoff: 'Aug 2023',
    interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision, LLM_IF_ANT_PromptCaching],
    chatPrice: { input: 15, output: 75, cache: { cType: 'ant-bp', read: 1.50, write: 18.75, duration: 300 } },
    benchmark: { cbaElo: 1248, cbaMmlu: 86.8 },
  },
  {
    id: 'claude-3-sonnet-20240229',
    label: 'Claude 3 Sonnet',
    created: roundTime('2024-02-29'),
    description: 'Balance of speed, cost, and performance',
    contextWindow: 200000,
    maxCompletionTokens: 4096,
    trainingDataCutoff: 'Aug 2023',
    interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision],
    chatPrice: { input: 3, output: 15 },
    benchmark: { cbaElo: 1201, cbaMmlu: 79 },
    hidden: true,
  },
  {
    id: 'claude-3-haiku-20240307',
    label: 'Claude 3 Haiku',
    created: roundTime('2024-03-07'),
    description: 'Fastest, most cost-effective model',
    contextWindow: 200000,
    maxCompletionTokens: 4096,
    trainingDataCutoff: 'Aug 2023',
    interfaces: [LLM_IF_OAI_Chat, LLM_IF_OAI_Vision, LLM_IF_ANT_PromptCaching],
    chatPrice: { input: 0.25, output: 1.25, cache: { cType: 'ant-bp', read: 0.03, write: 0.30, duration: 300 } },
    benchmark: { cbaElo: 1178, cbaMmlu: 75.2 },
  },

  // Claude 2 models
  {
    id: 'claude-2.1',
    label: 'Claude 2.1',
    created: roundTime('2023-11-21'),
    description: 'Superior performance on tasks that require complex reasoning, with reduced model hallucination rates',
    contextWindow: 200000,
    maxCompletionTokens: 4096,
    interfaces: [LLM_IF_OAI_Chat],
    chatPrice: { input: 8, output: 24 },
    benchmark: { cbaElo: 1119 },
    hidden: true,
    isLegacy: true,
  },
  {
    id: 'claude-2.0',
    label: 'Claude 2',
    created: roundTime('2023-07-11'),
    description: 'Superior performance on tasks that require complex reasoning',
    contextWindow: 100000,
    maxCompletionTokens: 4096,
    interfaces: [LLM_IF_OAI_Chat],
    chatPrice: { input: 8, output: 24 },
    benchmark: { cbaElo: 1131, cbaMmlu: 78.5 },
    hidden: true,
    isLegacy: true,
  },
  {
    id: 'claude-instant-1.2',
    label: 'Claude Instant 1.2',
    created: roundTime('2023-08-09'),
    description: 'Low-latency, high throughput model',
    contextWindow: 100000,
    maxCompletionTokens: 4096,
    interfaces: [LLM_IF_OAI_Chat],
    chatPrice: { input: 0.8, output: 2.4 },
    hidden: true,
    isLegacy: true,
  },
  // {
  //   id: 'claude-instant-1.1',
  //   label: 'Claude Instant 1.1',
  //   created: roundTime('2023-03-14'),
  //   description: 'Precise and fast',
  //   contextWindow: 100000,
  //   maxCompletionTokens: 2048,
  //   interfaces: [LLM_IF_OAI_Chat],
  //   hidden: true,
  // },
  // {
  //   id: 'claude-1.3',
  //   label: 'Claude 1.3',
  //   created: roundTime('2023-03-14'),
  //   description: 'Claude 1.3 is the latest version of Claude v1',
  //   contextWindow: 100000,
  //   maxCompletionTokens: 4096,
  //   interfaces: [LLM_IF_OAI_Chat],
  //   hidden: true,
  // },
];