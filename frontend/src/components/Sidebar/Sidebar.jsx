import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import Searchbar from "./Searchbar"


const Sidebar = () => {
  return (
  <div className="p-4 relative  flex  flex-col  border-r border-slate-600  ">
        <Searchbar />
        <div className="divider" />
        <Conversations />
         <LogoutButton />
    </div>
  )
}

export default Sidebar