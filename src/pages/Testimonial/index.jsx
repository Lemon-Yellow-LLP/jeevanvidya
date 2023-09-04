import TestimonialBanner from '@/assets/TestimonialBanner.png';
import TabButton from '@/components/TabButton';
import SectionTitleDescription from '@/components/SectionTitleDescription';
import TestimonialCard from '@/components/TestimonialCard';
import HeroBanner from '@/components/HeroBanner';
import Flower from '@/assets/section-flower.png';
import testImage from '@/assets/Testimonialimg.png';
import videoImage from '@/assets/video.png';
import vectorImg from '@/assets/testimonial_pattern.png';
import { useCallback, useState } from 'react';
import MediaCard from '@/components/MediaCard';
import TextInput from '@/components/InputFields/TextInput';
import UploadFile from '@/components/InputFields/UploadFile';
import CaptchaWithInput from '@/components/InputFields/CaptchaWithInput';
import Checkbox from '@/components/InputFields/Checkbox';
import TestCaptcha from '@/assets/testCaptcha.png';
import Button from '@/components/Button';
import { useFormik } from 'formik';
import { testimonialValidations } from '@/validationSchemas';
import Pagination from '@/components/Pagination';

const tabOne = [
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
];

const tabTwo = [
  [
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
  ],
  [
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
  ],
  [
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
    {
      title: 'Dr. Jean M. Seely',
      desc: 'FRCPC, Section chief of breast imaging,The Ottawa hospital',
      img: videoImage,
    },
  ],
];

const options = [
  {
    label: 'De-addiction / व्यसनमुक्ती (गुटखा, तंबाखू, दारू, सिगारेट इतर',
    value: 1,
  },
  {
    label: 'Eradication of Superstitions / अंधश्रद्धा निर्मूलन',
    value: 2,
  },
  {
    label: 'Family Happiness / कौंटुबिक सौख्य (घटस्फोट, वाद, नातेसंबध)',
    value: 3,
  },
  {
    label: `Respect for Women's / स्री-सन्मान (महिलांना मान-सन्मान मिळू लागला)`,
    value: 4,
  },
  {
    label:
      'Savings of national resources- Water, Electricity, Zero Plastic, Trees/ राष्ट्रीय संपत्ती सवर्धन',
    value: 5,
  },
  {
    label: 'Academic Success/ शेक्षणिक यश',
    value: 6,
  },
  {
    label: 'Career Success/ करियरमधील यश',
    value: 7,
  },
  {
    label: 'Peace of Mind/ मानसिक स्वास्थ्य',
    value: 8,
  },
  {
    label: 'Spiritual Growth/ अध्यात्मिक उन्नती',
    value: 9,
  },
  {
    label: 'Other',
    value: 10,
  },
];

const tabOptions = [
  {
    label: 'Written Testimonial',
    value: 0,
  },
  {
    label: 'Video Testimonials',
    value: 1,
  },
];

const inititalValues = {
  name: '',
  email: '',
  about: '',
  location: '',
  message: '',
  verificationCode: '',
  file: '',
  other: '',
};

