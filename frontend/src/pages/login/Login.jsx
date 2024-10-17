import Input from "../../components/ui/Input"


const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="p-6 h-full w-full bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-100">Login   <span className="text-blue-500">ChatApp</span></h1>
          <form className="mt-4" action="">
              <Input placeholder="Enter Email" label="Email" name="email" type="text" />   
              <Input placeholder="Enter Password" label="Password" name="password" type="password" />  
             
              <p className=" my-2 text-gray-300">{"Don't"} have an account? <a className="text-blue-500 font-semibold hover:underline hover:transition-all" href="">Signup</a></p>
              <div className="">
                <button className="  btn-block text-[18px] btn">Login</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Login