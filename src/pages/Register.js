import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div>
        <h1>Register at DAYDREAMFX</h1>
        {/* {localStorage.getItem('token') ? "" : <RegisterForm />} */}
        <RegisterForm />
        <br />
    </div>
  )
}

export default Register;