import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const  [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null)
    return (
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}

