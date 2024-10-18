import { Link } from "react-router-dom"
import Input from "../../components/ui/Input"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"


const Login = () => {
  const [inputs,setInputs] = useState({
    username:"",
    password:""
  })
  const {loading,login} = useLogin()
  async function handleSubmit(e){
    e.preventDefault()
    await login(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="p-6 h-full w-full bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-100">Login   <span className="text-blue-500">ChatApp</span></h1>
          <form onSubmit={handleSubmit} className="mt-4" action="">
              <Input value={inputs.username} setInputs={setInputs} placeholder="Enter Username" label="Username" name="username" type="text" />   
              <Input value={inputs.password} setInputs={setInputs} placeholder="Enter Password" label="Password" name="password" type="password" />  
             
              <p className=" my-2 text-gray-300">{"Don't"} have an account? <Link className="text-blue-500 font-semibold hover:underline hover:transition-all" to="/signup">Signup</Link></p>
              <div className="">
                  <button disabled={loading} className="  btn-block text-[18px] btn">

                    {
                      loading ? <span className="loading loading-dots loading-md"></span> : "Login"
                    }
                  </button>
             
              </div>
          </form>
      </div>
    </div>
  )
}

export default Login