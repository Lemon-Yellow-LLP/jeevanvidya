import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';
import MediaCard from '@/components/MediaCard';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import Flower from '@/assets/section-flower.png';
import Pagination from '@/components/Pagination';
import PageOne from './pagination-pages/PageOne';
import PageTwo from './pagination-pages/PageTwo';
import DnyanpeethCourseCard from '@/components/DnyanpeethCourseCard';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import AboutImage1 from '@/assets/about-image-1.png';
import AboutImage2 from '@/assets/about-image-2.png';

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
  {
    title: 'VideoFour',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
    duration: '1 day',
    ageGroup: '15 to 21',
  },
  {
    title: 'VideoFive',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
    duration: '1 day',
    ageGroup: '15 to 21',
  },
];

const awardsData = {
  image: AboutImage1,
  description:
    'One of the unique offerings of this project is the acoustically designed prayer hall. One and all can pray and sing the Divine Universal Prayer together. We intend to take you in a different world through the Divine vibrations of the Universal Prayer and make a lasting impact on your mindset Also present is library of Satguru’s books, audio CDs, video CDs and DVDs. Exhibition rooms host creative depiction of Satguru’s work in the form of photographs, paintings, awards, felicitation letters and honours, feedback, newspaper and magazine articles, etc.',
  imagePosition: 'right',
  contentClassName: 'justify-center',
};

const pages = [<PageOne />, <PageTwo />];

const Dnyanpeeth = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='flex flex-col gap-8 blue-gradient'>
        <div className='flex flex-col py-[40px] px-[16px] lg:p-[80px] lg:flex-row gap-6 lg:gap-[72px]'>
          <div className='sm:h-fit overflow-hidden flex gap-4 md:gap-6 lg:w-2/4'>
            <div>
              <img
                className='object-cover h-[278px] md:h-[536px] w-full mb-20 rounded-2xl'
                src={AboutImage2}
                alt='aboutImage'
              />
            </div>
            <div>
              <img
                className='object-cover h-[278px] md:h-[536px] w-full mt-20 rounded-2xl'
                src={AboutImage2}
                alt='aboutImage'
              />
            </div>
          </div>
          <div className='flex-1 flex flex-col items-start justify-center gap-4'>
            <img src={Flower} alt='flowerImage' />

            <h2 className='text-lg md:text-[32px] not-italic font-semibold'>
              Divine Knowledge Center
            </h2>
            <p className='text-sm leading-[22px] md:leading-7 md:text-base not-italic font-normal'>
              Satguru Shri Wamanrao Pai introduced the Jeevanvidya Philosophy which is "the science
              of life and the art of living".
            </p>
          </div>
        </div>
      </div>

      {/* <div className='p-20'>
        <Pagination pages={pages} />
      </div> */}

      <ImageDetailContainer {...awardsData} className='bg-background-3' />

      <div className='flex flex-col py-[40px] px-[16px] lg:p-[80px] lg:flex-row gap-4 md:gap-[48px] blue-gradient'>
        <div className='sm:h-fit overflow-hidden rounded-2xl lg:w-2/4'>
          <img className='w-full object-cover' src={AboutImage2} alt='aboutImage' />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center gap-4'>
          <img src={Flower} alt='flowerImage' />

          <h2 className='text-lg md:text-[32px] not-italic font-semibold text-center'>
            “ Maharashtrian of the year award“
          </h2>
          <p className='text-sm leading-[22px] md:leading-7 md:text-base not-italic font-normal text-center'>
            Satguru Shri Wamanrao Pai introduced the Jeevanvidya Philosophy which is "the science of
            life and the art of living".
          </p>
        </div>
      </div>

      <div className='py-10 pl-4 lg:p-20'>
        <img src={Flower} alt='flower' className='pr-4 lg:pr-0' />
        <h2 className='text-lg md:text-[32px] font-semibold pr-4 lg:pr-0'>Courses at Dyanpeeth</h2>
        <p className='text-sm leading-[22px] md:leading-7 md:text-base mt-4 font-normal opacity-80 pr-4 lg:pr-0'>
          Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully for
          all walks of life.
        </p>
        <div className='flex gap-6 mt-8 overflow-auto pr-4 lg:pr-0'>
          {coursesData.map((data, index) => (
            <div className='min-w-[270px] md:min-w-[302px] md:max-w-[302px]' key={index}>
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

      <div className='py-10 pl-4 lg:p-20'>
        <div className='flex justify-center w-full pr-4 lg:pr-0'>
          <img src={Flower} alt='flower' />
        </div>
        <h2 className='text-center text-lg md:text-[32px] font-semibold pr-4 lg:pr-0'>
          Feedbacks & Videos
        </h2>
        <p className='text-sm leading-[22px] md:leading-7 md:text-base text-center mt-4 font-normal opacity-80 pr-4 lg:pr-0'>
          We take immense pride in the accolades and acknowledgments we have received for our
          outstanding achievements and contributions.
        </p>
        <div className='flex gap-6 mt-8 overflow-auto pr-4 lg:pr-0'>
          {feedbackData.map((data, index) => (
            <div className='min-w-[270px] md:min-w-[410px]' key={index}>
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

      <div className='py-10 pl-4 lg:p-20 blue-gradient'>
        <img src={Flower} alt='flower' className='pr-4 lg:pr-0' />
        <h2 className='text-lg md:text-[32px] font-semibold pr-4 lg:pr-0'>Visitor Registration</h2>
        <p className='text-sm leading-[22px] md:leading-7 md:text-base mt-4 font-normal opacity-80 pr-4 lg:pr-0'>
          Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully for
          all walks of life.
        </p>
        <div className='flex gap-6 mt-8'>
          <div className='w-[60%]'>
            <img src={DnyanpeethBanner} alt='' className='rounded-xl' />
          </div>
          <div className='w-[40%] p-6 rounded-xl bg-white'></div>
        </div>
      </div>
    </div>
  );
};

export default Dnyanpeeth;
