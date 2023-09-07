import { useState } from 'react';

const Pagination = ({ pages, callback, children }) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      {children}
      <div className='flex justify-center gap-4 mt-8'>
        {
          <div
            className={`bg-white border-[1px] border-[#E2EAF4] text-primary-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer ${
              activeStep === 0 ? 'pointer-events-none opacity-80' : 'pointer-events-auto'
            }`}
            onClick={() => {
              setActiveStep((prev) => prev - 1);
              callback(activeStep - 1);
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
        }
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
              callback(index);
            }}
          >
            {index + 1}
          </div>
        ))}
        {
          <div
            className={`bg-white border-[1px] border-[#E2EAF4] text-primary-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer ${
              activeStep === pages.length - 1
                ? 'pointer-events-none opacity-80'
                : 'pointer-events-auto'
            }`}
            onClick={() => {
              setActiveStep((prev) => prev + 1);
              callback(activeStep + 1);
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
        }
      </div>
    </>
  );
};
export default Pagination;
