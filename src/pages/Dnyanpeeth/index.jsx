import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';
import MediaCard from '@/components/MediaCard';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import Flower from '@/assets/section-flower.png';
import Pagination from '@/components/Pagination';
import TestCardImage from '@/assets/Dnyanpeeth-banner.png';
import { useState } from 'react';

const feedbackData = [
  {
    title: 'VideoOne',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
  {
    title: 'VideoTwo',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
  {
    title: 'VideoThree',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
];

const pages = [
  [
    {
      title: 'VideoOne',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoTwo',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoThree',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoFour',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoFive',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoSix',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
  ],
  [
    {
      title: 'VideoSeven',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoEight',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoNine',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
  ],
  [
    {
      title: 'VideoTen',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoEleven',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
    {
      title: 'VideoTwelve',
      desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
      img: TestCardImage,
    },
  ],
];

const Dnyanpeeth = () => {
  const [pageData, setPageData] = useState(pages[0]);

  const onChange = (value) => {
    setPageData(pages[value]);
  };

  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='p-20'>
        <div className='flex justify-center w-full'>
          <img src={Flower} alt='' />
        </div>
        <h2 className='text-center text-[32px] font-semibold'>Feedbacks & Videos</h2>
        <p className='text-center mt-4 font-normal opacity-80'>
          We take immense pride in the accolades and acknowledgments we have received for our
          outstanding achievements and contributions.
        </p>
        <div className='flex gap-6 mt-8'>
          {feedbackData.map((data, index) => (
            <MediaCard
              cardTitle={data.title}
              cardDesc={data.desc}
              key={index}
              cardImage={data.img}
            />
          ))}
        </div>
      </div>

      <div className='p-20'>
        <Pagination pages={pages} pageData={pageData} callback={onChange} />
      </div>
    </div>
  );
};

export default Dnyanpeeth;
