import { HuggingFaceTextGeneration } from "@axflow/models/huggingface/text-generation";
import { StreamingJsonResponse, type MessageType } from "@axflow/models/shared";

export const runtime = "edge";

const buildPrompt = (messages: MessageType[]): string => {
  let msg =
    "Below is a message history between a user and an AI (you). Please read it and respond to the latest user question";
  messages.forEach((message) => {
    msg += `\n${message.role}: ${message.content}`;
  });
  msg += "\nassistant: ";
  return msg;
};

export async function POST(request: Request) {
  const { messages } = await request.json();

  const stream = await HuggingFaceTextGeneration.streamTokens(
    {
      model: "llama-2b",
      inputs: buildPrompt(messages),
      parameters: {
        max_new_tokens: 200,
      },
    },
    {
      accessToken: process.env.HF_TOKEN!,
      apiUrl:
        "https://styuqm054heenl9w.us-east-1.aws.endpoints.huggingface.cloud",
    }
  );

  return new StreamingJsonResponse(stream);
}
