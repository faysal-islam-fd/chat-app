import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { getTime } from "../../utils/getTime";


const Message = ({msg}) => {

  const {authUser} = useContext(AuthContext)
  const { selectedConversation } = useConversation()

  const {message,senderId,receiverId,createdAt} = msg;
  const sender = authUser._id === senderId
  return (
    <div>
   
<div className={`chat ${ sender ? " chat-end" :" chat-start"}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={sender ? authUser.profilePic : selectedConversation.profilePic}
      />
        </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50"></time>
  </div>
  <div className={`chat-bubble text-gray-50  ${sender ? " bg-blue-500" :"bg-slate-900"}`}>{message}</div>
  <div className="chat-footer opacity-50">sent at {getTime(createdAt)}</div>
</div>
    </div>
  )
}

export default Message