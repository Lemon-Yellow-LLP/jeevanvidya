import Button from '@/components/Button';
import RegisterArrow from '@/assets/arrowforward.svg';
import LearnMore from '@/assets/learnmore.svg';

export default function Home() {
  return (
    <div className='w-full flex items-center justify-center pt-3 gap-2 md:gap-4'>
      <Button register={true} inputClasses='w-[153px] md:hover:w-[170px]'>
        Register Now
        <img
          src={RegisterArrow}
          className='ml-2 md:opacity-0 md:group-hover:opacity-100'
          alt='Register Now'
        />
      </Button>
      <Button inputClasses='w-[153px] md:hover:w-[170px]'>
        Learn more
        <img
          src={LearnMore}
          className='ml-2 md:opacity-0 md:group-hover:opacity-100'
          alt='Learn More'
        />
      </Button>
    </div>
  );
}
