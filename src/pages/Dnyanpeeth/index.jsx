import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';
import dnyannpeethloaction from '@/assets/dnyannpeethloaction.png';
import loactionArrow from '@/assets/locationarrow.svg';
import TestImage from '@/assets/Dnyanpeeth-banner.png';
import Flower from '@/assets/section-flower.png';
import Flower2 from '@/assets/flower2.svg';
import PageOne from './pagination-pages/PageOne';
import PageTwo from './pagination-pages/PageTwo';
import DnyanpeethCourseCard from '@/components/DnyanpeethCourseCard';
import ImageDetailContainer from '@/components/ImageDetailContainer';
import AboutImage1 from '@/assets/about-image-1.png';
import AboutImage2 from '@/assets/about-image-2.png';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import Slider from '@/components/Slider';
import { SwiperSlide } from 'swiper/react';
import MediaCard from '@/components/MediaCard';
import TextInput from '@/components/InputFields/TextInput';
import { useCallback, useState } from 'react';
import PhoneNumberInput from '@/components/InputFields/TextInput/PhoneNumberInput';
import Dropdown from '@/components/InputFields/Dropdown';
import Button from '@/components/Button';

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
  {
    title: 'VideoThree',
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
    'One of the unique offerings of this project is the acoustically designed prayer hall. One and all can pray and sing the Divine Universal Prayer together. We intend to take you in a different world through the Divine vibrations of the Universal Prayer and make a lasting impact on your mindset Also present is library of Satgurus books, audio CDs, video CDs and DVDs. Exhibition rooms host creative depiction of Satgurus work in the form of photographs, paintings, awards, felicitation letters and honours, feedback, newspaper and magazine articles etc',
  imagePosition: 'right',
  contentClassName: 'justify-center',
};

const pages = [<PageOne />, <PageTwo />];

