import DesktopStepper from '@/components/DesktopStepper';
import Stepper from '@/components/Stepper';
import { useCallback, useEffect, useState } from 'react';

export default function Courses() {
  const steps = ['Basic Details', 'Address Details', 'Other Details', 'Success'];
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [progress, setProgress] = useState(0.25);

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
    <div className='md:w-1/2 mx-auto'>
      <div className='container flex flex-col gap-14'>
        {innerWidth < 768 ? (
          <Stepper steps={steps} activeStep={activeStepIndex} progress={progress} />
        ) : (
          <DesktopStepper steps={steps} activeStep={activeStepIndex} />
        )}
        <div className='ml-auto'>
          <button
            className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#F09444] cursor-pointer'
            onClick={goToNextStep}
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}
