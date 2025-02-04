import React from 'react'
import "../style.scss"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Soul Omegle</span>
        <span className="title">Register</span>
        <form >
          <input type="text" placeholder='Display name' />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <button>Sign up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
}

export default Register