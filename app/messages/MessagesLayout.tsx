
"use client";

import { useState } from "react";
import { conversations as initialConversations } from "../../lib/data/mockMessages";
import type { Message } from "../../lib/data/mockMessages";
import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";

export default function MessagesLayout() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(conversations[0].id);

  const activeConversation =
    conversations.find((c) => c.id === activeId) ?? null;

  const handleNewMessage = (convId: string, message: Message) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === convId
          ? { ...conv, messages: [...conv.messages, message] }
          : conv
      )
    );
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <div className="w-[360px] flex-shrink-0 border-r border-gray-200 bg-white overflow-hidden">
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
      <ChatWindow
        conversation={activeConversation}
        onNewMessage={handleNewMessage}
      />
    </div>
  );
}
