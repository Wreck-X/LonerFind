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
    <div className={`slide-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      <div className="panel-content">
      <div className='buttonsdiv'>
        <div id='fibutton' onClick={handleButtonClick}></div>
        <div>
        <div id='sibutton' onClick={handleClick}></div>
        <div id='openclosebutton' onClick={togglePanel}></div>
        </div>
        <div id='tibutton' onClick={handleButtonClick}></div>
      </div>
      </div>
    </div>
  );
}

export default SlidePanel;