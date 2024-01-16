'use client'

import { Message, messagesRef, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { MessageCircleIcon } from "lucide-react";
import { Session } from "next-auth";
import { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ChatMessages({
    chatId,
    initialMessages,
    session,
}:{
    chatId: string;
    initialMessages: Message[];
    session: Session | null;
}) {

    const language = useLanguageStore((state) =>state.language);
    const messagesEndRef = createRef<HTMLDivElement>();

    const[messages,loading,error] = useCollectionData<Message>(
      sortedMessagesRef(chatId),
      {
        initialValue: initialMessages,
      }
    );

    useEffect(()=>{
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    },[messages, messagesEndRef]);
  return <div>
    <>
      {!loading && messages?.length ===0 && (
        <div className="flex flex-col justify-center items-center p-20 rounded-xl space-y-2 bg-yellow-500 text-black font-extralight">
          <MessageCircleIcon className="h-10 w-10"/>
          <h2> 
            <span className="font-bold">Invite a friend</span>&{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>Edoc will auto-detect and tranlate it all for you</p>
          </div>
      )} 
    </div>;
  
}

export default ChatMessages