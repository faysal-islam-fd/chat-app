import { useContext } from "react";
import useConversation from "../../store/useConversation"
import { SocketContext } from "../../context/SocketContext";


const Conversation = ({conversation,emoji,lastIdx}) => {

 const {username,profilePic,_id} = conversation;
  const {selectedConversation,setSelectedConversation} = useConversation()
  const{onlineUsers} = useContext(SocketContext)
  const isOnline = onlineUsers.includes(conversation._id)
  const isSelected = selectedConversation?._id === _id
  
  
  return (
    <>
        <div 
        onClick={()=>setSelectedConversation(conversation)}  
        className={`flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer ${isSelected ? " bg-blue-500" :""}`}>
        <div className={`avatar ${isOnline ? "online" :"offline"}`}>
        <div className="w-16 rounded-full">
            <img src={profilePic} />
            </div>
        </div>
        <div className="flex flex-col  flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{username}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
        </div>
        {
          !lastIdx && <div className="border-b border-gray-500"></div>
        }
    </>
  )
}

export default Conversation