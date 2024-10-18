import { Link } from "react-router-dom"
import Input from "../../components/ui/Input"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

const Signup = () => {

  const [inputs,setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const {loading,signup} = useSignup()
  
 async function handleSubmit(e){
    e.preventDefault()
    signup(inputs)
    
  }
  function handleSelectGender(gender){
      setInputs(prev=> ({...prev,gender:gender}))
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="p-6 h-full w-full bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-100">Signup   <span className="text-blue-500">ChatApp</span></h1>
          <form onSubmit={handleSubmit} className="mt-4" action="">
              <Input setInputs={setInputs} value={inputs.fullName} onChange={setInputs} placeholder="Enter full Name" label="Full Name" name="fullName" type="text" />   
              <Input setInputs={setInputs} value={inputs.username} placeholder="Enter Username" label="Username" name="username" type="text" />  
              <Input setInputs={setInputs} value={inputs.password} placeholder="Enter Password" label="Password" name="password" type="password" />  
              <Input setInputs={setInputs} value={inputs.confirmPassword} placeholder="Confirm Password" label="Confirm Password" name="confirmPassword" type="password" />  
              <GenderCheckbox selectGender={inputs.gender} onSelectGender={handleSelectGender} />  
              <div className="">
                <button className="  btn-block text-[16px] btn">{loading ? <span className="loading loading-dots loading-md"></span> : "Login"}</button>
              </div>
              <p className=" my-2 text-gray-300">Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline hover:transition-all" >Login</Link></p>
              
          </form>
      </div>
    </div>
  )
}

export default Signup