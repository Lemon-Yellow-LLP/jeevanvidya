import Button from '@/components/Button/index.jsx';
import React from 'react';
import learnArrow from '@/assets/arrowforward.jsx';
import arrowforward from '@/assets/arrow-forward.jsx';

export default function Home() {
  let register = true;
  return (
    <div className='w-full flex gap-2 md:gap-4'>
      <Button register={register}>
        Register
        <img
          src={registerArrow}
          className='ml-2 md:opacity-0 md:group-hover:opacity-100'
          alt='Register arrow'
        />
      </Button>
      <Button>
        Learn more
        <img
          src={learnArrow}
          className='ml-2 md:opacity-0 md:group-hover:opacity-100'
          alt='Learn more arrow'
        />
      </Button>
    </div>
  );
}
