

import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Login from './pages/login/Login'
import { Toaster } from "react-hot-toast"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

const App = () => {
  const {authUser} = useContext(AuthContext)


  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/signup" element={authUser ? <Navigate to="/" />  : <Signup />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={authUser ?  <Home />: <Navigate to="/login" /> } />
      </Routes>

      <Toaster />

    </div>
  )
}

export default App