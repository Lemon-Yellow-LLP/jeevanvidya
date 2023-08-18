import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BackArrow from '@/assets/backarrow.png';

const Banner = ({ bannerTitle, bannerDesc, children, inputClasses, ...props }) => {
  return (
    <div className='relative banner'>
      {children}
      <div className='flex flex-col gap-12 absolute w-[526px] top-[156px] left-20 bottom-[164px] z-10'>
        <Link className='flex gap-2'>
          <img src={BackArrow} alt='' />
          <span className='text-base font-semibold text-dark-white'>Back</span>
        </Link>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[40px] font-semibold text-dark-white'>{bannerTitle}</h1>
          <p className='text-lg font-normal text-dark-white'>{bannerDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

Banner.prototype = {
  bannerTitle: PropTypes.string,
  bannerDesc: PropTypes.string,
};
