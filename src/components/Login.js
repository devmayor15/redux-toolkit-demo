import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../feature/user'

function Login() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {dispatch(login({name: "Martins", age: 16, email: "oloyedemartins15@gmail.com"}))}}>Login</button>

        <button onClick={() => {dispatch(logout())}}>Log out</button>
    </div>
  )
}

export default Login