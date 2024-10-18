import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { AuthContext } from "../context/AuthContext"




const useLogout = () => {
    const [loading,setLoading] = useState(false)
    const {setAuthUser}= useContext(AuthContext)
    const logout = async() =>{
        setLoading(true)
        try{
            const res = await fetch("/api/auth/logout",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data =await res.json()
           
            
            if(!data.success){
                throw new Error(data.message)
            }
            localStorage.removeItem("authUser")
            setAuthUser(null)
            toast.success(data.message)
        }catch(error){
            console.log(error);
            
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}

export default useLogout