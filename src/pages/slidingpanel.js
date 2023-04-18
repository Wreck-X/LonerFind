import React, { useState } from 'react';
import { useMap } from 'react-leaflet';
const SlidePanel = ({handleClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
                                                                
  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log("other button clicked")
  }
  return (
    <>
    
    <div className={`slide-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      <div className="panel-content">
      <div className='Profile-card-panel'></div>
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