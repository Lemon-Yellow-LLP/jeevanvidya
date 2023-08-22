import React, { memo } from 'react';

const Card = ({ btnTitle, cardDesc, cardTitle, children }) => {
  return (
    <div className='w-[410px] flex flex-col items-start transform transition duration-500 hover:scale-105 hover:bg-white hover:shadow-lg rounded-xl'>
      {children}
      <div className='p-4 flex flex-col items-start gap-2'>
        <h3 className='text-[22px] font-semibold text-[#122135]'>{cardTitle}</h3>
        <p className='text-base'>{cardDesc}</p>
        {btnTitle && (
          <a
            href=''
            className='group w-[147px] flex items-center rounded-lg px-6 py-2 md:py-4 whitespace-nowrap bg-white text-[#F09444] border-2 border-[#F09444] cursor-pointer outline-none overflow-hidden transition-all duration-500 md:hover:w-[160px]'
          >
            <span className='text-sm font-normal md:text-base md:font-semibold'>{btnTitle}</span>
            <img
              src='../static/images/learnmore.svg'
              className='ml-2 md:opacity-0 md:group-hover:opacity-100'
              alt=''
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
