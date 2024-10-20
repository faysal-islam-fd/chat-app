import { useEffect, useState } from "react"
import useConversation from "../store/useConversation"
import toast from "react-hot-toast"



const useGetMessage = () => {

    const [loading,setLoading] = useState(false)
    // const [allMessages,setAllMessages] = useState([])

    const {messages,setMessages, selectedConversation} = useConversation()
    
    
    useEffect(()=>{
        const getMessage = async() =>{
            setLoading(true)
            try{
                const res = await fetch(`/api/message/send/${selectedConversation._id}`)
                const data = await res.json()
                
                if(!data.success){
                    throw new Error(data.message)
                }
                setMessages(data.data)
                
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }

        }
      if(selectedConversation?._id)  getMessage()
        
    
       
    },[selectedConversation?._id,setMessages])

    return {loading,messages};
}

export default useGetMessage