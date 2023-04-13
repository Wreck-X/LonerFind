import React from 'react'
import { useNavigate } from 'react-router-dom'; 
export default function Secpage() {
  const navigate = useNavigate();
  const navigatetomap = () => {
    navigate('/map');
  };
  return (
   
    <div class="animation_layer parallax" id="secpage">
      <div className='Test'>
        <div className='Heading'>Why us?</div>
        <div className='para1'>
          <p id='paratext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='tryhead'>Try now!</div>
        <div id='butdiv'>
          <button className='button1' onClick={navigatetomap}>Something</button>
        </div>
        <div className='carddiv'>
          <div id='card1'></div>
          <div id='card2'></div>
        </div>
      </div>
    </div>
  )
}
