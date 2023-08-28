import React, { useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import PhilosophyBanner from '@/assets/Philosophy-banner.png';
import { QuoteData } from '@/data/Philosophy';

const PhilosophyQuotes = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={PhilosophyBanner}
        bannerTitle='Philosophy - Quotes'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  '
      />
      <div className='p-20 grid grid-cols-3 gap-6 gap-y-8'>
        {QuoteData.map((data, i) => (
          <div
            key={i}
            className='min-w-[411px] min-h-[411px] p-10 bg-quotes-bg bg-contain bg-no-repeat bg-center text-foreground-1 text-base font-semibold  flex items-center justify-center text-center leading-[187%]'
          >
            {data.quote}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyQuotes;
