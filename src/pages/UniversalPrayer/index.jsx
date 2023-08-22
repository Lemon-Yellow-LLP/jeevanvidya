import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { universalPrayerData } from '@/data/UniversalPrayer';
import TabButton from '@/components/TabButton';
import PatternImage from '@/assets/pattern.svg';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import Slider from '@/components/Slider';
import { SwiperSlide } from 'swiper/react';
import Footer from '@/components/Footer';

const types = ['Written Testimonial', 'Video Testimonials', 'test'];

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
      <div className='p-4 lg:py-3 lg:px-[80px] flex gap-4 bg-white sticky top-0 z-[99]'>
        {types.map((type, index) => (
          <TabButton label={type} activeTab={active} onChange={handleClick} key={index}></TabButton>
        ))}
      </div>
      <div className='relative'>
        <div className='absolute top-0 right-0 opacity-[0.1] -z-10'>
          <img src={PatternImage} className='' alt='pattern' />
        </div>

        <section
          id='prayer'
          className='w-full flex flex-col justify-center items-center p-[80px] pb-[40px] bg-[linear-gradient(180deg,_#E2EAF4_0%,_rgba(226,_234,_244,_0.00)_100%)]'
        >
          <div className='mb-4 pointer-events-none select-none'>
            <img
              src={universalPrayerData.prayer.image}
              className='pointer-events-none select-none '
              alt='section-image'
            />
          </div>
          <h2 className='text-center text-xl not-italic font-semibold leading-[150%] text-primary-1'>
            {universalPrayerData.prayer.title}
          </h2>
          <div className='text-center text-3xl not-italic font-medium py-6 text-foreground-1'>
            {universalPrayerData.prayer.content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className='text-center text-xl not-italic font-normal text-foreground-2'>
            {universalPrayerData.prayer.author}
          </div>
        </section>

        <ImageDetailContainer
          title={'What is the Universal Prayer?'}
          description={universalPrayerData.about.whatIsUniversalPrayer}
          image={universalPrayerData.about.image}
          imagePosition={'right'}
        />
      </div>
      <div className='w-full overflow-auto bg-[#E2EAF4] flex flex-col items-start py-[40px] px-[80px]'>
        <h1 className='text-xl not-italic font-semibold text-foreground-1 mb-6'>
          {universalPrayerData.popularSingersPrayers.title}
        </h1>
        <PopularSingersPrayers />
      </div>

      <div className='flex flex-col px-[80px] py-[40px] gap-[48px]'>
        <ul className='text-base not-italic font-normal leading-7 text-foreground-2 flex flex-col gap-2'>
          {universalPrayerData.content.text.split('\n').map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </ul>
        <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[48px]'>
          <img src={universalPrayerData.content.image} alt='section-img' />
          <p>{universalPrayerData.content.description}</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 lg:gap-[32px] p-4 lg:p-[80px] items-center text-center'>
        <img src={universalPrayerData.methods.sectionImage} alt='sectionImage' />
        <h1 className='text-3xl font-semibold text-foreground-1'>
          {universalPrayerData.methods.title}
        </h1>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-[80px]'>
          <img src={universalPrayerData.methods.mainImage} alt='mainImage' />
          <div className='flex flex-col gap-8'>
            {universalPrayerData.methods.content.map((val, idx) => (
              <div className='flex items-start gap-6' key={idx}>
                <div className='bg-[#E2EAF4] text-primary-1 text-center not-italic font-semibold w-8 h-8 flex justify-center items-center rounded-full shrink-0'>
                  {idx + 1}
                </div>
                <p className='text-start font-normal leading-7 text-foreground-1'>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='p-4 lg:p-[80px] space-y-[32px]'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <img src={universalPrayerData.benefits.image} alt='section-image' />
          <h3 className='text-center text-3xl not-italic font-semibold text-foreground-1'>
            {universalPrayerData.benefits.title}
          </h3>
        </div>
        <div className='flex gap-6 p-6 w-[302px] h-[326px]'>
          {universalPrayerData.benefits.cards.map((b, i) => (
            <div
              key={i}
              className='flex flex-col p-6 items-center justify-start bg-[#F5F5F5] rounded-2xl'
            >
              <p className='whitespace-pre-wrap truncate'>{b.text} </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function PopularSingersPrayers() {
  return (
    <Slider spaceBetween={24} className='w-full overflow-hidden gap-[24px] p-0'>
      {universalPrayerData.popularSingersPrayers.videos?.map((v, i) => (
        <SwiperSlide key={i}>
          <div className='inline-block w-[350px]'>
            <img src={v.thumbnail} className='rounded-[8px]' />
            <div className='flex p-3 flex-col items-start gap-2'>
              <h3 className='text-lg not-italic font-semibold text-foreground-1'>{v.title}</h3>
              <p className='w-full truncate whitespace-pre-wrap text-sm not-italic font-normal leading-6 text-foreground-2'>
                {v.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
