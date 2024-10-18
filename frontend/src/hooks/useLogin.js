import { useState } from "react"



const useLogin = () => {
  
    const [loading,setLoading] = useState(false)
    const login = async({username,password}) =>{
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
                localStorage.setItem("authUser",JSON.stringify(user))
                window.location.reload()
            }
            
        }catch(error){
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }
    return {loading,login};
}

export default useLogin