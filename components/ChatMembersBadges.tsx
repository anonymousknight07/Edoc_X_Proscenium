'use client'

import useAdminId from "@/hooks/useAdminId";
import { ChatMembers, chatMembersRef } from "@/lib/converters/ChatMembers"
import { useCollectionData } from "react-firebase-hooks/firestore"
import LoadingSpinner from "./LoadingSpinner";

function ChatMembersBadges({chatId}:{chatId:string}) {
    const [members ,loading,error] = useCollectionData<ChatMembers>(
        chatMembersRef(chatId)
    );

    const adminId= useAdminId({chatId});

    if(loading && !members) return <LoadingSpinner/>;

  return (
    <div>ChatMembersBadges</div>
  )
}

export default ChatMembersBadges