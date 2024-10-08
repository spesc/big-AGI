/**
 * This is here because the API does not provide a list of available upstream models, and does not provide
 * descriptions for the models.
 * (nor does it reliably provide context window sizes - upstream bug: https://github.com/ollama/ollama/issues/1473)
 *
 <<<
 Can you modify the following data structure, according to the updated information from the attached
 web page(https://ollama.ai/library?sort=featured). Be very thorough, do not skip any lines, both in
 the provided file and in the web page. Add/remove to reflect the order in the web page, update
 the *description* and *pulls*, and preserve the existing *added* field on existing entries, or set
 it to 20240126 on new entries.
 >>>
 *
 * from: https://ollama.ai/library?sort=featured
 * Note: the default contextWindow in code is 8192, so we do not redefine that
 */
export const OLLAMA_BASE_MODELS: { [key: string]: { description: string, pulls: number, added?: string, contextWindow?: number } } = {
  'gemma2': { description: 'Google Gemma 2 is now available in 2 sizes, 9B and 27B.', pulls: 17200, added: '20240628' },
  'llama3': { description: 'Meta Llama 3: The most capable openly available LLM to date', pulls: 4100000, added: '20240501' },
  'qwen2': { description: 'Qwen2 is a new series of large language models from Alibaba group', pulls: 201900, added: '20240628' },
  'deepseek-coder-v2': { description: 'An open-source Mixture-of-Experts code language model that achieves performance comparable to GPT4-Turbo in code-specific tasks.', pulls: 93300, added: '20240628' },
  'phi3': { description: 'Phi-3 is a family of lightweight 3B (Mini) and 14B (Medium) state-of-the-art open models by Microsoft.', pulls: 2000000, added: '20240501' },
  'aya': { description: 'Aya 23, released by Cohere, is a new family of state-of-the-art, multilingual models that support 23 languages.', pulls: 59700, added: '20240628' },
  'mistral': { description: 'The 7B model released by Mistral AI, updated to version 0.3.', pulls: 2600000 },
  'mixtral': { description: 'A set of Mixture of Experts (MoE) model with open weights by Mistral AI in 8x7b and 8x22b parameter sizes.', pulls: 312700 },
  'codegemma': { description: 'CodeGemma is a collection of powerful, lightweight models that can perform a variety of coding tasks like fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following.', pulls: 136000, added: '20240501' },
  'command-r': { description: 'Command R is a Large Language Model optimized for conversational interaction and long context tasks.', pulls: 66400, added: '20240501' },
  'command-r-plus': { description: 'Command R+ is a powerful, scalable large language model purpose-built to excel at real-world enterprise use cases.', pulls: 37800, added: '20240501', contextWindow: 128000 },
  'llava': { description: '🌋 LLaVA is a novel end-to-end trained large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding. Updated to version 1.6.', pulls: 331800 },
  'gemma': { description: 'Gemma is a family of lightweight, state-of-the-art open models built by Google DeepMind. Updated to version 1.1', pulls: 3900000, added: '20240501' },
  'qwen': { description: 'Qwen 1.5 is a series of large language models by Alibaba Cloud spanning from 0.5B to 110B parameters', pulls: 2100000 },
  'llama2': { description: 'Llama 2 is a collection of foundation language models ranging from 7B to 70B parameters.', pulls: 1900000 },
  'codellama': { description: 'A large language model that can use text prompts to generate and discuss code.', pulls: 584500 },
  'dolphin-mixtral': { description: 'Uncensored, 8x7b and 8x22b fine-tuned models based on the Mixtral mixture of experts models that excels at coding tasks. Created by Eric Hartford.', pulls: 301800 },
  'llama2-uncensored': { description: 'Uncensored Llama 2 model by George Sung and Jarrad Hope.', pulls: 233500 },
  'deepseek-coder': { description: 'DeepSeek Coder is a capable coding model trained on two trillion code and natural language tokens.', pulls: 193400 },
  'nomic-embed-text': { description: 'A high-performing open embedding model with a large token context window.', pulls: 190100, added: '20240501' },
  'phi': { description: 'Phi-2: a 2.7B language model by Microsoft Research that demonstrates outstanding reasoning and language understanding capabilities.', pulls: 169400 },
  'dolphin-mistral': { description: 'The uncensored Dolphin model based on Mistral that excels at coding tasks. Updated to version 2.8.', pulls: 140800 },
  'mistral-openorca': { description: 'Mistral OpenOrca is a 7 billion parameter model, fine-tuned on top of the Mistral 7B model using the OpenOrca dataset.', pulls: 132800 },
  'orca-mini': { description: 'A general-purpose model ranging from 3 billion parameters to 70 billion, suitable for entry-level hardware.', pulls: 130600 },
  'mxbai-embed-large': { description: 'State-of-the-art large embedding model from mixedbread.ai', pulls: 106100, added: '20240501' },
  'starcoder2': { description: 'StarCoder2 is the next generation of transparently trained open code LLMs that comes in three sizes: 3B, 7B and 15B parameters.', pulls: 105600, added: '20240501' },
  'dolphin-llama3': { description: 'Dolphin 2.9 is a new model with 8B and 70B sizes by Eric Hartford based on Llama 3 that has a variety of instruction, conversational, and coding skills.', pulls: 104500, added: '20240501' },
  'llama2-chinese': { description: 'Llama 2 based model fine tuned to improve Chinese dialogue ability.', pulls: 104400 },
  'zephyr': { description: 'Zephyr is a series of fine-tuned versions of the Mistral and Mixtral models that are trained to act as helpful assistants.', pulls: 102200 },
  'yi': { description: 'Yi 1.5 is a high-performing, bilingual language model.', pulls: 90800 },
  'nous-hermes2': { description: 'The powerful family of models by Nous Research that excels at scientific discussion and coding tasks.', pulls: 89200 },
  'vicuna': { description: 'General use chat model based on Llama and Llama 2 with 2K to 16K context sizes.', pulls: 82100 },
  'wizard-vicuna-uncensored': { description: 'Wizard Vicuna Uncensored is a 7B, 13B, and 30B parameter model based on Llama 2 uncensored by Eric Hartford.', pulls: 79400 },
  'tinyllama': { description: 'The TinyLlama project is an open endeavor to train a compact 1.1B Llama model on 3 trillion tokens.', pulls: 76000 },
  'wizardlm2': { description: 'State of the art large language model from Microsoft AI with improved performance on complex chat, multilingual, reasoning and agent use cases.', pulls: 71500, added: '20240501' },
  'starcoder': { description: 'StarCoder is a code generation model trained on 80+ programming languages.', pulls: 70600 },
  'openchat': { description: 'A family of open-source models trained on a wide variety of data, surpassing ChatGPT on various benchmarks. Updated to version 3.5-0106.', pulls: 66300 },
  'codestral': { description: 'Codestral is Mistral AI\'s first-ever code model designed for code generation tasks.', pulls: 65700, added: '20240628' },
  'tinydolphin': { description: 'An experimental 1.1B parameter model trained on the new Dolphin 2.8 dataset by Eric Hartford and based on TinyLlama.', pulls: 64100 },
  'openhermes': { description: 'OpenHermes 2.5 is a 7B model fine-tuned by Teknium on Mistral with fully open datasets.', pulls: 62000 },
  'wizardcoder': { description: 'State-of-the-art code generation model', pulls: 57400 },
  'stable-code': { description: 'Stable Code 3B is a coding model with instruct and code completion variants on par with models such as Code Llama 7B that are 2.5x larger.', pulls: 55500 },
  'neural-chat': { description: 'A fine-tuned model based on Mistral with good coverage of domain and language.', pulls: 46900 },
  'wizard-math': { description: 'Model focused on math and logic problems', pulls: 45200 },
  'codeqwen': { description: 'CodeQwen1.5 is a large language model pretrained on a large amount of code data.', pulls: 43600, added: '20240501' },
  'phind-codellama': { description: 'Code generation model based on Code Llama.', pulls: 42300 },
  'stablelm2': { description: 'Stable LM 2 is a state-of-the-art 1.6B and 12B parameter language model trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch.', pulls: 41300 },
  'all-minilm': { description: 'Embedding models on very large sentence level datasets.', pulls: 39400, added: '20240501' },
  'nous-hermes': { description: 'General use models based on Llama and Llama 2 from Nous Research.', pulls: 37200 },
  'starling-lm': { description: 'Starling is a large language model trained by reinforcement learning from AI feedback focused on improving chatbot helpfulness.', pulls: 36800 },
  'dolphincoder': { description: 'A 7B and 15B uncensored variant of the Dolphin model family that excels at coding, based on StarCoder2.', pulls: 36700, added: '20240501' },
  'sqlcoder': { description: 'SQLCoder is a code completion model fined-tuned on StarCoder for SQL generation tasks', pulls: 36500 },
  'falcon': { description: 'A large language model built by the Technology Innovation Institute (TII) for use in summarization, text generation, and chat bots.', pulls: 34900 },
  'orca2': { description: 'Orca 2 is built by Microsoft research, and are a fine-tuned version of Meta\'s Llama 2 models. The model is designed to excel particularly in reasoning.', pulls: 34400 },
  'llama3-gradient': { description: 'This model extends LLama-3 8B\'s context length from 8k to over 1m tokens.', pulls: 33500, added: '20240501' },
  'deepseek-llm': { description: 'An advanced language model crafted with 2 trillion bilingual tokens.', pulls: 32800 },
  'yarn-llama2': { description: 'An extension of Llama 2 that supports a context of up to 128k tokens.', pulls: 32800, contextWindow: 128000 },
  'solar': { description: 'A compact, yet powerful 10.7B large language model designed for single-turn conversation.', pulls: 31600 },
  'xwinlm': { description: 'Conversational model based on Llama 2 that performs competitively on various benchmarks.', pulls: 31100 },
  'llama3-chatqa': { description: 'A model from NVIDIA based on Llama 3 that excels at conversational question answering (QA) and retrieval-augmented generation (RAG).', pulls: 30800, added: '20240628' },
  'dolphin-phi': { description: '2.7B uncensored Dolphin model by Eric Hartford, based on the Phi language model by Microsoft Research.', pulls: 29200 },
  'wizardlm': { description: 'General use model based on Llama 2.', pulls: 28700 },
  'granite-code': { description: 'A family of open foundation models by IBM for Code Intelligence', pulls: 28400, added: '20240628' },
  'samantha-mistral': { description: 'A companion assistant trained in philosophy, psychology, and personal relationships. Based on Mistral.', pulls: 28400 },
  'stable-beluga': { description: 'Llama 2 based model fine tuned on an Orca-style dataset. Originally called Free Willy.', pulls: 25400 },
  'bakllava': { description: 'BakLLaVA is a multimodal model consisting of the Mistral 7B base model augmented with the LLaVA architecture.', pulls: 25200 },
  'llava-llama3': { description: 'A LLaVA model fine-tuned from Llama 3 Instruct with better scores in several benchmarks.', pulls: 23500, added: '20240628' },
  'medllama2': { description: 'Fine-tuned Llama 2 model to answer medical questions based on an open source medical dataset.', pulls: 22900 },
  'wizardlm-uncensored': { description: 'Uncensored version of Wizard LM model', pulls: 22900 },
  'nous-hermes2-mixtral': { description: 'The Nous Hermes 2 model from Nous Research, now trained over Mixtral.', pulls: 21800 },
  'yarn-mistral': { description: 'An extension of Mistral to support context windows of 64K or 128K.', pulls: 21400 },
  'snowflake-arctic-embed': { description: 'A suite of text embedding models by Snowflake, optimized for performance.', pulls: 20200, added: '20240501' },
  'llama-pro': { description: 'An expansion of Llama 2 that specializes in integrating both general language understanding and domain-specific knowledge, particularly in programming and mathematics.', pulls: 20200 },
  'codeup': { description: 'Great code generation model based on Llama2.', pulls: 19700 },
  'meditron': { description: 'Open-source medical large language model adapted from Llama 2 to the medical domain.', pulls: 19600 },
  'moondream': { description: 'moondream2 is a small vision language model designed to run efficiently on edge devices.', pulls: 19100, added: '20240501' },
  'everythinglm': { description: 'Uncensored Llama2 based model with support for a 16K context window.', pulls: 18400 },
  'nexusraven': { description: 'Nexus Raven is a 13B instruction tuned model for function calling tasks.', pulls: 17600 },
  'magicoder': { description: '🎩 Magicoder is a family of 7B parameter models trained on 75K synthetic instruction data using OSS-Instruct, a novel approach to enlightening LLMs with open-source code snippets.', pulls: 15700 },
  'stablelm-zephyr': { description: 'A lightweight chat model allowing accurate, and responsive output without requiring high-end hardware.', pulls: 15600 },
  'deepseek-v2': { description: 'A strong, economical, and efficient Mixture-of-Experts language model.', pulls: 14800, added: '20240628' },
  'codebooga': { description: 'A high-performing code instruct model created by merging two existing code models.', pulls: 14600 },
  'mistrallite': { description: 'MistralLite is a fine-tuned model based on Mistral with enhanced capabilities of processing long contexts.', pulls: 13900 },
  'llava-phi3': { description: 'A new small LLaVA model fine-tuned from Phi 3 Mini.', pulls: 13700, added: '20240628' },
  'wizard-vicuna': { description: 'Wizard Vicuna is a 13B parameter model based on Llama 2 trained by MelodysDreamj.', pulls: 12900 },
  'duckdb-nsql': { description: '7B parameter text-to-SQL model made by MotherDuck and Numbers Station.', pulls: 11500 },
  'goliath': { description: 'A language model created by combining two fine-tuned Llama 2 70B models into one.', pulls: 11100 },
  'megadolphin': { description: 'MegaDolphin-2.2-120b is a transformation of Dolphin-2.2-70b created by interleaving the model with itself.', pulls: 10900 },
  'open-orca-platypus2': { description: 'Merge of the Open Orca OpenChat model and the Garage-bAInd Platypus 2 model. Designed for chat and code generation.', pulls: 10800 },
  'notux': { description: 'A top-performing mixture of experts model, fine-tuned with high-quality data.', pulls: 10700 },
  'notus': { description: 'A 7B chat model fine-tuned with high-quality data and based on Zephyr.', pulls: 9975 },
  'dbrx': { description: 'DBRX is an open, general-purpose LLM created by Databricks.', pulls: 9825, added: '20240501' },
  'falcon2': { description: 'Falcon2 is an 11B parameters causal decoder-only model built by TII and trained over 5T tokens.', pulls: 9401, added: '20240628' },
  'alfred': { description: 'A robust conversational model designed to be used for both chat and instruct use cases.', pulls: 7256 },
};
// export const OLLAMA_LAST_UPDATE: string = '20240628';
export const OLLAMA_PREV_UPDATE: string = '20240501';