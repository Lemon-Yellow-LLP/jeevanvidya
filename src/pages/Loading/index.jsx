import React from 'react';

const Loading = () => {
  return (
    <div className='relative w-full h-screen text-center bg-accent-white'>
      <div className='absolute top-1/2 lg:top-2/3  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[328px] md:w-[629px] flex flex-col gap-[140px] lg:gap-[119px]'>
        <div className='flex flex-col items-center gap-6 p-4 md:p-6'>
          <svg
            width='79'
            height='78'
            viewBox='0 0 79 78'
            fill='none'
            className='animate-spin'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='39.5' cy='39' r='35' stroke='#E2EAF4' strokeWidth='8' />
            <mask id='path-2-inside-1_1949_159321' fill='white'>
              <path d='M74.7507 39C76.8214 39 78.5187 37.3175 78.3199 35.2564C77.9302 31.2148 76.9108 27.2509 75.2921 23.5105C73.176 18.6206 70.0803 14.2163 66.1961 10.5691C62.312 6.92192 57.7217 4.10931 52.7084 2.30481C48.8736 0.924456 44.8535 0.15638 40.7954 0.0215152C38.7258 -0.0472625 37.1534 1.75247 37.2836 3.81907C37.4138 5.88566 39.199 7.43209 41.2665 7.5482C44.2993 7.71855 47.2983 8.32706 50.1688 9.36029C54.2181 10.8178 57.9258 13.0897 61.0632 16.0356C64.2005 18.9815 66.701 22.539 68.4103 26.4887C69.6219 29.2885 70.4178 32.2433 70.7785 35.2595C71.0244 37.3155 72.68 39 74.7507 39Z' />
            </mask>
            <path
              d='M74.7507 39C76.8214 39 78.5187 37.3175 78.3199 35.2564C77.9302 31.2148 76.9108 27.2509 75.2921 23.5105C73.176 18.6206 70.0803 14.2163 66.1961 10.5691C62.312 6.92192 57.7217 4.10931 52.7084 2.30481C48.8736 0.924456 44.8535 0.15638 40.7954 0.0215152C38.7258 -0.0472625 37.1534 1.75247 37.2836 3.81907C37.4138 5.88566 39.199 7.43209 41.2665 7.5482C44.2993 7.71855 47.2983 8.32706 50.1688 9.36029C54.2181 10.8178 57.9258 13.0897 61.0632 16.0356C64.2005 18.9815 66.701 22.539 68.4103 26.4887C69.6219 29.2885 70.4178 32.2433 70.7785 35.2595C71.0244 37.3155 72.68 39 74.7507 39Z'
              stroke='#0084CB'
              strokeWidth='16'
              mask='url(#path-2-inside-1_1949_159321)'
            />
          </svg>
          <div className='flex flex-col'>
            <h2 className='text-lg md:text-[22px] font-semibold'>Please wait...</h2>
            <p className='text-sm'>It’ll just take a moments.</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 my-auto font-serif'>
          <span className='text-base md:text-xl'>
            Life is a wonderful systematized arrangement naturally designed by Nature or God to
            enable Man to enjoy bliss inherent in his soul.
          </span>
          <span>-Jeevanvidya philosophy</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
