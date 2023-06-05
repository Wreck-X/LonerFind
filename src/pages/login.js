import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function Login({setToken}) {
    useEffect(() => {
        console.log(Cookies.get('token'))
        if(Cookies.get('token') !== undefined){
          window.location.href= '/map'
        }
          }, []);
    const [username, setUsername_] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
       
        e.preventDefault();

        Cookies.set('username',username)
        axios
            .post("https:django.biscuitbobby.me/auth/", {
                username: username,
                password : password,
            })
            .then((res) => {
                Cookies.set('token',res.data['token']);
                window.location.reload()
                console.log('lmao')
            },
           
            )
            .catch((err) => {});//dispklay login failed
    };
    

    return (
        <div className='Container'>
            <div className='Card'>
                <div className='Title'>LonerFind</div>
                <h1 className='logintitle'>Login</h1>
                <div className='Cardbody'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-fields'>
                            <div><input className='input1' placeholder='Username' onChange={e => setUsername_(e.target.value)} required></input></div>
                            <div><input className='input1' placeholder='Password' type='password' onChange={e => setPassword(e.target.value)} required></input></div>
                        </div>
                        <div className='buttonalign'>
                            <button className='loginbutton' onClick={handleSubmit}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