const Testimonial = () => {
  const tabs = ['Written Testimonial', 'Video Testimonials'];
  const [pageDataOne, setPageDataOne] = useState(tabOne[0]);
  const [pageDataTwo, setPageDataTwo] = useState(tabTwo[0]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onChangeOfPageOne = (value) => {
    setPageDataOne(tabOne[value]);
  };

  const onChangeOfPageTwo = (value) => {
    setPageDataTwo(tabTwo[value]);
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched, setValues } = useFormik({
    initialValues: inititalValues,
    validationSchema: testimonialValidations,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    let newData = { ...values };
    newData.file = file;
    setValues({ ...newData });
  };

  const handleCheckbox = useCallback((e) => {
    let newData = values;
    newData[e.target.name] = e.target.checked;
    setValues({ ...newData });
  }, []);

  const handleTabChange = (e) => {
    setActiveTab(e);
  };

  return (
    <div className='pt-[140px]'>
      <HeroBanner
        bannerImg={TestimonialBanner}
        bannerTitle='Testimonials'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='relative p-4 md:p-8 lg:p-14 xl:p-20'>
        <div className='flex justify-between items-center max-md:flex-col'>
          <SectionTitleDescription
            className='mx-0'
            align='start'
            image={Flower}
            title='Impact of wisdom'
            description='People are at the heart of everything we do. Their trust in us reflects in these words'
          />
          <div className='flex gap-6'>
            {tabs.map((tab, index) => (
              <TabButton label={tab} activeTab={activeTab} onChange={handleTabClick} key={index} />
            ))}
          </div>
        </div>

        <div className='pt-[87px]'>
          {activeTab === tabs[0] && (
            <Pagination pages={tabOne} pageData={pageDataOne} callback={onChangeOfPageOne}>
              <div className='grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-4 lg:gap-x-6 gap-y-[68px] md:gap-y-16 lg:gap-y-20'>
                {pageDataOne.map((data, index) => {
                  return (
                    <TestimonialCard
                      key={index}
                      testimonialName={data.title}
                      testimonialposition={data.postion}
                      testimonialReview={data.desc}
                      profile={data.img}
                    />
                  );
                })}
              </div>
            </Pagination>
          )}

          {activeTab === tabs[1] && (
            <Pagination pages={tabTwo} pageData={pageDataTwo} callback={onChangeOfPageTwo}>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 md:gap-y-16 lg:gap-y-20'>
                {pageDataTwo.map((data, index) => {
                  return (
                    <MediaCard
                      key={index}
                      cardTitle={data.title}
                      cardDesc={data.desc}
                      cardImage={data.img}
                    />
                  );
                })}
              </div>
            </Pagination>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-[30px] items-center justify-center w-[100%] mt-[30px] bg-[#E2EAF4] px-4 py-10 md:p-14 xl:p-20 max-md:p-[15px]'>
        <span className='text-[#122135] font-semibold text-[32px] tracking-[-0.32px] text-center max-md:text-[22px] max-md:mt-[40px]'>
          Want to Submit Testimonial?
        </span>

        <div className='bg-[white] rounded-[64px] flex p-[4px] border-[1.5px] border-[#0084CB29] gap-[5px]'>
          {tabOptions?.map((e, index) => {
            return activeTab === e.label ? (
              <TabButton
                key={index}
                label={e.label}
                activeTab={activeTab}
                onChange={handleTabChange}
              />
            ) : (
              <span
                key={index}
                onClick={() => handleTabChange(e.label)}
                className='w-fit px-6 py-[14px] transition-all duration-300 cursor-pointer max-md:text-center'
              >
                {e.label}
              </span>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col w-full rounded-[24px] gap-[20px] p-[40px] bg-[white] max-md:w-[100%] '
        >
          <div className='flex gap-[30px] max-md:flex-col'>
            <TextInput
              name='name'
              label='Name'
              error={errors.name}
              placeholder='E.g. Rakesh Jadhav'
              onChange={handleChange}
              required
              value={values.name}
              onBlur={handleBlur}
              touched={touched}
            />
            <TextInput
              name='email'
              label='Email Address'
              error={errors.email}
              placeholder='E.g. Rakesh@mail.com'
              onChange={handleChange}
              required
              value={values.email}
              onBlur={handleBlur}
              touched={touched}
            />
          </div>

          <div className='flex gap-[30px] max-md:flex-col'>
            <TextInput
              name='about'
              label='About '
              error={errors.about}
              placeholder='E.g. Your Information, Designation etc'
              onChange={handleChange}
              required
              value={values.about}
              onBlur={handleBlur}
              touched={touched}
            />
            <TextInput
              name='location'
              label='Location'
              error={errors.location}
              placeholder='Enter here'
              onChange={handleChange}
              required
              value={values.location}
              onBlur={handleBlur}
              touched={touched}
            />
          </div>

          <TextInput
            name='message'
            label='Write Testimonial / Message'
            error={errors.message}
            placeholder='Write here (200 words max)'
            onChange={handleChange}
            required
            value={values.message}
            max={200}
            onBlur={handleBlur}
            touched={touched}
          />

          <div className='flex flex-col xl:flex-row gap-6'>
            {activeTab && activeTab === 'Written Testimonial' ? (
              <UploadFile
                name='file'
                label='Upload Your Image'
                error={errors.file}
                onChange={handleChangeFile}
                required
                imageName={values.file.name}
                touched={touched}
              />
            ) : (
              <UploadFile
                name='file'
                label='Upload Your Video'
                error={errors.file}
                onChange={handleChangeFile}
                required
                imageName={values.file.name}
                touched={touched}
              />
            )}

            <CaptchaWithInput
              name='verificationCode'
              label='Verification Code: '
              error={errors.verificationCode}
              onChange={handleChange}
              value={values.verificationCode}
              image={TestCaptcha}
              placeholder='Enter code'
              onBlur={handleBlur}
              touched={touched}
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <span className='text-[18px] font-semibold mb-[5px]'>
              Please select options from the below.
              <span className='text-[18px] font-normal'>(जीवनविद्येमुळे आयुष्यात झालेले बदल)</span>-
            </span>
            {options &&
              options.map((e, index) => (
                <Checkbox
                  key={index}
                  name={e.value}
                  value={values.e}
                  onChange={handleCheckbox}
                  label={e.label}
                />
              ))}
            <div className='ml-[35px]'>
              <TextInput
                name='other'
                placeholder='Write here (200 words max)'
                onChange={handleChange}
                value={values.other}
                max={200}
              />
            </div>
          </div>
          <Button
            type='submit'
            className='w-[130px] h-[50px] text-center mt-[20px]'
            variant='filled'
          >
            <span className='w-[100%]'>Submit</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Testimonial;
