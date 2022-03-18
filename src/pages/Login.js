import React from 'react';
import {useState} from 'react';
import Register from '../pages/Register';

const Login = () => {
//Toggle click here button
const [toggle, setToggle] = useState(false)

function handleToggle(e){
    setToggle(!toggle)
}

  return (
    <>
    <h1>Login at DAYDREAMFX</h1>
    <div>
    {toggle ? <Register /> : <Login />}
    </div>
    <div>
            <h6>Already Have an Account.</h6> 
            <div onClick={handleToggle}>Click Here!</div>
        </div>
    <br />
    </>
    
  )
}

export default Login;