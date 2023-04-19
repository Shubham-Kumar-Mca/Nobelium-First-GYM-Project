import React, { useState, useEffect, useRef, Fragment } from "react";

import { useNavigate } from "react-router-dom";

localStorage.removeItem("userList");

const RegisterLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loginDetails, setLoginDetails] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const userList = useRef([]);

  // useEffect(()=>{
  //     localStorage.setItem("userList", "")
  // },[])

  function inputEmail(event) {
    const userEmail = event.target.value;
    setUser({ email: userEmail });
  }

  function inputPassword(event) {
    const userPassword = event.target.value;
    setUser({ ...user, password: userPassword });
  }

  function formSubmit(event) {
    event.preventDefault();
    // console.log(user)
    addUser(user);
    setUser({ email: "", password: "" });
    // setIsRegistered(true)
  }

  function addUser(user) {
    const users = JSON.parse(localStorage.getItem("userList") || "[]");
    userList.current = [...users, user];
    localStorage.setItem("userList", JSON.stringify(userList.current));
  }

  function checkUser(event) {
    event.preventDefault();
    console.log(loginDetails);
    checkRegistered(loginDetails);
  }

  function checkEmail(event) {
    const loginEmail = event.target.value;
    setLoginDetails({ email: loginEmail });
  }

  function checkPassword(event) {
    const loginPassword = event.target.value;
    setLoginDetails({ ...loginDetails, password: loginPassword });
  }

  function checkRegistered(user) {
    const users = JSON.parse(localStorage.getItem("userList"));
    const l = users.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      if (
        user.email === users[i].email &&
        user.password === users[i].password
      ) {
        setIsRegistered(true);
        break;
      }
    }
  }

  function reHomePage() {
    navigate("/about");
  }


  function loginClick(){
    setIsRegistered(true)
  }

  return (
    <Fragment>
      {!isRegistered && (
        <div>
          <h2>Register below</h2>
          <form onSubmit={formSubmit}>
            <label>
              Enter your email ID:{" "}
              <input
                type="email"
                value={user.email || ""}
                onChange={inputEmail}
              />
            </label>
            <pre> </pre>
            <label>
              Enter your password:{" "}
              <input
                type="password"
                value={user.password || ""}
                onChange={inputPassword}
              />
            </label>
            <input type="submit" />
          </form>
          <hr/>
          <button onClick={loginClick}>Login</button>
          </div>)}

          {isRegistered && (<div> 
            <h2>Login below</h2>

          <form onSubmit={checkUser}>
            <label>
              Enter your email ID: <input type="email" onChange={checkEmail} />
            </label>
            <label>
              Enter your password:{" "}
              <input type="password" onChange={checkPassword} />
            </label>
            <input type="submit" />
          </form>  
        <div>
          <p>Succesfully logged in</p>
          <button onClick={reHomePage}>Go to Home</button>
        </div>
        </div>)}
      
    </Fragment>
  );
};

export default RegisterLogin;
