import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BackArrow from '@/assets/backarrow.png';

const HeroBanner = ({ bannerImg, bannerTitle, bannerDesc, children, ...props }) => {
  return (
    <div className='relative banner h-[480px] md:h-full'>
      <img src={bannerImg} alt='' className='w-full' />
      <div className='flex flex-col gap-12 absolute md:top-1/3 px-4 pb-6 md:pl-20 w-full z-10'>
        <Link className='flex items-center gap-2'>
          <img src={BackArrow} alt='' />
          <span className='text-sm md:text-base font-semibold text-dark-white'>Back</span>
        </Link>
        <div className='flex flex-col gap-2 md:gap-4'>
          <h1 className='text-[22px] md:text-[40px] font-semibold text-dark-white'>
            {bannerTitle}
          </h1>
          <p className='text-sm md:text-lg font-normal text-dark-white w-full md:w-[572px]'>
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
