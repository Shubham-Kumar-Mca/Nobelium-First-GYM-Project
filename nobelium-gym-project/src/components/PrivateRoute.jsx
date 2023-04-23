import React, { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider";


const PrivateRoute = ({ children }) => {
    const { userData } = useContext(AuthContext);
    const currentUser = userData.find(element => element.isAuth === true )
    
    if(currentUser === undefined){
        return <Navigate to="/login" />
    }
    return children
        
}

export default PrivateRoute
