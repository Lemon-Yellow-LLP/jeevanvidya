import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import DownloadBanner from '@/assets/download-banner.png';
import TabButton from '@/components/TabButton';
import DownloadFile from '@/components/DownloadFile';
import PDFLOGO from '@/assets/pdf-logo.svg';
import { bookData, imageData } from '@/data/Download';
import Dropdown from '@/components/InputFields/Dropdown';

const Download = (file, filename) => {
  const tabs = ['Books & PDF', 'Wallpapers', 'Images'];
  const options = [
    {
      label: '1920X1080',
      value: 1,
    },
    {
      label: '1280×720',
      value: 2,
    },
    {
      label: '720×576',
      value: 3,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onChange = (value) => {
    setPageData(pages[value]);
  };
  return (
    <div>
      <HeroBanner
        bannerImg={DownloadBanner}
        bannerTitle='Downloads'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  '
      />
      <div className='bg-[#F5F5F5]'>
        <div className='py-4 px-[12px] lg:py-[14px] lg:px-20  flex gap-2 md:gap-4 lg:gap-6 overflow-x-auto hide-scrollbar'>
          {tabs.map((tab, index) => (
            <TabButton label={tab} activeTab={activeTab} onChange={handleTabClick} key={index} />
          ))}
        </div>
        <div className='py-10 px-4 md:p-10 lg:p-20 '>
          <div
            className={`grid gap-x-6 gap-y-8 ${
              (activeTab === tabs[0] && 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4') ||
              (activeTab === tabs[1] && 'grid-cols-1 md:grid-cols-3 lg:grid-cols-3') ||
              (activeTab === tabs[2] && 'grid-cols-2 md:grid-cols-4 lg:grid-cols-4')
            }`}
          >
            {activeTab === tabs[0] &&
              bookData.map((data, i) => (
                <DownloadFile
                  key={i}
                  fileImage={PDFLOGO}
                  label={data.label}
                  filesize={data.filesize}
                />
              ))}

            {activeTab === tabs[1] &&
              bookData.map((data, i) => (
                <div className='' key={i}>
                  <img src={DownloadBanner} className='rounded-2xl h-[184px] md:h-[230px] mb-4' />
                  <div className='flex w-full gap-4 items-end'>
                    <div className='w-full'>
                      <p className='text-foreground-2'>Wallpaper size</p>
                      <Dropdown options={options} defaultSelected={options[0]} />
                    </div>
                    <a href={file} download={filename}>
                      <svg
                        width='56'
                        height='56'
                        viewBox='0 0 56 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M28.0007 33.3359L21.334 26.6693L23.2007 24.7359L26.6673 28.2026V17.3359H29.334V28.2026L32.8007 24.7359L34.6673 26.6693L28.0007 33.3359ZM20.0007 38.6693C19.2673 38.6693 18.6393 38.4079 18.1167 37.8853C17.594 37.3626 17.3331 36.735 17.334 36.0026V32.0026H20.0007V36.0026H36.0007V32.0026H38.6673V36.0026C38.6673 36.7359 38.406 37.3639 37.8833 37.8866C37.3607 38.4093 36.7331 38.6702 36.0007 38.6693H20.0007Z'
                          fill='#F09444'
                        />
                        <rect
                          x='1'
                          y='1'
                          width='54'
                          height='54'
                          rx='7'
                          stroke='#F09444'
                          strokeWidth='2'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}

            {activeTab === tabs[2] &&
              imageData.map((data, i) => (
                <img
                  key={i}
                  src={data.image}
                  className=' w-[156px] h-[156px] md:w-[314px] md:h-[314px] object-cover rounded-2xl'
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
