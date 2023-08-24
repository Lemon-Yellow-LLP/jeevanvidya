import ImageDetailContainer from '@/components/ImageDetailContainer';
import AboutSatguruImg from '@/assets/AboutSatguru.png';
import AboutSatguruImg1 from '@/assets/AboutSatguruImg1.png';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import FlowerImg from '@/assets/Flower1.png';
import FlowerImg1 from '@/assets/flower.png';
import sliderImg from '@/assets/sliderImg1.png';
import sliderImg1 from '@/assets/sliderImg2.png';
import VideoImg from '@/assets/VideoImg.png';
import LetterImg from '@/assets/letter.png';
import { SwiperSlide } from 'swiper/react';
import MediaCard from '@/components/MediaCard';
import Slider from '@/components/Slider';
import Swiper from 'swiper';

const SliderData = [
  {
    image: sliderImg,
    title: 'Office chair',
    desc: 'Cream Office Chair',
  },
  {
    image: sliderImg1,
    title: 'Storage',
    desc: 'Celestra Grey Cabinet',
  },
  {
    image: sliderImg,
    title: 'Decoration',
    desc: 'Fejka Artificial Plant',
  },
  {
    image: sliderImg1,
    title: 'Lightings',
    desc: 'White Standing Lamp',
  },
  {
    image: sliderImg,
    title: 'Bedside table',
    desc: 'Brown Wood Table',
  },
  {
    image: sliderImg1,
    title: 'Bedside table',
    desc: 'Brown Wood Table',
  },
];

const VideoData = [
  {
    image: VideoImg,
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
  {
    image: VideoImg,
    title: 'Video Title 1',
    desc: 'Lorem ipsum dolor sit amet, sectetur adipiscing elit. Cras molestie blandit...',
  },
];

const AboutSatguru = () => {
  return (
    <div>
      <ImageDetailContainer
        image={AboutSatguruImg}
        sectionImage={FlowerImg1}
        title='Biography'
        description='Satguru Shri Wamanrao Pai was a learned philosopher and the founder of the innovative philosophy Jeevanvidya. He was born in Mumbai, India, on October 21, 1923, in a middle-class family. He did his graduation from Mumbai University, Maharashtra, India, in 1944 and majored in Economics. He enjoyed a happy married life. His son and daughter are also happily married and well-settled with their children in India. Satguru was employed in the State Government of Maharashtra, and he retired as a Deputy Secretary, Finance, in the year 1981, after which he could devote more time to his discourses and towards developing Jeevanvidya Philosophy. At a very young age of around 25 years, Satguru Shri Wamanrao Pai was initiated into spiritualism by his Guru, Shri Nana Maharaj Srigondekar. Satguru Shri Wamanrao Pai attained the highest goal of spiritual sadhana self-realisation by his devoted and relentless efforts. He experienced inexplicable bliss and satisfaction, which propelled him to spread the spiritual knowledge and bliss to the masses'
        imagePosition='left'
        className='lg:gap-20 items-center'
      />

      <ImageDetailContainer
        image={AboutSatguruImg1}
        description='With the blessings of his Satguru, Satguru Shri Wamanrao Pai started delivering discourses on spiritualism from the year 1952, at the Spiritual Centre and at the Vivekananda Centre in Mumbai. After some years, Satguru Shri Wamanrao Pai and his ardent followers felt the need to set up a trust for the systematic dissemination of knowledge and the consequent upliftment of the masses. Hence they set up Nam Sampraday Mandal (NSM), (later renamed as Jeevanvidya Mission) on Dassera day in 1955. Nam Sampraday Mandal was officially registered with the Charity Commissioner, Mumbai, in the year 1979.'
        imagePosition='right'
      />

      <div>
        <SectionTitleDescription
          image={FlowerImg}
          align='center'
          title='Awards'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          className='md:w-[846px]'
        />
        {/* Awards Slider */}
        <Slider slidesPerView={5} spaceBetween={40} className="overflow-x-auto pl-20">
          {SliderData.map((data, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={data.image} alt={data.title} className='bg-[#E2EAF4] rounded-lg' />
                <div className='flex flex-col'>
                  <span className='text-sm opacity-50'>{data.title}</span>
                  <span className='text-xl font-medium'>{data.desc}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      {/* Media Video Slider */}
      <div className='p-4'>
        <SectionTitleDescription
          image={FlowerImg}
          align='left'
          title='Most watched videos'
          description='People are at the heart of everything we do. Their trust in us reflects 
          in these words'
        />
        {/* <div className='pl-10 md:pl-20 overflow-x-auto'>
          <Swiper
            slidesPerView={5.2}
            loop={true}
            spaceBetween={20}
            centeredSlides={false}
            slidesPerGroupSkip={2}
            grabCursor={true}
            breakpoints={{
              360: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            {VideoData.map((data, index) => (
              <SwiperSlide>
                <MediaCard cardImage={data.image} cardTitle={data.title} cardDesc={data.desc} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>

      {/* Letters from dignitaries */}
      <div className='p-4 md:p-20'>
        <SectionTitleDescription
          image={FlowerImg}
          align='left'
          title='Letters from dignitaries'
          description='Jeevanvidya Mission (JVM) was established in 1955 with a single vision: prosperity and happiness for all. Found by Satguru Shri Wamanrao Pai, Jeevanvidya Mission has been empowering individuals and institutions to lead a harmonious life.'
        />
        {/* <div className='pl-10 md:pl-20 overflow-x-auto'>
          <Swiper
            slidesPerView={5.2}
            loop={true}
            spaceBetween={20}
            centeredSlides={false}
            slidesPerGroupSkip={2}
            grabCursor={true}
            breakpoints={{
              360: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={LetterImg} alt='Letter' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={LetterImg} alt='Letter' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={LetterImg} alt='Letter' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={LetterImg} alt='Letter' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={LetterImg} alt='Letter' />
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSatguru;
