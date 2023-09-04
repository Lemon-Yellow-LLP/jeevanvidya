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
  titleClassName,
  imageClassName,
  btnTitle,
  sectionImage,
}) {
  return (
    <div
      className={cn(
        'flex flex-col py-[40px] px-[16px] md:px-8 xl:p-[80px] lg:flex-row gap-4 md:gap-[48px]',
        { 'lg:flex-row-reverse': imagePosition === 'right' },
        className,
      )}
    >
      <div className={cn('sm:h-fit overflow-hidden rounded-2xl', imageClassName)}>
        <img className='w-full object-cover' src={image} alt='aboutImage' />
      </div>
      <div className={cn('flex-1 flex flex-col items-start gap-4', contentClassName)}>
        {sectionImage ? (
          <img src={sectionImage} alt='flowerImage' className='h-[40px] lg:h-fit w-fit' />
        ) : null}

        <h2
          className={cn(
            'text-lg lg:text-3xl not-italic font-semibold text-foreground-1',
            titleClassName,
          )}
        >
          {title}
        </h2>
        <p className='text-sm lg:text-base not-italic font-normal leading-relaxed text-foreground-2'>
          {description}
        </p>
        {btnTitle ? (
          <Button variant='filled' inputClasses='max-w-fit'>
            {btnTitle}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
