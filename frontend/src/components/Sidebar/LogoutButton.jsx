
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";


const LogoutButton = () => {
  const {loading,logout} = useLogout()

  return (
    <div className=" bottom-3 absolute">{
      loading ? <span className="loading loading-spinner loading-xs"></span>:
      <BiLogOut onClick={logout} className="size-6 cursor-pointer hover:text-white hover:transition-all"/>

   }
           </div>
  )
}

export default LogoutButton 