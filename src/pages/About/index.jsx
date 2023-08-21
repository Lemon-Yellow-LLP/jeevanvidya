import ImageDetailContainer from '@/components/ImageDetailContainer';
import { AboutData } from '@/data/About';
import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col gap-8'>
      {AboutData.map((data, i) => (
        <ImageDetailContainer key={i} {...data} />
      ))}
    </div>
  );
}
