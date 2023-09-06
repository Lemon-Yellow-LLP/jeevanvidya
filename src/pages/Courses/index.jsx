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
    {
      level: 'level-1',
      desc: 'Foundation Course',
      brief: [
        { heading: '', bulletPoint: 'Introduction to philosophy of life in minimum time.' },
        {
          heading: '',
          bulletPoint: 'This course is structured in three steps Body, Mind and Money.',
        },
        {
          heading: 'Body',
          bulletPoint:
            'Our natural natural beautiful system is body is life and vision to look at me is vision.',
        },
        { heading: 'Mind', bulletPoint: `What is mind? What's the trick to make your mind up?` },
        {
          heading: 'Money',
          bulletPoint:
            'Money is necessary for living, but how much and what kind of money is needed to enjoy a life of opulence.',
        },
      ],
      duration: '2 Day',
      age: '15 to 21',
    },

    {
      level: 'level-2',
      desc: 'The art of living',
      brief: [
        { heading: '', bulletPoint: 'Introduction to philosophy of life in minimum time.' },
        {
          heading: '',
          bulletPoint: 'This course is structured in three steps Body, Mind and Money.',
        },
        {
          heading: 'Heading leavel-2',
          bulletPoint:
            'Our natural natural beautiful system is body is life and vision to look at me is vision.',
        },
        {
          heading: 'Heading leavel-2',
          bulletPoint: `What is mind? What's the trick to make your mind up?`,
        },
        {
          heading: 'Heading leavel-2',
          bulletPoint:
            'Money is necessary for living, but how much and what kind of money is needed to enjoy a life of opulence.',
        },
      ],
      duration: '2 Day',
      age: '15 to 21',
    },
    { level: 'level-3', desc: 'Travel is great', brief: [] },
    { level: 'level-4', desc: 'Mind Peace Sadhana Camp', brief: [] },
    { level: 'level-5', desc: 'Search for God', brief: [] },
    { level: 'level-6', desc: 'Divyabodh and Bhavasmaran', brief: [] },
    { level: 'level-7', desc: 'Divyabodh and Divyasadhana', brief: [] },
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
                  <div
                    className={`min-w-[8px]  ${
                      activeSidebarsteps === index && 'bg-[#0074FC]'
                    } rounded-2xl`}
                  ></div>
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
                {/* Level 1 : Foundation Course */}
                {`${sidebarsteps[activeSidebarsteps].level} : ${sidebarsteps[activeSidebarsteps].desc}`}
              </div>

              <div className='mt-2'>
                <div className='text-xl text-[#122135] font-semibold'>
                  Briefly about this course
                </div>

                {/* bullet points starts */}

                <div className='mt-4 flex flex-col gap-6'>
                  {sidebarsteps[activeSidebarsteps].brief.map((eachElement, index) => (
                    <>
                      <div
                        className={
                          eachElement.heading
                            ? 'hidden'
                            : 'flex gap-1 text-[rgba(18,33,53,0.80)] text-base'
                        }
                      >
                        {index + 1}. {eachElement.bulletPoint}
                      </div>
                      <div className={eachElement.heading ? 'flex gap-1' : 'hidden'}>
                        <div className='text-rgba(18,33,53,0.80) font-semibold text-base'>
                          {index + 1}.
                        </div>
                        <div className='flex flex-col'>
                          <div className='text-rgba(18,33,53,0.80) font-semibold text-base'>
                            {eachElement.heading}
                          </div>
                          <div className='text-[rgba(18,33,53,0.80)] text-base'>
                            {eachElement.bulletPoint}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                {/* bullet points ends */}

                {/* duration and age starts */}
                <div className='mt-6 flex items-center gap-6'>
                  {/* duration starts */}
                  <div className='flex items-center gap-2'>
                    <div className='text-[rgba(18,33,53,0.80)] font-base'>Duration :</div>
                    <div className='text-[#122135] font-semibold text-base'>
                      {sidebarsteps[activeSidebarsteps].duration}
                    </div>
                  </div>

                  <svg
                    width='2'
                    height='18'
                    viewBox='0 0 2 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 1L0.999999 17'
                      stroke='#0084CB'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                  </svg>

                  <div className='flex items-center gap-2'>
                    <div className='text-[rgba(18,33,53,0.80)] font-base'>Age Group :</div>
                    <div className='text-[#122135] font-semibold text-base'>
                      {sidebarsteps[activeSidebarsteps].age}
                    </div>
                  </div>

                  {/* duration ends */}
                </div>
                {/* duration and age ends */}
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
