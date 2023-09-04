import React, { useCallback, useEffect, useState } from 'react';
import MobileStepper from '.';
import DesktopStepper from '../DesktopStepper';

const Stepper = ({ className, buttonTitle, steps }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [progress, setProgress] = useState(1 / steps.length);

  const goToNextStep = useCallback(() => {
    setActiveStepIndex((prev) => prev + 1);
    setProgress((prev) => prev + 0.25);
  });

  useEffect(() => {
    function handleWindowResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div className={`w-full mx-auto mt-4 flex flex-col gap-14 ${className}`}>
      {innerWidth < 768 ? (
        <MobileStepper steps={steps} activeStep={activeStepIndex} progress={progress} />
      ) : (
        <DesktopStepper steps={steps} activeStep={activeStepIndex} />
      )}
      {buttonTitle ? (
        <div className='ml-auto'>
          <button
            className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#F09444] cursor-pointer'
            onClick={goToNextStep}
          >
            {buttonTitle}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Stepper;
