import React from 'react';
import { cn } from '@/lib/utils';
import Button from '../Button';
export default function ImageDetailContainer({
  image,
  title,
  description,
  imagePosition,
  className,
  contentClassName,
  btnTitle,
  sectionImage,
}) {
  return (
    <div
      className={cn(
        'flex flex-col py-[40px] px-[16px] lg:p-[80px] lg:flex-row gap-4 md:gap-[48px]',
        { 'md:flex-row-reverse': imagePosition === 'right' },
        className,
      )}
    >
      <div className='sm:h-fit overflow-hidden rounded-2xl'>
        <img className='w-full object-cover' src={image} alt='aboutImage' />
      </div>
      <div className={cn('flex-1 flex flex-col items-start gap-4', contentClassName)}>
        {sectionImage ? <img src={sectionImage} alt='flowerImage' /> : null}

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
