import React from 'react'

export default function Registration() {
  return (
    <>
    <div className='registration-page'>
        <div className='registration-card'>
            <div className='registration-card-title'>Register now!</div>
            <div className='input-fields'>
                <div><input className='input2' placeholder='Name'></input></div>
                <div><input className='input2' placeholder='Email'></input></div>
                <div><input className='input2' placeholder='Username'></input></div>
                <div><input className='input2' placeholder='Password' type='password'></input></div>
                
            </div>
            <div className='buttonalign'>
                <button className='Registerbutton' >Register</button>
            </div>
        </div>
    </div>
    </>
  )
}
