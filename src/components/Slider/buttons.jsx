// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className='w-[48px] h-[48px] rounded-full border-[2px] bg-white border-[rgba(18,_33,_53,_0.24)] hover:border-transparent text-foreground-1 hover:text-secondary-1 hover:shadow-secondary flex justify-center items-center'
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.0007 5.33398L14.1207 7.21398L21.5606 14.6673H5.33398V17.334H21.5606L14.1207 24.7873L16.0007 26.6673L26.6673 16.0007L16.0007 5.33398Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export function SliderPrevButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className='w-[48px] h-[48px] rounded-full border-[2px] bg-white border-[rgba(18,_33,_53,_0.24)] hover:border-transparent text-foreground-1 hover:text-secondary-1 hover:shadow-secondary flex justify-center items-center'
    >
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M26.6673 14.6673H10.4407L17.894 7.21398L16.0007 5.33398L5.33398 16.0007L16.0007 26.6673L17.8807 24.7873L10.4407 17.334H26.6673V14.6673Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
