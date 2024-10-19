import { useEffect, useState } from "react"
import useConversation from "../store/useConversation"
import toast from "react-hot-toast"



const useGetMessage = () => {

    const [loading,setLoading] = useState(false)
    const [allMessages,setAllMessages] = useState([])

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
                setAllMessages(data.data)
                
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }

        }
        getMessage()
        
        return ()=>{
          
            setAllMessages([])
        }
       
    },[selectedConversation?._id,messages])

    return {loading,allMessages};
}

export default useGetMessage