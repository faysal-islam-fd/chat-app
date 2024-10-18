import { useState } from "react"
import toast from "react-hot-toast"

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async({fullName,username,password,confirmPassword,gender}) =>{
        
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success) return;
        setLoading(true)
        try{
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({fullName,username,password,confirmPassword, gender })            
            })   
            const { success, message } = await res.json()
            if(!success){
                toast.error(message)
            }
            else{
                toast.success("Account created successfully")      
            }
            
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,signup}
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        if(!fullName){
            toast.error("Please Enter your full name")
        }
        else if(!username){
            toast.error("Please Enter your username")
        }
        else if(!password){
            toast.error("Please Enter your password")
        }
        else if(!confirmPassword){
            toast.error("Please Confirm your password")
        }
        else if(password !== confirmPassword){
            toast.error("Passswords do not match")
        }
        else if(gender === ""){
            toast.error("Please select your gender")
        }
        return false;
    }
    else{
        return true;
    }
}