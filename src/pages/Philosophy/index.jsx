import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import FlowerImage from '@/assets/flower.png';
import PhilosophyBanner from '@/assets/Philosophy-banner.png';
import PhilosophyImg1 from '@/assets/philosophy-img1.png';
import BenefitsCardLogo from '@/assets/benefits-card-logo.svg';
import { BenefitsData } from '@/data/Philosophy';

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
        title='Satguru Shri Wamanrao Pai'
        description='Satguru Shri Wamanrao Pai evolved the Jeevanvidya Philosophy which is the ‘Science of Life and The Art of Living’based on the teaching of Saints and Sages, his own experiences in life, his deep contemplation and the blessingsof his own Satguru. Jeevanvidya Philosophy is an excellent combination of psychology, parapsychology and metaphysics and has thepotential to help man to achieve both materail prosperity as well as psycho-spiritual progress by making concerted effortsunder the circumstances as they exist.'
        imagePosition='left'
      />
      <div className='flex flex-col p-20 gap-8'>
        <SectionTitleDescription
          image={FlowerImage}
          title='Benefits of Jeevanvidya'
          description='Those people who accept the philosophy of Jeevanvidya and sincerely make efforts to put it into practice definitely improve their financial position, make progress in life and are blessed with peace and happiness.'
          align='left'
        />
        <div className='grid gap-6 grid-cols-3 -z-[1]'>
          {BenefitsData.map((data, i) => (
            <div
              key={i}
              className='border relative overflow-hidden p-6 rounded-2xl flex gap-4 flex-col items-start'
            >
              <img src={BenefitsCardLogo} alt='' />
              <div>
                <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                <p className='text-foreground-1 leading-[187%] tracking-wide'>{data.description}</p>
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
