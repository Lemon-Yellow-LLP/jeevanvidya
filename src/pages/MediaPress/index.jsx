import { useState } from 'react';
import RegisterArrow from '@/assets/arrowforward.svg';
import mediaVideo from '@/assets/media_video.svg';
import Button from '@/components/Button';

export default function MediaPress() {
  const tabs = ['News & Articles', 'Videos', 'Newspapers'];
  const [activeTab, setActiveTab] = useState('News & Articles');
  return (
    <section className='pt-[164px]'>
      <div className='tabsection flex gap-6'>
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              className={`py-[14px] whitespace-nowrap md:py-[14px] px-6 rounded-[64px] bg-[#f5f5f5] border-[1.5px] border-[#0084cb29] ${
                tab === activeTab ? 'active-tab' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className='pt-4'>
        <div className='w-[410px] flex flex-col items-start transform transition duration-500 hover:scale-105 hover:bg-white hover:shadow-lg rounded-xl'>
          <img src={mediaVideo} className='w-full' alt='' />
          <div className='p-4 flex flex-col items-start gap-2'>
            <h3 className='text-[22px] font-semibold text-[#122135]'>Title</h3>
            <span className='text-base'>
              Lorem ipsum dolor sit amet, sectre adipiscing elit.Cras molestie blandit...
            </span>
            <Button register={true} inputClasses='w-[153px] md:hover:w-[170px]'>
              Register Now
              <img
                src={RegisterArrow}
                className='ml-2 md:opacity-0 md:group-hover:opacity-100'
                alt='Register Now'
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
