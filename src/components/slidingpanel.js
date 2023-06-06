import React from 'react';
import Cookies from 'js-cookie';

const SlidePanel = ({handleClick,togglePanel,isOpen}) => {
  
  const currentDate = new Date();
  const dateString = currentDate.toDateString();
  return (
    <>
    
    <div className={`slide-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      {/* <div className="panel-content">
      <div className='Profile-card-panel'>
        <div className='alignprofilecard'>
          <div className='Profileincard'></div>
        </div>  
        <div className='usernameincard'>
          Username: {Cookies.get('username')}
          <br/>
          Date: {dateString}
        </div>

      </div>
      <div className='buttonsdiv'>
        <div>
          <div id='sibutton' onClick={handleClick}></div>
          <div id='openclosebutton' onClick={togglePanel}></div>
        </div>
      </div>
      
      </div> */}
      <div className='center-title'>Your Profile</div>
      <div className='profile-image'></div>
      <div  className='align-dets'  >
        <div>{Cookies.get('username')}</div>
        <div>{dateString}</div>
      </div>
      <div className='profile-body'>
      <div className='event-profile-card'>
        <div className='event-title'>Your Event</div>
        <div className ='event-body'>
          <div>Running Since - </div>
          <div>Type - </div>
          <div>Details - </div>
        </div>
      </div>
      </div>


    </div>
    </>
  );
}

export default SlidePanel;