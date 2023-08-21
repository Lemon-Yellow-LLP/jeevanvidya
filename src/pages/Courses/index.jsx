import Stepper from '@/components/Stepper';
import { useState } from 'react';

export default function Courses() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Basic Details', 'Address Details', 'Address Details', 'Donation', 'Success'];

  const handleClick = (valid) => {
    let newStep = currentStep;
    valid === 'valid' && newStep++;
    console.log(newStep);
    newStep > 0 && newStep <= steps.length - 1 && setCurrentStep(newStep);
  };

  return (
    <div className='md:w-1/2 mx-auto'>
      <div className='container flex flex-col gap-14'>
        <Stepper steps={steps} currentStep={currentStep} />

        <div>
          <button
            className='rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold text-white bg-[#F09444] cursor-pointer'
            onClick={() => handleClick('valid')}
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}
