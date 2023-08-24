import TestimonialBanner from '@/assets/TestimonialBanner.png';
import TabButton from '@/components/TabButton';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import TestimonialCard from '@/components/TestimonialCard';
import HeroBanner from '@/components/HeroBanner';
import Flower from '@/assets/section-flower.png';
import testImage from '@/assets/Testimonialimg.png';
import videoTestImg from '@/assets/videoImg.png';
import { useState } from 'react';
import MediaCard from '@/components/MediaCard';

const TestimonialData = [
  {
    title: 'Vaibhav Nimbalkar',
    postion: 'IPS (ASSAM CADRE)',
    desc: 'Shri Pralhad Wamanrao Pai has introduced simple, effective techniques of Jeevanvidya philosophy through seminars and courses. He is constantly working to transform and make everyones life happier',
    img: testImage,
  },
  {
    title: 'Nitin Gadkari​',
    postion: 'Minister of Road Transport & Highways, Government of India',
    desc: 'Shri Pralhad Wamanrao Pai has introduced simple, effective techniques of Jeevanvidya philosophy through seminars and courses. He is constantly working to transform and make everyones life happier',
    img: testImage,
  },
  {
    title: 'Mandar Sukhatankar',
    postion: 'Senior Vice President,Bank of America',
    desc: 'Shri Pralhad Wamanrao Pai has introduced simple, effective techniques of Jeevanvidya philosophy through seminars and courses. He is constantly working to transform and make everyones life happier',
    img: testImage,
  },
  {
    title: 'Vaibhav Nimbalkar',
    postion: 'IPS (ASSAM CADRE)',
    desc: 'Shri Pralhad Wamanrao Pai has introduced simple, effective techniques of Jeevanvidya philosophy through seminars and courses. He is constantly working to transform and make everyones life happier',
    img: testImage,
  },
];

const VideoTestimonial = [
  {
    title: 'Dr. Jean M. Seely',
    desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
    img: videoTestImg,
  },
  {
    title: 'Dr. Jean M. Seely',
    desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
    img: videoTestImg,
  },
  {
    title: 'Dr. Jean M. Seely',
    desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
    img: videoTestImg,
  },
  {
    title: 'Dr. Jean M. Seely',
    desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
    img: videoTestImg,
  },
];

const Testimonial = () => {
  const testimonials = ['Written Testimonial', 'Video Testimonials'];
  const [active, setActive] = useState(testimonials[0]);
  const handleClick = (e) => {
    setActive(e);
  };

  return (
    <div>
      <HeroBanner
        bannerImg={TestimonialBanner}
        bannerTitle='Testimonials'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='p-20'>
        <div className='flex justify-between items-center'>
          <SectionTitleDescription
            className='mx-0'
            align='start'
            image={Flower}
            title='Impact of wisdom'
            description='People are at the heart of everything we do. Their trust in us reflects in these words'
          />
          <div className='flex gap-6'>
            {testimonials.map((type, index) => (
              <TabButton
                label={type}
                activeTab={active}
                onChange={handleClick}
                key={index}
              ></TabButton>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20 mt-20'>
          {active === 'Written Testimonial' &&
            TestimonialData.map((data, index) => (
              <TestimonialCard
                profile={data.img}
                testimonialName={data.title}
                testimonialposition={data.postion}
                testimonialReview={data.desc}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
