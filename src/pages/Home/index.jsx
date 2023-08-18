import TabButton from '@/components/TabButton';
import { useState } from 'react';

const types = ['Written Testimonial', 'Video Testimonials', 'test'];
export default function Home() {
  const [active, setActive] = useState(types[0]);

  const handleClick = (e) => {
    setActive(e);
    // console.log(e);
  };

  return (
    <>
      {types.map((type, index) => (
        <TabButton label={type} activeTab={active} onChange={handleClick} key={index}></TabButton>
      ))}
    </>
  );
}
