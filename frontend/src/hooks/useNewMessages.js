import { useContext, useEffect } from "react"
import { SocketContext } from "../context/SocketContext"
import useConversation from "../store/useConversation"
import notificationSound from '../assets/sound/notification.mp3'

const useNewMessages = () => {

    const {socket} = useContext(SocketContext)
    console.log("socket : ",socket);
    
    const {messages,setMessages} = useConversation()
    useEffect(()=>{
        socket?.on("newMessage",(message)=>{
            console.log("new messages",message);
            
           const sound = new Audio(notificationSound)
           sound.play()
            message.shouldShake = true
            setMessages(prev=>[...prev,message])
        })
        return ()=>{
            socket.off("newMessage")
        }
    },[socket,setMessages,messages])
}

export default useNewMessages