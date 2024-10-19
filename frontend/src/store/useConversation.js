


import { create } from "zustand";

const useConversation =  create((set)=>({
    selectedConversation: null,
    setSelectedConversation: (state)=>set({selectedConversation:state}),
    messages: [],
    setMessages: (state)=>set({messages:state}),
}))

export default useConversation;