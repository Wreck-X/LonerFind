import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';


export default function Login({setToken}) {
    const navigate = useNavigate();
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
                Cookies.set('token',res.data['token'])
                this.setState({
                    username: "",
                    password: "",
                });
            })
            .catch((err) => {});
            
            navigate('/map'); 
            
    };
    

    return (
        <div className='Container'>
            <div className='Card'>
                <div className='Title'>LonerFind</div>
                <h1 className='logintitle'>Login</h1>
                <div className='Cardbody'>
                    <form onSubmit={handleSubmit}>
                        <div className='userflex'>
                            <label id='labeluser' >Username:</label>
                            <input id='inputuser' placeholder='Username' onChange={e => setUsername_(e.target.value)} required></input>
                        </div>
                        <div className='pwdflex'>
                            <label id='labelpwd'>Password:</label>
                            <input id='inputpwd'  placeholder='Password' type="password" onChange={e => setPassword(e.target.value)} required></input>
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


