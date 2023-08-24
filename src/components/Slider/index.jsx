import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlideNextButton, SliderPrevButton } from './buttons';
import { cn } from '@/lib/utils';

/**
 *  To use slider, pass the children elements wrapped in `SwiperSlide` component
 */
export default function Slider({ children, className, slidesPerView = 3.5, spaceBetween = 24 }) {
  return (
    <div className={cn('flex flex-col p-8', className)}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
      >
        {children}
        <div className='w-full flex justify-center items-center gap-6'>
          <SliderPrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}
