import React from 'react'

export default function Login() {
  return (
    <>
        <div className="login-form">
          <p>Login</p>
          <input type="text" placeholder='User Name' />
          <input type="password" placeholder='Password' />
          <p><a href='#'> Forgot Password?</a></p>
          <button>Login</button>
          <p>Continue With</p>
        </div>
    </>
  )
}
