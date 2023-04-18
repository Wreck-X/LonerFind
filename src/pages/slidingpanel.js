import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
import Cookies from 'js-cookie';

const SlidePanel = ({handleClick,togglePanel,isOpen}) => {
  
  const currentDate = new Date();
  const dateString = currentDate.toDateString();

                                                                
  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log("other button clicked")
  }
  return (
    <>
    
    <div className={`slide-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      <div className="panel-content">
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
      </div>
    </div>
    </>
  );
}

export default SlidePanel;