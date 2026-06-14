import React, { useState } from 'react'
import '../auth.form.scss'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../auth.context.jsx'

const Login = () => {

  const {loading, handleLogin} = useAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor='email'></label>Email
              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id='email' name='email' placeholder='Enter email address'/>
          </div>

          <div className="input-group">
            <label htmlFor='password'></label>Password
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id='password' name='password' placeholder='Enter password'/>
          </div>

          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
      </div>
    </main>
  )
}

export default Login
