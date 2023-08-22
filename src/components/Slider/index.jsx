import React, { useRef } from 'react';
import thumbnailImage from '@/assets/thumbnail.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SlideNextButton, SliderPrevButton } from './buttons';

/**
 *  To use slider, pass the children elements wrapped in `SwiperSlide` component
 */
export default function Slider({ children }) {
  return (
    <div className='flex flex-col p-8 bg-blue-100'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dummyData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='inline-block w-[400px]'>
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p className='w-full truncate whitespace-pre-wrap'>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className='w-full flex justify-center items-center gap-6'>
          <SliderPrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}

const dummyData = [
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
  {
    title: 'Video Title 3',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    title: 'Video Title 4',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    title: 'Video Title 5',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    title: 'Video Title 6',
    image: thumbnailImage,
    description: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
];
