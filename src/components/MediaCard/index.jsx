import React from 'react';

const MediaCard = ({ btnTitle, cardImg, cardDesc, cardTitle, children }) => {
  return (
    <div className='w-full md:w-[410px] flex flex-col items-start transform transition duration-500 hover:scale-105 hover:bg-white hover:shadow-lg rounded-xl'>
      <img src={cardImg} className='w-full rounded-lg' alt='Card' />
      <div className='p-4 flex flex-col items-start gap-2'>
        <h3 className='text-lg md:text-[22px] font-semibold text-[#122135]'>{cardTitle}</h3>
        <p className='text-sm md:text-base'>{cardDesc}</p>
        {btnTitle && (
          <a
            href=''
            class='group w-[147px] flex items-center rounded-lg px-6 py-2 md:py-4 whitespace-nowrap bg-white text-[#F09444] border-2 border-[#F09444] cursor-pointer outline-none overflow-hidden transition-all duration-500 md:hover:w-[160px]'
          >
            <span class='text-sm font-normal md:text-base md:font-semibold'>{btnTitle}</span>
            <img
              src='../static/images/learnmore.svg'
              class='ml-2 md:opacity-0 md:group-hover:opacity-100'
              alt=''
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
