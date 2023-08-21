import HeroBanner from '@/components/HeroBanner';
import TabButton from '@/components/TabButton';
import { useState } from 'react';
import herobanner from '@/assets/HeroBanner.svg';
import mobilebanner from '@/assets/MobileBanner.png';
import Card from '@/components/MediaCard';
import Navbar from '@/components/Navbar';

const types = ['Written Testimonial', 'Video Testimonials', 'test'];
export default function Home() {
  const [active, setActive] = useState(types[0]);

  const handleClick = (e) => {
    setActive(e);
  };

  return (
    <>
      {/* {types.map((type, index) => (
        <TabButton label={type} activeTab={active} onChange={handleClick} key={index}></TabButton>
      ))} */}

      {/* <HeroBanner
        bannerImg={innerWidth > 1024 ? herobanner : mobilebanner}
        bannerTitle='Courses Schedule'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      ></HeroBanner> */}

      <Navbar/>
    </>
  );
}
