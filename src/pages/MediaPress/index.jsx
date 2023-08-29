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
import Test from '@/components/test';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = newsData.slice(firstPostIndex, lastPostIndex);

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
      <div className='pl-4 lg:px-10 xl:px-20 pt-3 flex flex-col gap-4 lg:flex-row lg:items-baseline justify-between bg-accent-white'>
        <div className='flex gap-2 md:gap-4 overflow-x-auto hide-scrollbar'>
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
            <Dropdown options={options} placeholder='Search' />
          </form>
        </div>
      </div>

      <div className='p-3 md:p-10 lg:p-20 bg-[#f5f5f5]'>
        <div
          className={`grid gap-x-6 gap-y-8 ${
            activeTab === tabs[0] || activeTab === tabs[1]
              ? 'md:grid-cols-2 lg:grid-cols-3'
              : 'md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {activeTab === tabs[0] &&
            currentPosts.map((data, i) => (
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
        <Test totalPosts={newsData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
      </div>
    </section>
  );
}
