import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlideNextButton, SliderPrevButton } from './buttons';
import { cn } from '@/lib/utils';

/**
 *  To use slider, pass the children elements wrapped in `SwiperSlide` component
 *  @example
 * ```
 * const dummyData = [
  {
    title: 'Video Title 1',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    title: 'Video Title 2',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
];
 *  {dummyData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='inline-block w-[400px]'>
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p className='w-full truncate whitespace-pre-wrap'>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
 * ```
 */
export default function Slider({ data, children, className, slidesPerView, spaceBetween }) {
  return (
    <div className={cn('flex flex-col p-8', className)}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
      >
        {/* {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='inline-block w-[400px]'>
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p className='w-full truncate whitespace-pre-wrap'>{item.description}</p>
            </div>
            
          </SwiperSlide>
        ))} */}
        {children}
        <div className='w-full flex justify-center items-center gap-6'>
          <SliderPrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}
