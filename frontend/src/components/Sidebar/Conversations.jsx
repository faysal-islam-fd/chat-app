import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis";
import ProfileSkeleton from "../ui/ProfileSkeleton";
import Conversation from "./Conversation"




const Conversations = () => {

  const {loading,conversations} = useGetConversations()
  console.log(conversations);
  
  return (
    <div className="h-3/4 scrollbar-hidden  overflow-y-scroll">
     {
      loading ?
Array(5).fill().map((_, index) => <ProfileSkeleton key={index} />)
:
conversations.map((conversation,idx) => <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={conversations.length - 1 === idx} />)
     }
    </div>
  )
}

export default Conversations