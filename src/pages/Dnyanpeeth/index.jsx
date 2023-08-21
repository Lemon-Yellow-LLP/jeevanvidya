import HeroBanner from '@/components/HeroBanner';
import DnyanpeethBanner from '@/assets/Dnyanpeeth-banner.png';
import MediaCard from '@/components/MediaCard';
import TestImage from '@/assets/Dnyanpeeth-banner.png';

const feedbackData = [
  {
    title: 'VideoOne',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
  {
    title: 'VideoTwo',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
  {
    title: 'VideoThree',
    desc: 'FRCPC, Section chief of breast imaging, The Ottawa hospital',
    img: TestImage,
  },
];

const Dnyanpeeth = () => {
  return (
    <div>
      <HeroBanner
        bannerImg={DnyanpeethBanner}
        bannerTitle='Dnyanpeeth'
        bannerDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
      />

      <div className='p-20'>
        <img src='' alt='' />
        <h2 className='text-center text-[32px] font-semibold'>Feedbacks & Videos</h2>
        <p className='text-center mt-4 font-normal opacity-80'>
          We take immense pride in the accolades and acknowledgments we have received for our
          outstanding achievements and contributions.
        </p>
        <div className='flex gap-6 mt-8'>
          {feedbackData.map((data, index) => (
            <MediaCard cardTitle={data.title} cardDesc={data.desc} key={index}>
              <img src={data.img} alt='' className='rounded-xl' />
            </MediaCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dnyanpeeth;
