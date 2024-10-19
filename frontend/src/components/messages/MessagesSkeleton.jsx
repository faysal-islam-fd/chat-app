




const MessagesSkeleton = () => {
  return (
   <div className="mt-4  flex flex-col  gap-8">
        <div className="chat  chat-start">
            <div className="chat-image  avatar">
                <div className="w-10  skeleton rounded-full"></div>
            </div>
            <div className="chat-bubble skeleton md:min-w-36"></div>
            <div className="chat-footer  opacity-50"></div>
        </div>
        <div className="chat  chat-end">
            <div className="chat-image  avatar">
                <div className="w-10  skeleton rounded-full"></div>
            </div>
            <div className="chat-bubble skeleton md:min-w-36"></div>
            <div className="chat-footer  opacity-50"></div>
        </div>
   </div>
  )
}

export default MessagesSkeleton 