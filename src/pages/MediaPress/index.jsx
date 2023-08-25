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

// const pages = [
//   [
//     {
//       image: newsarticlesImg,
//       slug: 'News & Articles',
//       title: 'Title',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//     {
//       image: newsarticlesImg,
//       slug: 'News & Articles',
//       title: 'Title',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//     {
//       image: newsarticlesImg,
//       slug: 'News & Articles',
//       title: 'Title',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//     {
//       image: newsarticlesImg,
//       slug: 'News & Articles',
//       title: 'Title',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//   ],
//   [
//     {
//       image: VideoImg,
//       slug: 'Videos',
//       title: 'Video Title 1',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//     {
//       image: VideoImg,
//       slug: 'Videos',
//       title: 'Video Title 1',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//     {
//       image: VideoImg,
//       slug: 'Videos',
//       title: 'Video Title 1',
//       desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
//     },
//   ],
//   [
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//     {
//       image: NewsImg,
//       slug: 'Newspapers',
//     },
//   ],
// ];

const newsData = [
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: newsarticlesImg,
    slug: 'News & Articles',
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
];

const VideoData = [
  {
    image: VideoImg,
    slug: 'Videos',
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    slug: 'Videos',
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    slug: 'Videos',
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
];

const NewspaperData = [
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
  {
    image: NewsImg,
    slug: 'Newspapers',
  },
  {
    image: NewsImg,
    slug: 'Newspapers',
  },
];

export default function MediaPress() {
  const tabs = ['News & Articles', 'Videos', 'Newspapers'];

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

  const onChange = (value) => {
    setPageData(pages[value]);
  };

  return (
    <section className=''>
      <HeroBanner
        bannerImg={mediaBanner}
        bannerTitle='Media and Press Releases'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      {/* Tab section */}
      <div className='py-4 pl-4 md:px-20 md:py-5 flex flex-col md:flex-row justify-between items-center bg-[#f5f5f5]'>
        <div className='flex gap-2 w-full overflow-x-auto'>
          {tabs.map((tab, index) => (
            <TabButton label={tab} activeTab={activeTab} onChange={handleTabClick} key={index} />
          ))}
        </div>

        <div className='flex gap-4 justify-end items-center w-full'>
          <form className='flex flex-col md:flex-row items-baseline gap-4'>
            <label htmlFor='Sort By:' className='text-xs md:text-lg '>
              Sort By
            </label>
            <Dropdown options={options} placeholder='Search Branch'/>
          </form>
          <div className='relative'>
            <img src={SearchIcon} alt='Search icon' className='absolute top-4 left-4' />
            <input type='text' placeholder='Search' className='h-14 rounded-lg text-center' />
          </div>
        </div>
      </div>

      <div className='md:p-20 p-3 bg-[#f5f5f5]'>
        <div
          className={`grid gap-x-6 gap-y-8 ${
            activeTab === tabs[0] || activeTab === tabs[1] ? 'md:grid-cols-3' : 'md:grid-cols-4'
          }`}
        >
          {activeTab === tabs[0] &&
            newsData.map((data, i) => (
              <MediaCard
                key={i}
                cardTitle={data.title}
                cardDesc={data.desc}
                cardImage={data.image}
                btnTitle='Read More'
              />
            ))}

          {activeTab === tabs[1] &&
            VideoData.map((data, i) => (
              <MediaCard
                key={i}
                cardTitle={data.title}
                cardDesc={data.desc}
                cardImage={data.image}
              />
            ))}

          {activeTab === tabs[2] &&
            NewspaperData.map((data, i) => <MediaCard key={i} cardImage={data.image} />)}
        </div>
      </div>
    </section>
  );
}
