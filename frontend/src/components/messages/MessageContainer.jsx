
import MessageInput from "./MessageInput";
import Messages from "./Messages"

import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col ">
       {
        noChatSelected ? <NoChatSelected /> : (
          <>
          <div className=" bg-slate-400 px-4 font-semibold py-3 rounded-b-lg">
              <span className="text-slate-200">To: </span>
              <span className="text-slate-950">Faysal</span>
          </div>
          <Messages />
         <MessageInput />
          </>
        )
       }
    </div>
  )
}

export default MessageContainer



const NoChatSelected = () => {
  const authUser = {
      fullName: 'Faysal'
  }
return (
  <div className='flex items-center justify-center w-full h-full'>
    <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
      <p>Welcome 👋 {authUser.fullName} ❄</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className='text-3xl md:text-6xl text-center' />
    </div>
  </div>
);
};