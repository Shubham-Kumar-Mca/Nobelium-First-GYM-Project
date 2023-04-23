import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const userDataFromLS = JSON.parse(localStorage.getItem("RegisterData")) || []
    const [userData, setUserData] = useState(userDataFromLS);


    const handelUserData = (newUser) => {
        setUserData([...userData, newUser])
    }
    

    useEffect(()=>{
        localStorage.setItem("RegisterData", JSON.stringify(userData))
    },[userData])
    return (
        <AuthContext.Provider value={{ userData, handelUserData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider