import React from "react";

type FormProps = {
  input: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ input, onChange, onSubmit }: FormProps) {
  return (
    <div className="w-1/2">
      <form onSubmit={onSubmit}>
        <div className="flex gap-4 w-full justify-between">
          <input
            value={input}
            onChange={onChange}
            className="p-4 bg-black border border-white w-full rounded"
            placeholder="Ask the assistant anything"
          />
          <button
            className="px-6 py-2 bg-teal-300 text-black rounded hover:bg-teal-400"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
