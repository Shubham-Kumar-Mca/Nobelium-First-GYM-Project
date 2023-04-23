import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import Logo from "../../../images/logo.png";
import "./navbar.css";
import { AuthContext } from '../../context/AuthContextProvider';
// const links = [
//     { name: "Home", path: '/' },
//     { name: "About", path: '/about' },
//     { name: "Plans", path: '/plans' },
//     { name: "Contact", path: '/contact' },
//     { name: "Register", path: '/register' },
//     { name: "Login", path: '/login' }
// ]

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
    const [greetigWithName, setGreetingWithName] = useState("")
    const [auth, setAuth] = useState(false)
    const { userData, setUserData } = useContext(AuthContext);

    const navigate = useNavigate()




    const handelLogoutClicking = () => {
        const updatedAuth = userData.map((user) => {
            if (user.isAuth === auth) {
                return { ...user, isAuth: false }
            } else {
                return user
            }
        })
        setUserData(updatedAuth)
        setAuth(false)
        navigate("/login")
        
    }


    useEffect(()=>{
        const currUser = userData.find(ele=>ele.isAuth === true);
        if(currUser === undefined){
            setAuth(false)
        }else{
            setAuth(true)
            const newArr = currUser.fullName.split(" ");
            const lastName = newArr?.pop()
            const initial = newArr?.map(word => word.charAt(0)).join(".");
            const newFullName = initial + "." + lastName;
            setGreetingWithName(newFullName)
        }
    },[userData])



    return (
        <nav>
            <div className="container nav__contaier">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" title='Nav_Logo' />
                </Link>
                <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-nav" : ""}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-nav" : ""}>About</NavLink></li>
                    <li><NavLink to="/plans" className={({ isActive }) => isActive ? "active-nav" : ""}>Plans</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-nav" : ""}>Contact</NavLink></li>
                    <li>{auth ? <span style={{ color: "var(--color-gray-100", cursor : "pointer" }} >Welcome {greetigWithName}</span>: <NavLink to="/register" className={({ isActive }) => isActive ? "active-nav" : ""}>Register</NavLink>}</li>
                    <li>{auth ? <p style={{ color: "var(--color-gray-100", cursor : "pointer" }} onClick={handelLogoutClicking} >Logout</p> : <NavLink to="/login" className={({ isActive }) => isActive ? "active-nav" : ""}>Login</NavLink>}</li>
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineCancel /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar;