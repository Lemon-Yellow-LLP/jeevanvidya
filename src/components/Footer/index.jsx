import data from '@/components/Footer/data';
import footerlogo1 from '@/assets/footerlogo1.svg';
import footerlogo2 from '@/assets/footerlogo2.svg';
import mail from '@/assets/mail.svg';
import mappin from '@/assets/mappin.svg';
import phoneimg from '@/assets/phone.svg';
import socialmedia from '@/assets/socialmedia.svg';

export default function Footer() {
  console.log(data);
  return (
    <footer className='mt-20 bg-[#172539]'>
      <div className='w-full px-4 md:px-20 pt-10 pb-5'>
        <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
              <span className='text-[22px] md:text-[32px] text-white font-semibold'>
                Get Jeevanvidya Updates
              </span>
              <span className='text-sm md:text-base font-normal text-[#f5f5f5cc]'>
                Subscribe to our newsletter to receive updates and special announcements
              </span>
            </div>
            <div className='flex gap-4'>
              <input
                type='text'
                name='email'
                className='w-full md:w-[371px] h-10 md:h-14 rounded-lg bg-[#fff]'
                placeholder='Email Address'
                id=''
              />
              <button className='text-white bg-[#F09444] px-6 py-2 md:py-4 rounded-lg'>
                Submit
              </button>
            </div>
          </div>
          <div className='md:ml-auto'>
            <img
              src={footerlogo1}
              className='w-[122px] h-[85px] md:w-60 md:h-36'
              alt='FooterLogo1'
            />
          </div>
          <div></div>
        </div>
      </div>
      <div className='w-full px-4 md:px-20 pt-10 pb-5'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='flex flex-col gap-20 w-full'>
            <img src={footerlogo2} className='w-[206px] h-[96px]' alt='' />
            <div className='flex gap-4 mb-5'>
              <span className='text-white text-sm md:text-base w-full md:w-[170px]'>
                JVM on social media
              </span>
              <div className='w-full lg:w-[150px]'>
                <img src={socialmedia} className='' alt='' />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 md:flex-row w-full'>
            <div className='flex w-full justify-around'>
              <div className='flex flex-col w-full gap-4'>
                <span className='text-[#0084CB] text-base md:text-xl font-semibold'>About Us</span>
                {data.about.map((ele) => {
                  return (
                    <>
                      <span className='text-sm md:text-base font-normal text-white'>
                        {ele.name}
                      </span>
                    </>
                  );
                })}
              </div>
              <div className='flex flex-col w-full gap-4'>
                <span className='text-[#0084CB] text-base md:text-xl font-semibold'>Resources</span>
                {data.resources.map((ele) => {
                  return (
                    <>
                      <span className='text-sm md:text-base font-normal text-white'>
                        {ele.name}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <span className='text-[#0084CB] text-base md:text-xl font-semibold'>Contact Us</span>
              <div className='flex gap-6'>
                <img src={mappin} className='w-6 h-6' alt='map pin' />
                <span className='text-sm md:text-base font-normal text-white'>
                  Lorem ipsum dolor sit amet consectetur. Nibh habitant tincidunt sollicitudin mi
                  arcu volutpat.
                </span>
              </div>

              <div className='flex gap-6'>
                <img src={mail} className='w-6 h-6' alt='mail' />
                <span className='text-sm md:text-base font-normal text-white'>
                  contactus@jeevanvidya.in
                </span>
              </div>

              <div className='flex gap-6'>
                <img src={phoneimg} className='w-6 h-6' alt='phone' />
                <span className='text-sm md:text-base font-normal text-white'>2100 102 7070</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-4 md:px-20 pt-6 pb-6 bg-black text-white'>
        <div className='flex flex-col-reverse gap-2 md:flex-row'>
          <span className='text-xs md:text-base text-[#f5f5f5cc]'>
            Copyright © 2009-2023 Jeevanvidya Mission All rights reserved
          </span>
          <div className='flex gap-4 md:ml-auto'>
            <span className='text-sm md:text-base'>Privacy Policy</span>
            <span className='text-sm md:text-base'>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
