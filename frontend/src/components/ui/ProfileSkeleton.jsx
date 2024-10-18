


const ProfileSkeleton = () => {
  return (
    <div className="flex w-52 px-2 py-1 flex-col gap-4">
       <div className="flex items-center gap-4">
         <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
           <div className="flex flex-col gap-4">
             <div className="skeleton h-4 w-28"></div>
           </div>
        </div>
    </div>
  )
}

export default ProfileSkeleton