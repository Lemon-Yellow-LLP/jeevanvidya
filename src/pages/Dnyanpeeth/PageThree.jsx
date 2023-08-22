import MediaCard from '@/components/MediaCard';
import TestCardImage from '@/assets/Dnyanpeeth-banner.png';

const pageData = [
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
];

const PageThree = () => {
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

export default PageThree;
