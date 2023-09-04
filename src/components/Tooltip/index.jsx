import React, { useState, useRef } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const handleMouseOver = (event) => {
    setShowTooltip(true);
    positionTooltip(event);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  const positionTooltip = (event) => {
    if (tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const rect = event.currentTarget.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const tooltipTop = rect.top - tooltipRect.height - 10;
      const tooltipLeft = rect.left + (rect.width - tooltipRect.width) / 2;

      tooltip.style.top = tooltipTop + 'px';
      tooltip.style.left = tooltipLeft + 'px';
    }
  };

  return (
    <div className='relative flex flex-col items-center group'>
      <button className='tooltip-trigger' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {children}
      </button>
      {showTooltip && (
        <div className='tooltip' ref={tooltipRef}>
          <p className='text-xs not-italic font-normal text-white'>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
