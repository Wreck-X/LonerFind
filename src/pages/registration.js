import React from 'react'
import { useState } from 'react';
import { register } from '../services/api/registerapi';
import { useNavigate } from 'react-router-dom';


export default function Registration() {
  
  
  const [username, setUsername_] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('');

  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate('/login');
  };
  return (
    <>
    <div className='registration-page'>
        <div className='registration-card'>
            <div className='registration-card-title'>Register now!</div>
            <div className='input-fields'>
                <div><input className='input2' placeholder='Username' onChange={e => setUsername_(e.target.value)} ></input></div>
                <div><input className='input2' placeholder='Email' onChange={e => setEmail(e.target.value)}></input></div>
                <div><input className='input2' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)}></input></div>
            </div>
            <div className='buttonalign'>
                <button className='Registerbutton' onClick={() => register(username,password,email).then(navigatetologin)} >Register</button>
            </div>
        </div>
    </div>
    </>
  )
}