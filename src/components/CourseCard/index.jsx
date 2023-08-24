import React from 'react';
import Button from '../Button';

const CourseCard = ({ image, title, desc, duration, ageGroup }) => {
  return (
    <div className='w-full p-4'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>Duration: {duration}</p>
      <p>Age Group: {ageGroup}</p>
      <Button register={true} variant='outline' className='w-[153px] md:hover:w-[170px]'>
        Register Now
      </Button>
    </div>
  );
};

export default CourseCard;
