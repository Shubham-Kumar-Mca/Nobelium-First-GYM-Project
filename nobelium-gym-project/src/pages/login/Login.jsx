import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import { AuthContext } from '../../context/AuthContextProvider';

const initialState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  },
};

const Login = () => {
  const [userLogin, setUserLogin] = useState(initialState);
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {};

    if (!userLogin.email) {
      errors.email = 'Please Enter Email Id';
      isValid = false;
    }

    if (!userLogin.password) {
      errors.password = 'Please Enter Password';
      isValid = false;
    } else if (userLogin.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
      isValid = false;
    }else {
      const checkingVali = userData.find(user => user.email === userLogin.email);
      if (!checkingVali) {
        alert("Email and password do not match. Please sign up first!");
        navigate("/register");
      }else if(checkingVali.password !== userLogin.password){
        if(checkingVali.email === userLogin.email){
          errors.password = 'Password is incorrect. Please try again';
          isValid = false;
        }else{
          errors.email = 'Email Id is incorrect. Please try again';
          isValid = false;
        }
      }else{
        const updatedAuth = userData.map((user, i)=> {
          if(user.id === checkingVali.id){
            return {...user, isAuth : true}
          }else{
            return user
          }
        })
        setUserData(updatedAuth)
        alert("Login Sucessfull!");
        navigate("/");
      }
    }

    if(!isValid){
      setUserLogin({ ...userLogin, errors });
    }

  };



  return (
    <div className="cart w">
      <form onSubmit={handelSubmit}>
        <div>
          <label>Your Email</label>
          <input type="email" placeholder="Enter email..." name="email" value={userLogin.email} onChange={handelInputChange} />
          {userLogin.errors.email && <p className="pTag">{userLogin.errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password..." name="password" value={userLogin.password} onChange={handelInputChange} />
          {userLogin.errors.password && (
            <p className="pTag">{userLogin.errors.password}</p>
          )}
        </div>
        <div className="singInBtn">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div className="link">
        <hr className="hrIS me-3" />
        <Link to="/register">Register</Link>
        <hr className="hrIS ms-3" />
      </div>
    </div>
  )
}

export default Login