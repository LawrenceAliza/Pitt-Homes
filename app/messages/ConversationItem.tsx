import type { Conversation } from "./mockMessages";

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  isActive,
  onClick,
}: ConversationItemProps) {
  const lastMessage =
    conversation.messages[conversation.messages.length - 1];

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150
        border-b border-gray-100
        ${
          isActive
            ? "bg-emerald-50/80"
            : "bg-white hover:bg-gray-50"
        }
      `}
      style={isActive ? { borderLeft: "3px solid #02864a" } : { borderLeft: "3px solid transparent" }}
    >
      {/* Avatar */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold"
        style={{ backgroundColor: isActive ? "#02864a" : "#94a3b8" }}
      >
        {conversation.userInitials}
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-sm font-semibold truncate ${
              isActive ? "text-gray-900" : "text-gray-700"
            }`}
          >
            {conversation.userName}
          </span>
          <span className="text-[11px] text-gray-400 flex-shrink-0">
            {lastMessage.timestamp}
          </span>
        </div>

        <p className="text-xs text-gray-400 truncate mt-0.5" style={isActive ? { color: "#02864a" } : undefined}>
          {conversation.listingTitle}
        </p>

        <p className="text-[13px] text-gray-500 truncate mt-1">
          {lastMessage.sender === "me" ? "You: " : ""}
          {lastMessage.text}
        </p>
      </div>
    </button>
  );
}
