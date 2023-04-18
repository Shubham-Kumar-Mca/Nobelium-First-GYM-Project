import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";


import Logo from "../../../images/logo.png";
import "./navbar.css";

const Navbar = () => {
    const links = [
        { name: "Home", path: '/' },
        { name: "About", path: '/about' },
        { name: "Gallery", path: '/gallery' },
        { name: "Plans", path: '/plans' },
        { name: "Trainers", path: '/trainers' },
        { name: "Contact", path: '/contact' }
    ]
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <nav>
            <div className="container nav__contaier">
                <Link to="/" className='logo' onClick={()=>setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" title='Nav_Logo'/>
                </Link>
                <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                    {
                        links.map(({name, path},index)=>(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=>isActive ? "active-nav" : ""} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
                    {
                        isNavShowing ? <MdOutlineCancel /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar