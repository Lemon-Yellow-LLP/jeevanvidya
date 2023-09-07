import React, { useCallback, useEffect, useState } from 'react';
import MobileStepper from './mobile';
import DesktopStepper from './desktop';

const Stepper = ({ className, buttonTitle, steps, activeStepIndex, goToNextStep, progress }) => {
  // const [activeStepIndex, setActiveStepIndex] = useState(0);
  // const [progress, setProgress] = useState(1 / steps.length);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // const goToNextStep = useCallback(() => {
  //   setActiveStepIndex((prev) => prev + 1);
  //   setProgress((prev) => prev + 0.25);
  // });

  useEffect(() => {
    function handleWindowResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className={`w-full mx-auto mt-4 flex flex-col  ${className}`}>
      {innerWidth < 768 ? (
        <MobileStepper steps={steps} activeStep={activeStepIndex} progress={progress} />
      ) : (
        <DesktopStepper steps={steps} activeStep={activeStepIndex} progress={progress} />
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
