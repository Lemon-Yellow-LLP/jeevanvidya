import React, { useRef } from 'react';
import thumbnailImage from '@/assets/thumbnail.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlideNextButton, SliderPrevButton } from './buttons';
import { cn } from '@/lib/utils';

/**
 *  To use slider, pass the children elements wrapped in `SwiperSlide` component
 */
export default function Slider({ children, className, slidesPerView, spaceBetween }) {
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
