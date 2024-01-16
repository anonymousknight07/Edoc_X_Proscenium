import React from 'react'

function AdminContols({chatId} : {chatId:string}) {
  return (
    <div className=" flex justify-end space-x-2 m-5 mb-20">
        <InviteUser chatId={chatId} />
    <DeleteChatButton chatId={chatId} />
    </div>
   
  );
}

export default AdminContols