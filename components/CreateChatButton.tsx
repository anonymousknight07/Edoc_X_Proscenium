'use client'

import { MessageCircleIcon, MessageSquareDashedIcon, MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useSubscriptionStore } from "@/store/store"
import { useToast } from "./ui/use-toast"
import LoadingSpinner from "./LoadingSpinner"
import { v4 as uuidv4} from "uuid";
import { addChatRef } from "@/lib/converters/ChatMembers"
import { serverTimestamp ,setDoc} from "firebase/firestore"


function CreateChatButton({ isLarge }:{isLarge?: boolean}) {
    const { data :session } = useSession();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router= useRouter();   
    const subscription = useSubscriptionStore((state) => state.subscription);


   const createNewChat = async()=> {

    if(!session?.user.id) return;

    setLoading(true);
    toast({
      title: "Creating a new chat room....",
      description : "Loading... because instant gratification is overrated.",
      duration: 3000,
    });

    const chatId =uuidv4();

    await setDoc(addChatRef(chatId, session.user.id), {
      userId:session.user.id!,
      email: session.user.email!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || "",
    }).then(()=>{
      toast({
        title: "Chat room activated!",
        description:"Your chat room is up and running. Remember, no talking about boring stuff in here!",
        className:"bg-green-600 text-white",
        duration:2000,
      });
      router.push(`/chat/${chatId}`);
    }).catch(()=>{
      toast({
        title:"Error 404: Chat room not found.",
        description:"Well, that didn't go as planned. Our chat room creation machine might need a nap.",
        variant:"destructive",
      });
    }).finally(()=>{
      setLoading(false);
    });
 };

    if(isLarge)
    return (
      <div>
        <Button variant= {"default"} onClick={createNewChat}>{loading ? <LoadingSpinner />:"Create a New Chat"}</Button>

     </div>
     );
  return (
    <Button onClick={createNewChat} variant={ "ghost"}><MessageSquarePlusIcon/></Button> 
  );
}

export default CreateChatButton;