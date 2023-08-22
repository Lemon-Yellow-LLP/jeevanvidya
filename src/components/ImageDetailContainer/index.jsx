import React from 'react';
import { cn } from '@/lib/utils';
import FlowerImage from './flower.png';
import Button from '../Button';

export default function ImageDetailContainer({
  image,
  title,
  description,
  imagePosition,
  className,
  btnTitle,
}) {
  return (
    <div
      className={cn(
        'flex flex-col py-[40px] px-[16px] lg:p-[80px] md:flex-row md:justify-between gap-4 ',
        { 'md:flex-row-reverse': imagePosition === 'right' },
        className,
      )}
    >
      <div className='flex-shrink-0 max-w-[328px] max-h-[246px] sm:h-fit  md:w-auto lg:max-w-[628px] lg:max-h-[471px] overflow-hidden rounded-2xl'>
        <img className='object-contain' src={image} alt='aboutImage' />
      </div>
      <div className='flex flex-col items-start max-w-[518px] gap-4'>
        <div className=''>
          <img src={FlowerImage} alt='flowerImage' />
        </div>
        <h2 className='text-3xl not-italic font-semibold'>{title}</h2>
        <p className='text-base not-italic font-normal leading-7'>{description}</p>
        {btnTitle ? (
          <Button variant='filled' inputClasses='max-w-fit'>
            {btnTitle}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