const Dnyanpeeth = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    about: '',
    location: '',
    message: '',
    phoneNumber: '',
    phoneNumberVerified: false,
    radio: false,
    checkbox: true,
    verificationCode: '',
    dropdown: '',
  });

  const [errors, setErrors] = useState({
    name: 'Enter Name',
    email: 'Enter Name',
    about: 'Enter Name',
    location: 'Enter Name',
    message: 'Enter Name',
    phoneNumberVerified: 'Enter Name',
    phoneNumber: 'Enter Name',
    dropdown: 'Enter Name',
    image: 'Enter Name',
    verificationCode: 'Enter Name',
  });

  const handleChange = useCallback((e) => {
    let newData = values;
    newData[e.target.name] = e.target.value;
    setValues({ ...newData });
  }, []);

  const options = [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
  ];

  const handleDropdownChange = useCallback(({ value, name }) => {
    let newData = values;
    newData[name] = value;
    setValues({ ...newData });
  }, []);
  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='flex flex-col blue-gradient'>
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

      <div className='p-4 md:p-10 lg:p-20 flex flex-col items-center gap-10 text-center light-blue-gradient'>
        <iframe
          src='https://www.youtube.com/embed/LUjReWo8NWw?si=XchhF5X8zdc2orW3'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='w-full h-[300px] lg:h-[598px]'
        ></iframe>
        <div className=''>
          <p className='text-base text-foreground-1 font-normal'>
            The innovative campus of Jeevanvidya World Dynyanpeeth has landscaped gardens, carefully
            designed water walk-ways, tiny bridges, swimming pools, cozy accommodation (capacity of
            ~200 people), facility for food and dining and recreation will make your stay a truly
            memorable experience. Add to that multi-media equipped lecture hall, an amphitheater.
            The entire campus would be Wi-Fi enabled to have easy internet access
          </p>
        </div>
      </div>

      <ImageDetailContainer {...awardsData} className='bg-background-3' />

      <div className='flex flex-col py-[40px] px-[16px] lg:p-[80px] lg:flex-row gap-4 md:gap-[48px] blue-gradient'>
        <div className='sm:h-fit overflow-hidden rounded-2xl lg:w-2/4'>
          <img className='w-full object-cover' src={AboutImage2} alt='aboutImage' />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center gap-4'>
          <img src={Flower} alt='flowerImage' />

          <h2 className='text-lg md:text-[32px] italic font-semibold text-center'>
            " Maharashtrian of the year award"
          </h2>
          <p className='text-sm leading-[22px] md:leading-7 md:text-base not-italic font-normal text-center'>
            Satguru Shri Wamanrao Pai introduced the Jeevanvidya Philosophy which is "the science of
            life and the art of living".
          </p>
        </div>
      </div>

      <div className='pb-20'>
        <SectionTitleDescription
          align='left'
          image={Flower}
          title='Courses at Dyanpeeth'
          description='Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully for
          all walks of life.'
          className='p-4 lg:p-20'
        />
        <div className='pl-4 lg:pl-20'>
          <Slider
            slidesPerView={4.3}
            spaceBetween={40}
            breakPoints={{
              360: {
                slidesPerView: '1.3',
                spaceBetween: 16,
              },
              480: {
                slidesPerView: '1.5',
                spaceBetween: 30,
              },
              640: {
                slidesPerView: '2.5',
                spaceBetween: 40,
              },
              768: {
                slidesPerView: '2.5',
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: '2.5',
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: '4.5',
                spaceBetween: 24,
              },
            }}
          >
            {coursesData?.map((data, i) => (
              <SwiperSlide key={i}>
                <DnyanpeethCourseCard
                  title={data.title}
                  desc={data.desc}
                  key={i}
                  image={data.img}
                  duration={data.duration}
                  ageGroup={data.ageGroup}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      <div className='pb-20'>
        <SectionTitleDescription
          image={Flower2}
          title='Feedbacks & Videos'
          description='We take immense pride in the accolades and acknowledgments we have received for our outstanding 
          achievements and contributions.'
          align='center'
        />
        <div className='pl-4 lg:pl-20'>
          <Slider
            spaceBetween={24}
            slidesPerView={3.1}
            breakPoints={{
              360: {
                slidesPerView: '1.3',
                spaceBetween: 16,
              },
              480: {
                slidesPerView: '1.5',
                spaceBetween: 30,
              },
              640: {
                slidesPerView: '2.5',
                spaceBetween: 40,
              },
              768: {
                slidesPerView: '2.5',
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: '2.5',
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: '4.5',
                spaceBetween: 24,
              },
            }}
          >
            {feedbackData?.map((data, i) => (
              <SwiperSlide key={i}>
                <MediaCard cardTitle={data.title} cardImage={data.img} cardDesc={data.desc} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>

      <div className='py-10 pl-4 lg:p-20 blue-gradient'>
        <img src={Flower} alt='flower' className='pr-4 lg:pr-0' />
        <h2 className='text-lg md:text-[32px] font-semibold pr-4 lg:pr-0'>Visitor Registration</h2>
        <p className='text-sm leading-[22px] md:leading-7 md:text-base mt-4 font-normal opacity-80 pr-4 lg:pr-0'>
          All visitors who opt to visit jeevanvidya dnyanpeeth need to either apply for day pass or
          night stay pass well in advance. This will help us to serve you better once you reach
          dnyanpeeth.
        </p>
        <div className='flex gap-6 mt-8'>
          <div className='w-[60%] relative'>
            <img src={dnyannpeethloaction} alt='' className='rounded-xl' />
            <div className='absolute bottom-6 left-6 right-6 flex items-end gap-6'>
              <div className='w-3/4 flex flex-col gap-2'>
                <span className='text-[22px] font-semibold text-accent-white'>Address:</span>
                <span className='text-lg font-normal text-accent-white'>
                  Vaijnath, Tata Power Road, Off, Karjat - Murbad Rd, Karjat, Maharashtra 410201
                </span>
              </div>
              <div className='w-1/4 flex gap-2 cursor-pointer'>
                <h4 className='text-lg font-medium text-accent-orange'>View on Map</h4>
                <img src={loactionArrow} alt='map loaction' />
              </div>
            </div>
          </div>
          <div className='w-[40%] p-6 rounded-xl bg-white'>
            <div>
              <TextInput
                name='name'
                label='Name'
                error={errors.name}
                placeholder='E.g. Rakesh Jadhav'
                onChange={handleChange}
                required
                value={values.name}
                touched={true}
                disabled={true}
              />
              <PhoneNumberInput
                name='phoneNumber'
                label='Phone Number'
                error={errors.phoneNumber}
                placeholder='Placeholder'
                onChange={handleChange}
                required
                value={values.phoneNumber}
                touched={true}
                disabled={true}
              />
              <div className='flex'>
                <Dropdown
                  name='dropdown'
                  label='Label'
                  required
                  error={errors.dropdown}
                  options={options}
                  placeholder='Placeholder'
                  onChange={handleDropdownChange}
                  defaultSelected={values.dropdown}
                  touched={true}
                  disabled={true}
                />
                <TextInput
                  name='name'
                  label='Name'
                  error={errors.name}
                  placeholder='E.g. Rakesh Jadhav'
                  onChange={handleChange}
                  required
                  value={values.name}
                  touched={true}
                  disabled={true}
                />
              </div>
            </div>
            <div>
              <Button variant="filled" className="ml-auto">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dnyanpeeth;
