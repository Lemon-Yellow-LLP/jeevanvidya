import HeroBanner from '@/components/HeroBanner';
import TabButton from '@/components/TabButton';
import MediaCard from '@/components/MediaCard';
import { useState } from 'react';
import mediaBanner from '@/assets/mediapressBanner.png';
import newsarticlesImg from '@/assets/newsarticlesImg.png';
import VideoImg from '@/assets/videoImg.png';
import NewsImg from '@/assets/newspaper1.png';
import SearchIcon from '@/assets/search_icon.svg';
import Dropdown from '@/components/InputFields/Dropdown';
import Pagination from '@/components/Pagination';

const tabOne = [
  [
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 1',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 2',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 3',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
  [
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 4',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 5',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 6',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
  [
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 7',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 8',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: newsarticlesImg,
      slug: 'News & Articles',
      title: 'Title 9',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
];

const tabTwo = [
  [
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 1',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 2',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 3',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
  [
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 4',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 5',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 6',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
  [
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 7',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 8',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
    {
      image: VideoImg,
      slug: 'Videos',
      title: 'Video Title 9',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
    },
  ],
];

const tabThree = [
  [
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
  ],
  [
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
    {
      image: NewsImg,
      slug: 'Newspapers',
    },
  ],
];

export default function MediaPress() {
  const tabs = ['News & Articles', 'Videos', 'Newspapers'];
  const [pageDataOne, setPageDataOne] = useState(tabOne[0]);
  const [pageDataTwo, setPageDataTwo] = useState(tabTwo[0]);
  const [pageDataThree, setPageDataThree] = useState(tabThree[0]);

  const onChangeOfPageOne = (value) => {
    setPageDataOne(tabOne[value]);
  };
  const onChangeOfPageTwo = (value) => {
    setPageDataTwo(tabTwo[value]);
  };
  const onChangeOfPageThree = (value) => {
    setPageDataThree(tabThree[value]);
  };

  const options = [
    {
      label: 'News',
      value: 1,
    },
    {
      label: 'Videos',
      value: 2,
    },
    {
      label: 'Newspapers',
      value: 3,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  return (
    <section className=''>
      <HeroBanner
        bannerImg={mediaBanner}
        bannerTitle='Media and Press Releases'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      {/* Tab section */}
      <div className='pl-4 lg:px-10 xl:px-20 pt-3 flex flex-col gap-4 xl:flex-row lg:items-baseline justify-between bg-accent-white'>
        <div className='flex gap-2 md:gap-6 overflow-x-auto whitespace-nowrap hide-scrollbar'>
          {tabs.map((tab, index) => (
            <TabButton label={tab} activeTab={activeTab} onChange={handleTabClick} key={index} />
          ))}
        </div>

        <div className='flex lg:flex-row-reverse flex-col gap-4'>
          <div className='relative pr-4 md:pr-10'>
            <img
              src={SearchIcon}
              alt='Search icon'
              className='absolute top-1/2 md:top-7 left-3 transform -translate-y-1/2'
            />
            <input
              id='search'
              type='text'
              placeholder='Search'
              className='w-full pl-10 py-4 rounded-lg border-white'
            />
          </div>
          <form className='flex gap-4 items-baseline'>
            <label htmlFor='Sort By:' className='text-xs md:text-lg '>
              Sort By:
            </label>
            <Dropdown options={options} placeholder='Search' className="bg-white md:w-[193px]" />
          </form>
        </div>
      </div>

      <div className='p-3 md:p-10 lg:p-20 bg-[#f5f5f5]'>
        {/* News And Articles */}
        {activeTab === tabs[0] && (
          <Pagination pages={tabOne} pageData={pageDataOne} callback={onChangeOfPageOne}>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6'>
              {pageDataOne.map((data, index) => {
                return (
                  <MediaCard
                    key={index}
                    cardTitle={data.title}
                    cardDesc={data.desc}
                    cardImage={data.image}
                    btnTitle='Read More'
                    className="hover:shadow-xl"
                  />
                );
              })}
            </div>
          </Pagination>
        )}
        {/* Videos */}
        {activeTab === tabs[1] && (
          <Pagination pages={tabTwo} pageData={pageDataTwo} callback={onChangeOfPageTwo}>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6'>
              {pageDataTwo.map((data, index) => {
                return (
                  <MediaCard
                    key={index}
                    cardTitle={data.title}
                    cardImage={data.image}
                    cardDesc={data.desc}
                    className="hover:shadow-xl"
                  />
                );
              })}
            </div>
          </Pagination>
        )}
        {/* NewsPapers */}
        {activeTab === tabs[2] && (
          <Pagination pages={tabThree} pageData={pageDataThree} callback={onChangeOfPageThree}>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6'>
              {pageDataThree.map((data, index) => {
                return <MediaCard key={index} cardImage={data.image} />;
              })}
            </div>
          </Pagination>
        )}
      </div>
    </section>
  );
}
