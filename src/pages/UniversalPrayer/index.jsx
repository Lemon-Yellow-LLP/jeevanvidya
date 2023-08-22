import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { universalPrayerData } from '@/data/UniversalPrayer';
import TabButton from '@/components/TabButton';
import PatternImage from '@/assets/pattern.svg';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import MediaCard from '@/components/MediaCard';

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
      <div className='relative'>
        <div className='absolute top-0 right-0 opacity-[0.1]'>
          <img src={PatternImage} alt='pattern' />
        </div>
        <div className='p-4 lg:py-3 lg:px-[80px] flex gap-4'>
          {types.map((type, index) => (
            <TabButton
              label={type}
              activeTab={active}
              onChange={handleClick}
              key={index}
            ></TabButton>
          ))}
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
      <PopularSingersPrayers />
    </div>
  );
}

export function PopularSingersPrayers() {
  return (
    <section>
      {universalPrayerData.popularSingersPrayers.videos?.map((v, i) => (
        <MediaCard key={i} cardDesc={v.description} cardTitle={v.title}>
          <img src={v.thumbnail} alt={v.title} />
        </MediaCard>
      ))}
    </section>
  );
}

export function PopularSingersPrayersItem({ title, thumbnail, description }) {
  return (
    <div className='h-40 rounded-lg flex flex-col'>
      <img className='object-contain' src={thumbnail} alt={title} />
      <h3 className='text-lg font-semibold leading-7 text-left'>{title}</h3>
      <p className='text-sm font-normal leading-6 text-left'>{description}</p>
    </div>
  );
}
