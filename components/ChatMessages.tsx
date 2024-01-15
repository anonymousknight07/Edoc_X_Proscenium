'use client'

import { Message } from "@/lib/converters/Message";
import { Session } from "next-auth";

function ChatMessages({
    chatId,
    initialMessages,
    session,
}:{
    chatId: string;
    initialMessages: Message[];
    session: Session | null;
}) {

    const langyage
  return (
    <div>ChatMessages</div>
  )
}

export default ChatMessages