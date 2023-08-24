import { useState } from 'react';

const Pagination = ({ pages }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {pages.map((page, index) => index === activeStep && <div key={index}>{page}</div>)}

      <div className='flex justify-center gap-4 mt-8'>
        {activeStep !== 0 && (
          <div
            className='bg-white border-[1px] border-[#E2EAF4] text-primary-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'
            onClick={() => {
              setActiveStep((prev) => prev - 1);
            }}
          >
            <svg
              width='7'
              height='11'
              viewBox='0 0 7 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='rotate-180'
            >
              <g opacity='0.8'>
                <path
                  d='M1 1L6 5.49775L1 10'
                  stroke='#122135'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </div>
        )}

        {pages.map((_, index) => (
          <div
            className={`${
              index === activeStep
                ? 'bg-[#0084CB] text-white'
                : 'bg-white border-[1px] border-[#E2EAF4] text-primary-black'
            } h-10 w-10 rounded-full flex justify-center items-center cursor-pointer`}
            key={index}
            onClick={() => {
              setActiveStep(index);
            }}
          >
            {index + 1}
          </div>
        ))}

        {activeStep !== pages.length - 1 && (
          <div
            className='bg-white border-[1px] border-[#E2EAF4] text-primary-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer'
            onClick={() => {
              setActiveStep((prev) => prev + 1);
            }}
          >
            <svg
              width='7'
              height='11'
              viewBox='0 0 7 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.8'>
                <path
                  d='M1 1L6 5.49775L1 10'
                  stroke='#122135'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Pagination;
