import Input from "../../components/ui/Input"
import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="p-6 h-full w-full bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray-100">Signup   <span className="text-blue-500">ChatApp</span></h1>
          <form className="mt-4" action="">
              <Input placeholder="Enter full Name" label="Full Name" name="fullname" type="text" />   
              <Input placeholder="Enter Email" label="Email" name="email" type="email" />  
              <Input placeholder="Enter Password" label="Password" name="password" type="password" />  
              <Input placeholder="Confirm Password" label="Confirm Password" name="password" type="password" />  
              <GenderCheckbox />  
              <div className="">
                <button className="  btn-block text-[16px] btn">Login</button>
              </div>
              <p className=" my-2 text-gray-300">Already have an account? <a className="text-blue-500 font-semibold hover:underline hover:transition-all" href="">Login</a></p>
              
          </form>
      </div>
    </div>
  )
}

export default Signup