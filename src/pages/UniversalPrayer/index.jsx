import HeroBanner from '@/components/HeroBanner';
import Navbar from '@/components/Navbar';
import React from 'react';
import { universalPrayerData } from './data';
import SectionTitleDescription from '@/components/SectionTitleDescription';

export default function UniversalPrayer() {
  return (
    <div>
      <Navbar />
      <HeroBanner {...universalPrayerData.banner} imageClassName='h-auto lg:h-[450px]' />
      <section id='prayer'></section>
    </div>
  );
}
