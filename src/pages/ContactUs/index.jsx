import HeroBanner from '@/components/HeroBanner';
import contactusBanner from '@/assets/mediapressBanner.png';
import clock from '@/assets/clock.svg';
import mail_icon from '@/assets/mail_icon.svg';
import office from '@/assets/officeAdd.svg';
import phone from '@/assets/phone_icon.svg';
import React, { useCallback, useState } from 'react';
import TextInput from '@/components/InputFields/TextInput';
import Button from '@/components/Button';
import TextareaInput from '@/components/InputFields/TextareaInput';

const ContactUs = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: 'Enter Name',
    email: 'Enter Email',
    message: 'Enter Message',
  });

  const handleChange = useCallback((e) => {
    let newData = values;
    newData[e.target.name] = e.target.value;
    setValues({ ...newData });
  }, []);
  return (
    <div>
      <HeroBanner
        bannerImg={contactusBanner}
        bannerTitle='Contact us'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='px-4 py-10 md:p-20 flex flex-col md:gap-8 blue-gradient'>
        <h4 className='text-foreground-1 md:text-[32px] font-semibold'>Contact Us</h4>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='w-full'>
            <div className='flex gap-4 items-start py-6'>
              <img src={office} alt='office icon' />
              <div>
                <span className='text-sm'>Administrative Office</span>
                <p className='text-foreground-1 text-base font-medium'>
                  A/2, Siddharth Nagar Bldg No. 5 CHS LTD Opp. Dheeraj Upvan Off Western Express
                  Highway Borivali East, Mumbai Pin Code 400066, India
                </p>
              </div>
            </div>

            <div className='flex gap-4 items-start py-6'>
              <img src={phone} alt='office icon' />
              <div className='flex flex-col'>
                <span className='text-sm'>Telephone Number</span>
                <span className='text-foreground-1 text-base font-medium'>
                  91 -022 -28879015 / 16
                </span>
              </div>
            </div>

            <div className='flex gap-4 items-start py-6'>
              <img src={mail_icon} alt='office icon' />
              <div className='flex flex-col'>
                <span className='text-sm'>Email Address</span>
                <span className='text-foreground-1 text-base font-medium'>
                  Office@jeevanvidya.org
                </span>
              </div>
            </div>

            <div className='flex gap-4 items-start py-6'>
              <img src={clock} alt='office icon' />
              <div className='flex flex-col'>
                <span className='text-sm'>Time</span>
                <span className='text-foreground-1 text-base font-medium'>
                  Weekdays : 12 pm to 9 pm
                </span>
                <span className='text-foreground-1 text-base font-medium'>
                  Sat/Sunday : 10 am to 6
                </span>
                <span className='text-foreground-1 text-base font-medium'>Wednesday Closed</span>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col md:p-8 bg-white rounded-3xl'>
            <TextInput
              name='name'
              label='Full Name'
              error={errors.name}
              placeholder='Rakesh Jadhav'
              onChange={handleChange}
              required
              value={values.name}
              touched={true}
              disabled={true}
            />

            <TextInput
              name='email'
              label='Email address'
              error={errors.email}
              placeholder='E.g. rakesh@mail.com'
              onChange={handleChange}
              required
              value={values.email}
              touched={true}
              disabled={true}
            />

            <TextareaInput
              name='message'
              label='Message'
              error={errors.message}
              placeholder='Write here'
              onChange={handleChange}
              required
              value={values.message}
              touched={true}
              disabled={true}
              className="h-44"
            />

            <div className='ml-auto'>
              <Button variant='filled' className=''>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='px-4 py-10 md:p-20 flex flex-col gap-8'>
        <h3 className='text-foreground-1 md:text-[32px] font-semibold'>View On Map</h3>
        <div className=''>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.807730441554!2d73.42454692464229!3d18.949321500860805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f8f8fc659027%3A0x7c99d5aac01986f7!2sJeevanvidya%20Dnyanpeeth%2C%20Karjat!5e0!3m2!1sen!2sin!4v1693301844467!5m2!1sen!2sin'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
            className='w-full h-[437px] md:h-[560px]'
          ></iframe>
        </div>
      </div>

      <div className='px-4 py-10 md:p-20 flex flex-col gap-8 bg-[linear-gradient(0deg,_#e2eaf4_0%,#e2eaf400_100%)]'>
        <h3 className='text-foreground-1 md:text-[32px] font-semibold'>Other Addresses</h3>
        <div className='grid grid-rows-3 gap-3 lg:grid-rows-none xl:grid-cols-3 lg:gap-6'>
          <div className='p-4 md:p-6 flex flex-col gap-4 bg-white rounded-3xl'>
            <img src={office} alt='office icon' className='w-12 h-12' />
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Jeevanvidya Dnyanpeeth</span>
                <span className='text-foreground-1 text-sm md:text-base font-medium'>
                  Vaijnath, Tata Power Road Off Karjat-Murbad Road, Karjat Pin Code: 410201, India
                </span>
                #e2eaf400
              </div>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Mobile Number</span>
                <span className='text-foreground-1 text-base font-medium'>+91 9969609700</span>
                <span className='text-foreground-1 text-base font-medium'>+91 9769830949</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Email Address</span>
                <span className='text-foreground-1 text-sm md:text-base font-medium'>
                  jvmdnyanpeeth@jeevanvidya.org
                </span>
              </div>
            </div>
          </div>

          <div className='p-4 md:p-6 flex flex-col gap-4 bg-white rounded-3xl'>
            <img src={office} alt='office icon' className='w-12 h-12' />
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Registered Office</span>
                <span className='text-foreground-1 text-base font-medium'>
                  Bhakti Yog (Hanuman Mandir) Near Abhyuday Bank Kalachowky, Mumbai Pin Code 400033,
                  India{' '}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Contact Number</span>
                <span className='text-foreground-1 text-base font-medium'>
                  Tel: 91 -022-24708782
                </span>
                <span className='text-foreground-1 text-base font-medium'>Mob: +91 9167755214</span>
              </div>
            </div>
          </div>

          <div className='p-4 md:p-6 flex flex-col gap-4 bg-white rounded-3xl'>
            <img src={office} alt='office icon' className='w-12 h-12' />
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col'>
                <span className='text-sm mb-2'>Jeevanvidya Dnyansadhana Kendra</span>
                <span className='text-foreground-1 text-base font-medium'>
                  Plot no. 24, Sector No.6, Kamothe, Navi Mumbai. Pin Code 410209, India{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
