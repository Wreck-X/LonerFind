import React, { useState,useEffect } from 'react';

function SlidePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log("button clicked")
  };

  return (
    <div className={`slide-panel ${isOpen ? 'open' : ''}`} onClick={togglePanel}>
      <div className="panel-content">
      <div className='buttonsdiv'>
        <div id='fibutton' onClick={handleButtonClick}></div>
        <div>
        <div id='sibutton'onClick={handleButtonClick}></div>
        <div id='openclosebutton' onClick={handleButtonClick}></div>
        </div>
        <div id='tibutton' onClick={handleButtonClick}></div>
      </div>
      </div>
    </div>
  );
}

export default SlidePanel;