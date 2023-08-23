import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import Slider from '@/components/Slider';
import FlowerImage from '@/assets/flower.png';
import FlowerImage2 from '@/assets/flower2.svg';
import PhilosophyBanner from '@/assets/Philosophy-banner.png';
import PhilosophyImg1 from '@/assets/philosophy-img1.png';
import BenefitsCardLogo from '@/assets/benefits-card-logo.svg';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import { BenefitsData } from '@/data/Philosophy';
import { SwiperSlide } from 'swiper/react';
import TabButton from '@/components/TabButton';

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

const TabData = [
  {
    label: 'Stress Management',
    active: 'Stress Management',
  },
  {
    active: 'Mind management',
    label: 'Mind management',
  },
  {
    active: 'Relationship Management',
    label: 'Relationship Management',
  },
  {
    active: 'Spiritual Wisdom',
    label: 'Spiritual Wisdom',
  },
  {
    active: 'Youth Empowement',
    label: 'Youth Empowement',
  },
  {
    active: 'Inner Peace, Happiness',
    label: 'Inner Peace, Happiness',
  },
  {
    active: 'Harmonious Thinking',
    label: 'Harmonious Thinking',
  },
  {
    active: 'Inner Peace, Happiness',
    label: 'Inner Peace, Happiness',
  },
  {
    active: 'Concept of God',
    label: 'Concept of God',
  },
  {
    active: 'Relationship Management',
    label: 'Relationship Management',
  },
  {
    active: 'Thought Revolution',
    label: 'Thought Revolution',
  },
  {
    active: 'Human Body -Divine Computer',
    label: 'Human Body -Divine Computer',
  },
];

const Philosophy = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={PhilosophyBanner}
        bannerTitle='Philosophy'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  '
      />

      <ImageDetailContainer
        image={PhilosophyImg1}
        title='Jeevanvidya Philosophy'
        description='Satguru Shri Wamanrao Pai evolved the Jeevanvidya Philosophy which is the ‘Science of Life and The Art of Living’based on the teaching of Saints and Sages, his own experiences in life, his deep contemplation and the blessingsof his own Satguru. Jeevanvidya Philosophy is an excellent combination of psychology, parapsychology and metaphysics and has thepotential to help man to achieve both materail prosperity as well as psycho-spiritual progress by making concerted effortsunder the circumstances as they exist.'
        imagePosition='left'
      />
      <div className='flex flex-col p-4 lg:p-20 gap-8'>
        <SectionTitleDescription
          image={FlowerImage2}
          title='Problems have solutions, always'
          description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely.'
          align='center'
          className='!p-0 mb-4 lg:mb-8 '
        />
        <div className='flex gap-4 flex-wrap'>
          {TabData?.map((item, index) => (
            <TabButton label={item.label} activeTab={item.active} />
          ))}
        </div>
      </div>
      {/* <Slider data={SliderData} slidesPerView={1}>
          {SliderData?.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageDetailContainer
                image={item.image}
                title={item.title}
                description={item.description}
                imagePosition='left'
              />
            </SwiperSlide>
          ))}
        </Slider> */}
      <div className='p-4 lg:p-20'>
        {' '}
        <SectionTitleDescription
          image={FlowerImage}
          title='Benefits of Jeevanvidya'
          description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely improve their financial position, make progress in life and are blessed with peace and happiness.'
          align='left'
          className='!p-0 mb-4 lg:mb-8 '
        />
        <div className='grid grid-cols-1  lg:gap-6 md:grid-cols-3 -z-[1]'>
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
    </div>
  );
};

export default Philosophy;
