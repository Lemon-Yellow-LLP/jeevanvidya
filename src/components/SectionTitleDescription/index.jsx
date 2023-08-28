import { cn } from '@/lib/utils';
import React from 'react';

export default function SectionTitleDescription({
  image,
  title,
  description,
  align = 'center',
  className,
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 lg:gap-4 p-4 lg:p-8 mx-auto',
        {
          'items-center text-center': align == 'center',
          'items-start text-left': align == 'start',
          'items-end text-right': align == 'end',
        },
        className,
      )}
    >
      {image ? <img src={image} className='h-[40px] lg:h-full w-fit' alt='sectionImage' /> : null}
      {title ? (
        <h1 className='text-lg lg:text-3xl font-semibold text-foreground-1'>{title}</h1>
      ) : null}
      {description ? (
        <p className='text-sm lg:text-base font-normal leading-normal text-foreground-2'>
          {description}
        </p>
      ) : null}
    </div>
  );
}
