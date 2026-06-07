import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const prompt = {
    role: "user",
    content:"hi how are you"
}
const openai = new OpenAI({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

const resp = await openai.chat.completions.create({
  messages: [prompt],
  model: process.env.AI_MODEL,
  stream:true,
});

for await (const chunk of resp){
console.log(chunk.choices[0].delta.content);
}