import React, { useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import Slider from '@/components/Slider';
import FlowerImage from '@/assets/flower.png';
import FlowerImage2 from '@/assets/flower2.svg';
import PhilosophyBanner from '@/assets/Philosophy-banner.png';
import TabImage from '@/assets/tab-img.png';
import PhilosophyImg1 from '@/assets/philosophy-img1.png';
import BenefitsCardLogo from '@/assets/benefits-card-logo.svg';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import { BenefitsData, FeaturesData, SliderQuoteData } from '@/data/Philosophy';
import { TabLabelData } from '@/data/Philosophy';
import { TabData } from '@/data/Philosophy';
import { SwiperSlide } from 'swiper/react';
import TabButton from '@/components/TabButton';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';

const SliderData = [
  {
    title: 'VideoOne',
    description:
      'Jeevanvidya teaches man to accept the truth that he alone is responsible for all his actions and also the results orreactions that boomerang from such actions; in other words man himself is responsible for creating his own destiny.Satguru’s entire philosophy revolves around his important message that, “You are the architect of your destiny”.',
    image: TestImage,
  },
  {
    title: 'VideoTwo',
    description:
      'Jeevanvidya philosophy stresses on the importance of making efforts as opposed to becoming victims of fatalism. Infact, Satguru maintains that, “Efforts have the potential to achieve everything in life including “Self-realization” and,therefore, efforts may be considered even more important than God”.',
    image: TestImage,
  },
  {
    title: 'VideoThree',
    description:
      'Jeevanvidya philosophy stresses on the importance of making efforts as opposed to becoming victims of fatalism. Infact, Satguru maintains that, “Efforts have the potential to achieve everything in life including “Self-realization” and,therefore, efforts may be considered even more important than God”.',
    image: TestImage,
  },
];

const Philosophy = () => {
  const [active, setActive] = useState(TabLabelData[0]);
  const [showMoreTabs, setShowMoreTabs] = useState(true);
  const [activeData, setActiveData] = useState({});
  const handleClick = (e) => {
    setActive(e);
    // console.log(e);
  };

  useEffect(() => {
    //api call and send active tab

    setActiveData({ ...TabData.find((tab) => tab.title === active) });
    //api res set as activeData
  }, [active]);

  return (
    <div className='pt-[140px] md:pt-[144px]'>
      <HeroBanner
        bannerImg={PhilosophyBanner}
        bannerTitle='Philosophy'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  '
      />

      <ImageDetailContainer
        sectionImage={FlowerImage}
        image={PhilosophyImg1}
        className='gap-6 xl:gap-[110px] items-center'
        contentClassName=' gap-2'
        title='Jeevanvidya Philosophy'
        description='Satguru Shri Wamanrao Pai evolved the Jeevanvidya Philosophy which is the ‘Science of Life and The Art of Living’based on the teaching of Saints and Sages, his own experiences in life, his deep contemplation and the blessingsof his own Satguru. Jeevanvidya Philosophy is an excellent combination of psychology, parapsychology and metaphysics and has thepotential to help man to achieve both materail prosperity as well as psycho-spiritual progress by making concerted effortsunder the circumstances as they exist.'
        imagePosition='left'
      />
      <div className='flex flex-col p-4 md:px-8 py-10 gap-6 xl:p-20 xl:gap-10'>
        <SectionTitleDescription
          image={FlowerImage2}
          title='Problems have solutions, always'
          description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely.'
          align='center'
          className='!p-0 lg:mb-8 '
        />
        <div className=''>
          <div className='flex flex-col mb-4 md:hidden'>
            <div className=' text-xs text-foreground-2 mb-1'>Filter by</div>
            <button
              className='flex justify-between border-[1.5px] p-4 border-secondary-2 rounded-lg'
              onClick={() => setShowMoreTabs(!showMoreTabs)}
            >
              <span> {active} </span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={cn({ 'rotate-180 ': !showMoreTabs })}
              >
                <g clipPath='url(#clip0_1609_63369)'>
                  <path
                    d='M11.9997 13.172L16.9497 8.22198L18.3637 9.63598L11.9997 16L5.63574 9.63598L7.04974 8.22198L11.9997 13.172Z'
                    fill='#122135'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1609_63369'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div
            className={cn('flex gap-4 flex-wrap', {
              'h-0 md:h-[40px] xl:h-[60px] overflow-hidden justify-center md:justify-start ':
                showMoreTabs,
              'h-auto justify-center md:justify-start ': !showMoreTabs,
            })}
          >
            {TabLabelData?.map((item, index) => (
              <TabButton label={item} activeTab={active} onChange={handleClick} key={index} />
            ))}
          </div>

          <button
            className='hidden text-sm lg:text-base font-semibold p-4 text-secondary-1 md:flex gap-2'
            onClick={() => setShowMoreTabs(!showMoreTabs)}
          >
            {showMoreTabs ? 'Show more' : 'Show less'}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={cn({ 'rotate-180 ': !showMoreTabs })}
            >
              <g clipPath='url(#clip0_1609_63369)'>
                <path
                  d='M11.9997 13.172L16.9497 8.22198L18.3637 9.63598L11.9997 16L5.63574 9.63598L7.04974 8.22198L11.9997 13.172Z'
                  fill='#F09444'
                />
              </g>
              <defs>
                <clipPath id='clip0_1609_63369'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </button>
          <ImageDetailContainer
            image={activeData?.image}
            title={activeData?.title}
            description={activeData?.description}
            imagePosition='left'
            className='!px-0 py-8 gap-6 xl:gap-8'
          />
        </div>
      </div>
      <div className='p-4 md:p-8 xl:p-20'>
        <SectionTitleDescription
          image={FlowerImage2}
          title='Salient Features of Jeevanvidya philosophy'
          align='center'
          className='!p-0 mb-4 lg:mb-8 '
        />
        <PhilosophyFeatures />
      </div>
      <div className='p-4 lg:p-20'>
        <SectionTitleDescription
          image={FlowerImage}
          title='Benefits of Jeevanvidya'
          description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely improve their financial position, make progress in life and are blessed with peace and happiness.'
          align='left'
          className='!p-0 mb-4 lg:mb-8 '
        />
        <div className='grid grid-cols-1 gap-4  lg:gap-6 md:grid-cols-3 -z-[1]'>
          {BenefitsData.map((data, i) => (
            <div
              key={i}
              className='border relative overflow-hidden p-4 lg:p-6 rounded-2xl flex gap-4  lg:flex-col items-start'
            >
              <img src={BenefitsCardLogo} alt='' className='w-10 lg:w-fit' />
              <div>
                <h3 className=' text-base lg:text-xl font-semibold mb-2'>{data.title}</h3>
                <p className='text-xs lg:text-base text-foreground-1 leading-[187%] tracking-wide'>
                  {data.description}
                </p>
                <span className='absolute -bottom-[15px] right-[1px] text-8xl font-semibold text-[#E8EDF4] -z-10'>
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=' flex flex-col gap-6 lg:gap-8'>
        <div className='px-4 pt-10 lg:px-20 lg:pt-20 flex flex-col gap-6 lg:gap-8'>
          <SectionTitleDescription
            image={FlowerImage}
            title='Philosophy – Quotes'
            description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely improve their financial position, make progress in life and are blessed with peace and happiness.'
            align='left'
            className='!p-0 mb-4 lg:mb-8 '
          />
          <Button variant='outline' className='w-fit'>
            View All
          </Button>
        </div>
        <PhilosophyQuotes />
      </div>
    </div>
  );
};

export function PhilosophyQuotes() {
  return (
    <Slider
      spaceBetween={12}
      slidesPerView={1}
      className='pb-10 xl:pb-20'
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
          slidesPerView: 3.3,
          spaceBetween: 0,
        },
      }}
    >
      {SliderQuoteData.map((v, i) => (
        <SwiperSlide key={i} className='px-4 md:px-10 xl:px-20'>
          <div
            key={i}
            className='min-w-[328px] min-h-[328px] 2xl:min-w-[411px] xl:min-h-[411px] p-10 bg-quotes-bg bg-contain bg-no-repeat bg-center text-foreground-1 text-xs 2xl:text-base font-semibold  flex items-center justify-center text-center leading-[187%]'
          >
            <span className='max-w-[296px] lg:max-w-[411px]'>{v.quote}</span>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
export function PhilosophyFeatures() {
  return (
    <Slider spaceBetween={12} slidesPerView={1}>
      {FeaturesData.map((v, i) => (
        <SwiperSlide key={i}>
          <ImageDetailContainer
            image={v.image}
            title={v.title}
            description={v.description}
            imagePosition='right'
            className='!p-0 xl:!gap-[110px] flex-col-reverse mb-6 lg:mb-8'
            titleClassName='lg:text-[22px] '
            contentClassName='xl:min-w-[40%]'
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
}
export default Philosophy;
