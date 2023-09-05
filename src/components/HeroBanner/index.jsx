import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BackArrow from '@/assets/backarrow.png';

const HeroBanner = ({
  bannerImg,
  bannerTitle,
  bannerDesc,
  children,
  className,
  imageClassName,
}) => {
  return (
    <div className='relative banner h-[480px] md:h-[240px] lg:h-[450px]'>
      <img
        src={bannerImg}
        alt=''
        className='w-full h-[270px] md:h-full object-cover object-center'
      />
      <div className='flex flex-col gap-12 md:gap-16 absolute bottom-6 md:bottom-0 md:top-[87px] lg:top-[156px] px-4 md:px-20 w-full z-10'>
        <Link className='flex items-center gap-2 md:hidden'>
          <img src={BackArrow} alt='' />
          <span className='text-sm md:text-base font-semibold text-accent-white'>Back</span>
        </Link>
        <div className='flex flex-col gap-2 md:gap-4'>
          <h1 className='text-[22px] md:text-[32px] lg:text-[40px] font-semibold text-accent-white'>
            {bannerTitle}
          </h1>
          <p className='text-sm md:text-base lg:text-lg font-normal text-accent-white w-full md:w-[572px]'>
            {bannerDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);

HeroBanner.prototype = {
  bannerTitle: PropTypes.string,
  bannerDesc: PropTypes.string,
};
