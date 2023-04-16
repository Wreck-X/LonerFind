import React, {useState} from 'react'
import axios from 'axios';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("https:biscuitbobby.me/add/", {
                username: username,
                password : password,
                email:"example@email.com"
            })
            .then((res) => {
                this.setState({
                    username: "",
                    password: "",
                });
                window.location.href = '/datatest'
            })
            .catch((err) => {});
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
                            <input id='inputuser' placeholder='Username' onChange={e => setUsername(e.target.value)} required></input>
                        </div>
                        <div className='pwdflex'>
                            <label id='labelpwd'>Password:</label>
                            <input id='inputpwd' placeholder='Password' onChange={e => setPassword(e.target.value)} required></input>
                        </div>
                        <div className='buttonalign'>
                            <button className='loginbutton'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
