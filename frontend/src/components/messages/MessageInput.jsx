

import { useState } from 'react';
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  async function handleSendMessage(e){
    e.preventDefault()
    if(!message) return;

    sendMessage(message)
    setMessage('')
  }
  const [message,setMessage] = useState('')
  const {loading,sendMessage} = useSendMessage()
  return (
    <form action="" className="px-4 my-3">
        <div className="w-full relative">
            <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text"  className="border text-[16px] rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" name="message" id=""
            placeholder="Send a message"
            />
            <button disabled={loading} onClick={handleSendMessage} className='absolute inset-y-0 end-0  pe-3 '>{

              loading ? 
              
              
            <span className="loading loading-spinner loading-md"></span>
              : <BsSend  className='size-6 hover:text-slate-200 hover:transition-all text-black bg'/>
            }</button>
        </div>
    </form>
  )
}

export default MessageInput

