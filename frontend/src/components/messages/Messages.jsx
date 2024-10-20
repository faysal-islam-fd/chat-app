import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage"
import Message from "./Message"
import MessagesSkeleton from "./MessagesSkeleton";
import useNewMessages from "../../hooks/useNewMessages";

const Messages = () => {

  const lastMessageRef = useRef()
  const {allMessages,loading} = useGetMessage()
  useNewMessages()
  useEffect(()=>{
lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  },[allMessages])
  
  return (
    <div className="px-4 flex-1 overflow-auto">  
        {
          loading ? 
          Array(3).fill().map((_,idx)=> <MessagesSkeleton key={idx} /> )
          : 
          allMessages.length===0 ? <p className='text-center text-gray-200 mt-4'>No messages yet</p> : allMessages.map((msg) => (
            <div key={msg._id} ref={lastMessageRef}>
              <Message  msg={msg} />
            </div>
          ))
       
        }
    </div>
  )
}

export default Messages