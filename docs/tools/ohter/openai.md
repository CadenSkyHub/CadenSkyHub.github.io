

## 定义GPT返回为json

```js
import { ref } from 'vue';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod.mjs';

const result = ref()

const client = new OpenAI({
  apiKey: 'sk-YmUOutbGDWb1FNzH1828B60503694d2e991aB7B23f433613',
  baseURL: 'https://api.gpt.ge/v1',
  dangerouslyAllowBrowser: true
})


const ResultSchema = z.object({
  outline: z.string(),
  thought: z.string(),
  statements: z.array(z.string())
})


/**
 * 创建对话
 * system
 *  - 系统，给 gpt 指定角色，也就是说它是干嘛的
 * 
 * assistant
 *  - 助手，就是 gpt 
 * 
 * user
 *  - 用户内容
 */
const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  { role: "system", content: '你是一个读书助理，你将帮助用户解决他们的问题' },
  { role: "user", content: "解析《百年孤独》, 列出 简要概述、主体思想、还有著名语句" }
]

/**
 * GPT执行函数
 */
const chatCompletion = async () => {
  const result = await client.chat.completions.create({
    model: 'gpt-4o-mini-2024-07-18',
    messages,
      /* 定义返回 schema，将会返回 json 字符串 */
    response_format: zodResponseFormat(ResultSchema, 'result', { strict: true })
  })

  console.log(result)
  const msg = result.choices[0].message.content
  console.log(msg)
}

/**
 * 执行
 * */
chatCompletion()

```