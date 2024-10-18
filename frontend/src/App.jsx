

import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Signup from "./pages/signup/Signup"
import Login from './pages/login/Login'
import { Toaster } from "react-hot-toast"

const App = () => {
  const user = false;
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <Home /> : <Login />} />
      </Routes>

      <Toaster />

    </div>
  )
}

export default App