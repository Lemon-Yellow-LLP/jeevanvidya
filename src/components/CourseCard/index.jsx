import Button from '../Button';
import forwardArrow from '@/assets/learnmore.svg';

const CourseCard = () => {
  return (
    <div className='p-6 w-[302px] bg-[#F5F5F5]'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <span className='text-base font-normal text-[#0084CB]'>Bicholim, Goa</span>
          <span className='text-xl font-semibold'>5 Aug 2023 (04:00 PM)</span>
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col'>
            <span className='text-sm font-normal text-[#122135cc]'>Seat available</span>
            <span className='text-base font-normal text-[#122135]'>219/250</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-normal text-[#122135cc]'>Contact Number</span>
            <span className='text-base font-normal text-[#122135]'>9922497333</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-normal text-[#122135cc]'>Donation</span>
          <span className='text-base text-[#122135]'>₹ 1500</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-normal text-[#122135cc]'>Address</span>
          <span className='text-base text-[#122135]'>Shetye Hall, Sonar Peth, Bicholim, Goa</span>
        </div>

        <Button variant='outline' className='group w-[254px] justify-center'>
          Register Now
          <img
            src={forwardArrow}
            alt='forwardArrow'
            className='ml-2 md:opacity-0 md:group-hover:opacity-100 md:group-hover:pl-3 transform transition-all duration-300'
          />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
