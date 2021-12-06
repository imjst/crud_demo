import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('student')
  const [name, setName] = useState('')
  const addNewUser = async (e) => {
    e.preventDefault()
    const userData = {
      name:name,
      email: email,
      password: password,
      user: user,
    }
    await axios.post('http://localhost:3001', userData)
    console.log('status code: 200')
  }
  return (
    <div>
      <input palceholder="email" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
      <input palceholder="password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
      <input palceholder="name" type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
      <select name="user" value={user} onChange={(event) => { setUser(event.target.value) }}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button onClick={(e) => { addNewUser(e) }}>Submit</button>
    </div>
  )
}

export default App
