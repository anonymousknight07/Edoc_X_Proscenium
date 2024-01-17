"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form'
import * as z from "zod";
import { getDocs, serverTimestamp, setDoc} from "firebase/firestore";
import { addChatRef, chatMembersRef } from "@/lib/converters/ChatMembers";
import { useSession } from "next-auth/react";
import { getUserbyEmailRef } from "@/lib/converters/User";
import { useToast } from "@/components/ui/use-toast";
import useAdminId  from "@/hooks/useAdminId";
import { PlusCircleIcon } from "lucide-react";  
import { ShareLink} from "./ShareLink";
import { useSubscriptionStore } from "@/store/store"; 
import { Toast } from "./ui/toast";
import { useRouter } from "next/navigation";  

function InviteUser({chatId}:
{chatId:string}) {

  return 
    <>
    </>;
  
}

export default InviteUser