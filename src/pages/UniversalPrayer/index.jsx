import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { universalPrayerData } from '@/data/UniversalPrayer';
import TabButton from '@/components/TabButton';
import PatternImage from '@/assets/pattern.svg';
import Pattern2Image from '@/assets/pattern-2.svg';
import CirclesImage from '@/assets/circles.svg';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import Slider from '@/components/Slider';
import { SwiperSlide } from 'swiper/react';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const types = ['English', 'मराठी', 'हिंदी', 'ગુજરાતી', 'ಕನ್ನಡ', 'বাংলা'];

export default function UniversalPrayer() {
  const [active, setActive] = useState(types[0]);

  const handleClick = (e) => {
    setActive(e);
  };
  return (
    <div>
      <HeroBanner
        imageClassName='h-auto lg:h-[450px]'
        bannerTitle={universalPrayerData.banner.title}
        bannerDesc={universalPrayerData.banner.description}
        bannerImg={universalPrayerData.banner.image}
      />
      <div className='flex py-2 px-4 lg:py-3 lg:px-[80px] lg:justify-center gap-2 md:gap-4 bg-white sticky top-0 z-[99] overflow-x-auto'>
        {types.map((label, index) => (
          <div
            key={index}
            className={cn(
              'py-2 md:px-6 px-4 md:py-[14px] border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300 text-center my-auto cursor-pointer ',
              { 'bg-[#0084cb28] text-foreground-1': active === label },
            )}
            onClick={() => setActive(label)}
          >
            <span className='text-base whitespace-nowrap not-italic font-medium text-foreground-2'>
              {label}
            </span>
          </div>
        ))}
        <div className='w-fit p-2 pr-6 border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300 flex items-center gap-4 cursor-pointer'>
          <div className='w-6 h-6 md:w-10 md:h-10 flex justify-center items-center flex-shrink-0 rounded-[40px] bg-[#E2EAF4]'>
            <svg
              className='w-4 h-4 md:w-6 md:h-6'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.25 10.5005C4.05109 10.5005 3.86032 10.4214 3.71967 10.2808C3.57902 10.1401 3.5 9.94937 3.5 9.75045V3.75195C3.5 3.55304 3.57902 3.36228 3.71967 3.22162C3.86032 3.08097 4.05109 3.00195 4.25 3.00195H10.25C10.4489 3.00195 10.6397 3.08097 10.7803 3.22162C10.921 3.36228 11 3.55304 11 3.75195V9.75045C11 9.94937 10.921 10.1401 10.7803 10.2808C10.6397 10.4214 10.4489 10.5005 10.25 10.5005H4.25ZM14.75 10.5005C14.5511 10.5005 14.3603 10.4214 14.2197 10.2808C14.079 10.1401 14 9.94937 14 9.75045V3.75195C14 3.55304 14.079 3.36228 14.2197 3.22162C14.3603 3.08097 14.5511 3.00195 14.75 3.00195H20.7485C20.9474 3.00195 21.1382 3.08097 21.2788 3.22162C21.4195 3.36228 21.4985 3.55304 21.4985 3.75195V9.75045C21.4985 9.94937 21.4195 10.1401 21.2788 10.2808C21.1382 10.4214 20.9474 10.5005 20.7485 10.5005H14.75ZM4.25 21.0005C4.05109 21.0005 3.86032 20.9214 3.71967 20.7808C3.57902 20.6401 3.5 20.4494 3.5 20.2505V14.2505C3.5 14.0515 3.57902 13.8608 3.71967 13.7201C3.86032 13.5795 4.05109 13.5005 4.25 13.5005H10.25C10.4489 13.5005 10.6397 13.5795 10.7803 13.7201C10.921 13.8608 11 14.0515 11 14.2505V20.2505C11 20.4494 10.921 20.6401 10.7803 20.7808C10.6397 20.9214 10.4489 21.0005 10.25 21.0005H4.25ZM14.75 21.0005C14.5511 21.0005 14.3603 20.9214 14.2197 20.7808C14.079 20.6401 14 20.4494 14 20.2505V14.2505C14 14.0515 14.079 13.8608 14.2197 13.7201C14.3603 13.5795 14.5511 13.5005 14.75 13.5005H20.7485C20.9474 13.5005 21.1382 13.5795 21.2788 13.7201C21.4195 13.8608 21.4985 14.0515 21.4985 14.2505V20.2505C21.4985 20.4494 21.4195 20.6401 21.2788 20.7808C21.1382 20.9214 20.9474 21.0005 20.7485 21.0005H14.75Z'
                fill='url(#paint0_linear_1087_29859)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_1087_29859'
                  x1='3.5'
                  y1='12.0012'
                  x2='13.8428'
                  y2='13.9809'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0352A3' />
                  <stop offset='1' stopColor='#0084CB' />
                  <stop offset='1' stopColor='#0084CB' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className='text-base whitespace-nowrap not-italic font-medium text-foreground-2'>
            View More Languages
          </span>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute top-0 right-0 opacity-[0.1] -z-10'>
          <img src={PatternImage} className='' alt='pattern' />
        </div>

        <section
          id='prayer'
          className='w-full flex flex-col justify-center items-center p-4 md:p-8 pt-[40px] lg:pt-[80px] lg:p-[80px]  pb-[40px] bg-[linear-gradient(180deg,_#E2EAF4_0%,_rgba(226,_234,_244,_0.00)_100%)]'
        >
          <div className='mb-4 pointer-events-none select-none'>
            <img
              src={universalPrayerData.prayer.image}
              className='pointer-events-none select-none'
              alt='section-image'
            />
          </div>
          <h2 className='text-center md:text-xl not-italic font-semibold leading-[150%] text-primary-2'>
            {universalPrayerData.prayer.title}
          </h2>
          <div className='text-center md:text-3xl not-italic font-medium py-6 text-foreground-1'>
            {universalPrayerData.prayer.content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className='text-center md:text-xl not-italic font-normal text-foreground-2'>
            {universalPrayerData.prayer.author}
          </div>
        </section>

        <div className='flex flex-col py-[40px] px-[16px] lg:p-[80px] gap-8'>
          <div className='space-y-4'>
            <img src={universalPrayerData.about.sectionImage} alt='flowerImage' />
            <h2 className='text-xl md:text-3xl not-italic font-semibold'>
              {'What is the Universal Prayer?'}
            </h2>
          </div>
          <div className='flex flex-col md:flex-row md:justify-between gap-12 '>
            <div className='flex flex-1 flex-col items-start gap-4'>
              <p className='text-sm md:text-base not-italic font-normal leading-7 text-foreground-2'>
                {universalPrayerData.about.universalPrayer}
              </p>
            </div>
            <div className='flex-1 sm:h-fit overflow-hidden rounded-2xl'>
              <img
                className='object-contain w-full'
                src={universalPrayerData.about.image}
                alt='aboutImage'
              />
            </div>
          </div>
          <p className='text-sm md:text-base not-italic font-normal leading-7 text-foreground-2'>
            {universalPrayerData.about.content}
          </p>
        </div>
      </div>
      <div className='w-full overflow-auto bg-[#E2EAF4] flex flex-col items-start py-[20px] px-[16px]  md:py-[40px] md:px-[80px]'>
        <h1 className='text-xl not-italic font-semibold text-foreground-1 mb-6'>
          {universalPrayerData.popularSingersPrayers.title}
        </h1>
        <PopularSingersPrayers />
      </div>
      <div className='relative'>
        <div className='absolute top-0 left-0 opacity-[0.1] -z-10'>
          <img src={Pattern2Image} className='' alt='pattern' />
        </div>
        <div className='flex flex-col px-[16px] lg:px-[80px] lg:py-[40px] lg:gap-[48px]'>
          <ul className='text-sm md:text-base not-italic font-normal leading-5 md:leading-7 text-foreground-2 flex flex-col gap-2'>
            {universalPrayerData.content.text.split('\n').map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </ul>
          <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[48px]'>
            <img
              id='check'
              className='flex-1 rounded-2xl'
              src={universalPrayerData.content.image}
              alt='section-img'
            />
            <p className='flex-1 text-foreground-2 text-sm md:text-base not-italic font-normal leading-7'>
              {universalPrayerData.content.description}
            </p>
          </div>
        </div>
      </div>
      {/* Methods */}
      <div className='flex flex-col gap-4 lg:gap-[32px] p-4 lg:p-[80px] items-center text-center'>
        <img src={universalPrayerData.methods.sectionImage} alt='sectionImage' />
        <h1 className='text-lg sm:text-3xl font-semibold text-foreground-1 text-center not-italic leading-7'>
          {universalPrayerData.methods.title}
        </h1>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-[80px]'>
          <img src={universalPrayerData.methods.mainImage} alt='mainImage' />
          <div className='flex flex-col gap-8'>
            {universalPrayerData.methods.content.map((val, idx) => (
              <div className='flex items-start gap-4 md:gap-6' key={idx}>
                <div className='bg-[#E2EAF4] text-primary-2 text-center not-italic font-semibold w-8 h-8 flex justify-center items-center rounded-full shrink-0'>
                  {idx + 1}
                </div>
                <p className='text-start font-normal text-foreground-1 text-sm not-italic leading-5 sm:leading-7'>
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative p-4 lg:p-[80px] space-y-[32px] bg-[linear-gradient(180deg,_rgba(226,_234,_244,_0.00)_0%,_#E2EAF4_100%)]'>
        <div className='absolute top-0 left-0 -z-10'>
          <img src={CirclesImage} className='rotate-180' alt='circles-pattern' />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start gap-4'>
          <img src={universalPrayerData.benefits.image} alt='section-image' />
          <h3 className='text-center text-lg sm:text-3xl not-italic font-semibold text-foreground-1 leading-7'>
            {universalPrayerData.benefits.title}
          </h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6'>
          {universalPrayerData.benefits.cards.map((b, i) => (
            <div
              key={i}
              className='relative w-full flex flex-col p-4 md:p-6 mx-auto items-start gap-2 md:gap-4 justify-start bg-[#F5F5F5] rounded-2xl border border-[#E8EDF4]'
            >
              <div className=''>
                <svg
                  className='w-10 h-10 lg:w-16 lg:h-16'
                  viewBox='0 0 64 64'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle id='icon' opacity='0.8' cx='32' cy='32' r='32' fill='#D9D9D9' />
                </svg>
              </div>
              <p className='text-sm md:text-base not-italic font-normal leading-5 md:leading-7 text-foreground-2 overflow-y-auto z-10'>
                {b.text}{' '}
              </p>
              <div className='absolute bottom-[-8px] right-0'>
                <span className='text-[#E8EDF4] text-right text-6xl not-italic font-semibold'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className='mt-0' />
    </div>
  );
}

export function PopularSingersPrayers() {
  return (
    <Slider
      spaceBetween={12}
      slidesPerView={1.3}
      breakPoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {universalPrayerData.popularSingersPrayers.videos?.map((v, i) => (
        <SwiperSlide key={i}>
          <div className='w-full'>
            <img src={v.thumbnail} className='rounded-[8px] object-fill w-full' />
            <div className='flex p-3 flex-col items-start gap-2 w-full'>
              <h3 className='text-base md:text-lg not-italic font-semibold text-foreground-1 '>
                {v.title}
              </h3>
              <p className='w-full truncate whitespace-pre-wrap md:text-sm leading-6 text-foreground-2 text-xs not-italic font-normal'>
                {v.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
