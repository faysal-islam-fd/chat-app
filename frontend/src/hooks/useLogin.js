import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"



const useLogin = () => {
    const [loading,setLoading] = useState(false)
    const {setAuthUser}= useContext(AuthContext)
    const login = async({username,password}) =>{
        if(!username){
            return toast.error("Please provide username")
        }
        else if(!password){
            return toast.error("Please provide password!")
        }
        setLoading(true)
        try{
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password})            
            })   
            const { success, message ,user } = await res.json()
            if(!success){   
                throw new Error(message)
            }
            else{
                setAuthUser(user)
                localStorage.setItem("authUser", JSON.stringify(user))
                
            }
            
        }catch(error){
            toast.error(error.message)            
        }finally{
            setLoading(false)
        }
    }
    return {loading,login};
}

export default useLogin