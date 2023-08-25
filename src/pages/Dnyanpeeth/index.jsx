import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';
import MediaCard from '@/components/MediaCard';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import Flower from '@/assets/section-flower.png';
import Pagination from '@/components/Pagination';
import PageOne from './pagination-pages/PageOne';
import PageTwo from './pagination-pages/PageTwo';
import DnyanpeethCourseCard from '@/components/DnyanpeethCourseCard';

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

const coursesData = [
  {
    title: 'VideoOne',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
    duration: '1 day',
    ageGroup: '15 to 21',
  },
  {
    title: 'VideoTwo',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
    duration: '1 day',
    ageGroup: '15 to 21',
  },
  {
    title: 'VideoThree',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
    duration: '1 day',
    ageGroup: '15 to 21',
  },
];

const pages = [<PageOne />, <PageTwo />];

const Dnyanpeeth = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='p-20'>
        <div className='flex justify-center w-full'>
          <img src={Flower} alt='flower' />
        </div>
        <h2 className='text-center text-[32px] font-semibold'>Feedbacks & Videos</h2>
        <p className='text-center mt-4 font-normal opacity-80'>
          We take immense pride in the accolades and acknowledgments we have received for our
          outstanding achievements and contributions.
        </p>
        <div className='flex gap-6 mt-8 overflow-auto'>
          {feedbackData.map((data, index) => (
            <div className='min-w-[410px]'>
              <MediaCard
                cardTitle={data.title}
                cardDesc={data.desc}
                key={index}
                cardImage={data.img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='p-20'>
        <Pagination pages={pages} />
      </div>

      <div className='p-20'>
        <img src={Flower} alt='flower' />
        <h2 className='text-[32px] font-semibold'>Courses at Dyanpeeth</h2>
        <p className='mt-4 font-normal opacity-80'>
          Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully for
          all walks of life.
        </p>
        <div className='flex gap-6 mt-8 overflow-auto'>
          {coursesData.map((data, index) => (
            <div className='min-w-[302px] max-w-[302px]'>
              <DnyanpeethCourseCard
                title={data.title}
                desc={data.desc}
                key={index}
                image={data.img}
                duration={data.duration}
                ageGroup={data.ageGroup}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dnyanpeeth;
