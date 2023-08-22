import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Stepper = ({ steps, activeStep }) => {
  const value = 0.20;
  return (
    <div className='pt-2 pb-4 flex gap-4 justify-center'>
      {steps.map(
        (step, index) =>
          activeStep === index && (
            <CircularProgressbar
              className='w-[72px] h-[72px]'
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          ),
      )}

      <div className='flex flex-col'>
        {steps.map((step, index) => activeStep === index && <span className=''>{step}</span>)}
        <span>In-Progress</span>
      </div>
    </div>
  );
  3;
};

export default Stepper;
