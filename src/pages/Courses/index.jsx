import HeroBanner from '@/components/HeroBanner';
import Stepper from '@/components/Stepper';
import courseBanner from '@/assets/coursesBanner.png';
import TabButton from '@/components/TabButton';
import flower from '@/assets/flower.png';
import courseListImg from '@/assets/courseListImg.png';
import { useState } from 'react';

export default function Courses() {
  const steps = ['Basic Details', 'Address Details', 'Other Details', 'Success'];
  const coursesArr = [
    'Swanand Yog',
    'Student Course',
    'Youth Course',
    'Spiritual Wisdom',
    'Online Course',
    'Corporates',
  ];

  const sidebarsteps = [
    { level: 'level-1', desc: 'Foundation Course' },
    { level: 'level-2', desc: 'The art of living' },
    { level: 'level-3', desc: 'Travel is great' },
    { level: 'level-4', desc: 'Mind Peace Sadhana Camp' },
    { level: 'level-5', desc: 'Search for God' },
    { level: 'level-6', desc: 'Divyabodh and Bhavasmaran' },
    { level: 'level-7', desc: 'Divyabodh and Divyasadhana' },
  ];

  const [activeSidebarsteps, setActivesidebarsteps] = useState(0);

  return (
    <div className='pt-[140px] bg-[#F5F5F5]'>
      <HeroBanner
        bannerImg={courseBanner}
        bannerTitle={'Courses'}
        bannerDesc={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
        }
      />

      <div className='px-4 py-10 lg:p-[80px]'>
        {/* jvm courses header starts */}
        <div className='flex flex-col gap-2 lg:gap-4 border-b-[1px] border-[rgba(18, 33, 53, 0.80)]'>
          <div>
            <img src={flower} />
          </div>
          <div className='text-[18px] lg:text-[32px] font-semibold text-[#122135]'>JVM Courses</div>
          <div className='text-sm lg:text-base opacity-80 font-normal'>
            Empower and enlighten yourself with variety of Jeevanvidya courses, curated carefully
            for all walks of life.
          </div>
          <div className='flex items-center	gap-4 flex-wrap mt-2  mb-6'>
            {coursesArr.map((eachElement, index) => (
              <TabButton label={eachElement} key={index} />
            ))}
          </div>
        </div>
        {/* jvm courses header ends */}

        {/* course list section starts */}

        {/* desktop starts */}
        <div className='hidden lg:flex items-start justify-between mt-6'>
          {/* course list starts */}
          <div>
            <div className='text-base font-semibold uppercase text-[#0084CB]'>Course List</div>
            <div className='flex flex-col gap-[8px] mt-[24px]'>
              {sidebarsteps.map((step, index) => (
                <div
                  className={`flex max-w-[302px] cursor-pointer  `}
                  onClick={() => setActivesidebarsteps(index)}
                  key={index}
                >
                  <div className={`min-w-[8px]  ${activeSidebarsteps === index && 'bg-[#0074FC]'} rounded-2xl`}></div>
                  <div className='flex gap-2 text-base font-normal text-[rgba(18, 33, 53, 0.80)] p-[16px] pr-[24px]'>
                    <span>
                      {step.level} : {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* course list ends */}

          {/* course details starts */}
          <div>
            <div className='bg-[#FFF] rounded-3xl p-6 flex flex-col gap-4'>
              <div>
                <img src={courseListImg} />
              </div>

              <div className='text-2xl font-semibold text-[#122135]'>
                Level 1 : Foundation Course
              </div>

              <div className='mt-2'>
                <div className='text-xl text-[#122135] font-semibold'>
                  Briefly about this course
                </div>
              </div>
            </div>
          </div>
          {/* course details ends */}
        </div>
        {/* desktop ends */}

        {/* course list section ends */}
      </div>
    </div>
  );
}
