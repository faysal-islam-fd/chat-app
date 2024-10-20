import { useContext, useEffect } from "react"
import { SocketContext } from "../context/SocketContext"
import useConversation from "../store/useConversation"
import notificationSound from '../assets/sound/notification.mp3'

const useNewMessages = () => {

    const {socket} = useContext(SocketContext)
    
    
    const {messages,setMessages} = useConversation()
    useEffect(()=>{
        socket?.on("newMessage",(message)=>{            
           const sound = new Audio(notificationSound)
            sound.play()
           console.log("new msg : ",message);
           setMessages([...messages, message]);
           
           
        })
        return ()=>{
            socket.off("newMessage")
        }
    },[socket,setMessages,messages])
}

export default useNewMessages