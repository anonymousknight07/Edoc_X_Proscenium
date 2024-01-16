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
  return (
  <div className="p-5">
     
      {!loading && messages?.length ===0 && (
        <div className="flex flex-col justify-center  text-center items-center p-20 rounded-xl space-y-2 bg-blue-600 text-black ">
          <MessageCircleIcon className="h-10 w-10"/>
          <h2> 
            <span className="font-bold">Invite a friend </span>&{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p className="font-bold">Edoc will auto-detect and tranlate it all for you</p>
          </div>
      )}
    </div>
  );
  
}

export default ChatMessages