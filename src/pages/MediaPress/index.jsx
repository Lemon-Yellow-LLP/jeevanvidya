import HeroBanner from '@/components/HeroBanner';
import TabButton from '@/components/TabButton';
import MediaCard from '@/components/MediaCard';
import { useState } from 'react';
import mediaBanner from '@/assets/mediapressBanner.png';
import newsarticlesImg from '@/assets/newsarticlesImg.png';
import VideoImg from '@/assets/videoImg.png';
import NewsImg from '@/assets/newspaper1.png';

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
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);

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
      <div className='p-3'>
        <div className='flex gap-2'>
          {tabs.map((tab, index) => (
            <TabButton label={tab} activeTab={activeTab} onChange={handleTabClick} key={index} />
          ))}
        </div>

        <div className='md:p-20 grid grid-cols-3'>
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
            NewspaperData.map((data, i) => (
              <div key={i}>
                <img src={data.image} alt={data.slug} className='' />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
