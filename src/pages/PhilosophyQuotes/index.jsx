import React, { useEffect } from 'react';
import { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import PhilosophyBanner from '@/assets/Philosophy-banner.png';
import { QuoteData } from '@/data/Philosophy';
import Pagination from '@/components/Pagination';

const PhilosophyQuotes = () => {
  const [pageQuoteData, setPageQuoteData] = useState(QuoteData[0]);
  const onChangeOfPageOne = (value) => {
    setPageQuoteData(QuoteData[value]);
  };
  return (
    <div className='mb-10 xl:mb-20'>
      <HeroBanner
        bannerImg={PhilosophyBanner}
        bannerTitle='Philosophy - Quotes'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  '
      />
      <Pagination pages={QuoteData} pageData={pageQuoteData} callback={onChangeOfPageOne}>
        <div className='px-4 md:px-8 py-10 xl:p-20 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6 xl:gap-y-8'>
          {pageQuoteData.map((data, i) => (
            <div
              key={i}
              className='min-w-[328px] min-h-[328px]  xl:min-h-[411px] p-10 bg-quotes-bg bg-contain bg-no-repeat bg-center text-foreground-1 text-xs xl:text-base font-semibold  flex items-center justify-center text-center leading-[187%]'
            >
              <span className='max-w-[296px] lg:max-w-[411px]'>{data.quote}</span>
            </div>
          ))}
        </div>
      </Pagination>
    </div>
  );
};

export default PhilosophyQuotes;
