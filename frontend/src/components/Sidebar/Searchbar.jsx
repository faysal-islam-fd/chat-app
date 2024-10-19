

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import useConversation from "../../store/useConversation";


const Searchbar = () => {
  
  const [search,setSearch] = useState('')
  const {conversations} = useGetConversations()
  const {setSelectedConversation} = useConversation()
  
  function handleSubmit(e){
      e.preventDefault()
      if(!search) return;
      if(search.length < 3) {
        return toast.error("Too short search term")
      }
      const conversation = conversations.find(c=> c.fullName.toLowerCase().includes(search.toLowerCase()))
      if(!conversation) return toast.error("No user found")
        setSelectedConversation(conversation)
      setSearch("")
      

  }
  return (
    <form action="" onSubmit={handleSubmit} className="flex items-center gap-2">
        <input onChange={(e)=>setSearch(e .target.value)} value={search} type="text" placeholder="search..." className="input input-bordered rounded-full" />
        <button className="bg-blue-500 hover:bg-gray-800 hover:transition-all p-4 rounded-full text-white"><FaSearch  className="outline-none"/></button>
    </form>
  )
}

export default Searchbar