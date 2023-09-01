import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MobileStepper = ({ steps, activeStep, progress }) => {
  return (
    <div className='pt-2 pb-4 flex gap-4 justify-center'>
      {steps.map((step, index) => (
        <div key={index} className=''>
          {activeStep === index && (
            <div className='relative'>
              <CircularProgressbar className='w-[72px] h-[72px]' value={progress} maxValue={1} />
              <h4
                className='absolute top-1/3 left-1/2 -translate-x-[40%] text-right text-primary-black leading-[18px]'
                key={index}
              >
                <span className='font-semibold text-base'>{activeStep + 1}</span>/{steps.length}
              </h4>
            </div>
          )}
        </div>
      ))}
      <div className='flex flex-col'>
        {steps.map((step, index) => (
          <div key={index}>{activeStep === index && <span className=''>{step}</span>}</div>
        ))}
        <span>In-Progress</span>
      </div>
    </div>
  );
  3;
};

export default MobileStepper;
