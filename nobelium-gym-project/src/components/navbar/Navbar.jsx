import React, { useEffect, useState } from 'react';
import { Link, NavLink, json } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import Logo from "../../../images/logo.png";
import "./navbar.css";

const Navbar = () => {
    const links = [
        { name: "Home", path: '/' },
        { name: "About", path: '/about' },
        { name: "Plans", path: '/plans' },
        { name: "Contact", path: '/contact' },
        { name: "Register", path: '/register' },
        { name: "Login", path: '/login' }
    ]
    const [isNavShowing, setIsNavShowing] = useState(false)
    const userAuthenticationFromLS = JSON.parse(localStorage.getItem("userAuthentication")) || {}
    const { isAuth, fullName } = userAuthenticationFromLS;
    const [greetigWithName, setGreetingWithName] = useState("")

    useEffect(() => {
        const newArr = fullName?.split(" ");
        const lastName = newArr?.pop()
        const initial = newArr?.map(word => word.charAt(0)).join(".");
        const newFullName = initial + "." + lastName;
        setGreetingWithName(newFullName)
    }, [isAuth])

    const handelAuthChange = (text) =>{
        setIsNavShowing(prev => !prev)
        console.log("text is", text);
        if(text==="Logout"){
            localStorage.setItem("userAuthentication", JSON.stringify(""))
        }
    }

    return (
        <nav>
            <div className="container nav__contaier">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" title='Nav_Logo' />
                </Link>
                <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                    {
                        links.map(({ name, path }, index) => (
                            <li key={index}>
                                <NavLink to={!isAuth ? path : path==="/register" ? "" : path}  className={({ isActive }) => isActive ? "active-nav" : ""} onClick={() => handelAuthChange(!isAuth ? name : name === "Login" ? "Logout" : name)}>{!isAuth ? name : name === "Login" ? "Logout" : name !== "Register" ? name : <small>Welcom {greetigWithName}</small>}</NavLink>
                            </li>
                        ))
                    }
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