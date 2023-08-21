import SectionTitleDescription from '@/components/SectionTitleDescription';
import TabButton from '@/components/TabButton';
import { useState } from 'react';
import { sectionData } from './data';
import Loader from '@/components/Loader';

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

      {/* <SectionTitleDescription {...sectionData} /> */}
      {/* <Loader /> */}
    </>
  );
}
