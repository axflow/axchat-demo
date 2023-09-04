"use client";
import { useChat } from "@axflow/models/react";
import ChatBox from "./chat-box";
import Form from "./form";

export default function Home() {
  const { input, messages, onChange, onSubmit } = useChat({
    url: "/api/chat",
  });
  return (
    <main className="flex flex-col items-center w-screen h-screen gap-4">
      <h1 className="font-extrabold text-4xl pt-4">AxChat</h1>
      <ChatBox messages={messages} />
      <Form input={input} onChange={onChange} onSubmit={onSubmit} />
    </main>
  );
}
