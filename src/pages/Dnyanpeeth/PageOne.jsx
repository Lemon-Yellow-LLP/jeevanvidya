import MediaCard from '@/components/MediaCard';
import TestCardImage from '@/assets/Dnyanpeeth-banner.png';

const pageData = [
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
];

const PageOne = () => {
  return (
    <div className='grid grid-cols-3 gap-y-8 gap-x-6'>
      {pageData.map((data, index) => (
        <MediaCard
          btnTitle='Read More'
          cardTitle={data.title}
          cardDesc={data.desc}
          cardImage={data.img}
          key={index}
        />
      ))}
    </div>
  );
};

export default PageOne;
