import React from "react";
import { Navigate } from "react-router-dom"


const PrivateRoute = ({ children }) => {
    const userAuthenticationFromLS = JSON.parse(localStorage.getItem("userAuthentication")) || {}

    if(!userAuthenticationFromLS.isAuth){
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute