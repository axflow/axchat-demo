import { OpenAIChat } from "@axflow/models/openai/chat";
import { StreamingJsonResponse, type MessageType } from "@axflow/models/shared";

export const runtime = "edge";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const stream = await OpenAIChat.streamTokens(
    {
      model: "gpt-4",
      messages: messages.map((msg: MessageType) => ({
        role: msg.role,
        content: msg.content,
      })),
    },
    {
      apiKey: process.env.OPENAI_API_KEY!,
    }
  );

  return new StreamingJsonResponse(stream);
}
