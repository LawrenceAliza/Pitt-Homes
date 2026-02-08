import type { Message } from "../..//lib/data/mockMessages.ts";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`
          max-w-[70%] px-4 py-2.5 text-sm leading-relaxed
          ${
            isMe
              ? "rounded-2xl rounded-br-md text-white"
              : "rounded-2xl rounded-bl-md text-gray-800 bg-gray-100 border border-gray-200/60"
          }
        `}
        style={isMe ? { backgroundColor: "#02864a" } : undefined}
      >
        <p>{message.text}</p>
        <p
          className={`text-[11px] mt-1.5 ${
            isMe ? "text-white/60" : "text-gray-400"
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}
