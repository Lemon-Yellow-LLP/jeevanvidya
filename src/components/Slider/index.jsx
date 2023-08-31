import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlideNextButton, SliderPrevButton } from './buttons';
import { cn } from '@/lib/utils';
import 'swiper/css';

/**
 *  To use slider, pass the children elements wrapped in `SwiperSlide` component
 */
export default function Slider({
  children,
  className,
  slidesPerView = 3.5,
  spaceBetween = 24,
  breakPoints,
}) {
  return (
    <div className={cn('w-full overflow-hidden p-0', className)}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakPoints}
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
