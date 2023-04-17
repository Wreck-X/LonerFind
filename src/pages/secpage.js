import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Secpage() {
  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate('/login');
  };
  return (
   
    <div class="animation_layer parallax" id="secpage">
      <div className='Test'>
        <div className='Heading'>Why us?</div>
        <div className='para1'>
          <p id='paratext'>Our website is the perfect choice for loners who are looking to connect with others and attend events that cater to their interests. Our platform is designed to make it easy for you to find and join events that match your preferences and schedule, without the hassle of traditional event planning. We understand the challenges that come with trying to find events that are welcoming to those who prefer to spend time alone, and we have tailored our platform to provide a safe and inclusive space for you to connect with like-minded individuals</p>
        </div>
        <div className='tryhead'>Try now!</div>
        <div id='butdiv'>
          <button className='button1' onClick={navigatetologin}>Click here</button>
        </div>
        <div className='carddiv'>
          <div id='card1'>
            <div id='card1title'>BiscuitBobby</div>
          </div>
            
          <div id='card2'>
            <div id='card2title'>Wreck</div>
          </div>
        </div>
      </div>
    </div>
  )
}
