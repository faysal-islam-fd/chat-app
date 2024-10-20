import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage"
import Message from "./Message"
import MessagesSkeleton from "./MessagesSkeleton";
import useNewMessages from "../../hooks/useNewMessages";

const Messages = () => {

  const lastMessageRef = useRef()
  const {messages,loading} = useGetMessage()
console.log(messages);

  
  useNewMessages()
  useEffect(()=>{
lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  },[messages])
    
  return (
    <div className="px-4 flex-1 overflow-auto">  
        {
          loading ? 
          Array(3).fill().map((_,idx)=> <MessagesSkeleton key={idx} /> )
          : 
          messages.length===0 ? <p className='text-center text-gray-200 mt-4'>No messages yet</p> : messages.map((msg) => (
            <div key={msg._id} ref={lastMessageRef}>
              <Message  msg={msg} />
            </div>
          ))
       
        }
    </div>
  )
}

export default Messages