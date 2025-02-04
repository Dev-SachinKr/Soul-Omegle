import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='formContainer'>
        <div className='formWrapper'>
        <span className="logo">Soul Omegle</span>
        <span className="title">Login</span>
        <form >
          {/* <input type="text" placeholder='Display name' /> */}
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
        </form>
        <p>Don't have an account? Sign up</p>
      </div>
    </div>

  </div>
  )
}

export default Login