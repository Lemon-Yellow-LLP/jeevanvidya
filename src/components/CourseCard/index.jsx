import Button from '../Button';
import forwardArrow from '@/assets/learnmore.svg';
import PropTypes from 'prop-types';
import { memo } from 'react';

const CourseCard = memo(
  ({ courselocation, coursedate, courseseats, contactNumber, donation, address }) => {
    return (
      <div className='p-6 w-[302px] bg-[#F5F5F5] md:hover:shadow-2xl rounded-2xl border border-[#0084cb29]'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <span className='text-base font-normal text-[#0084CB]'>{courselocation}</span>
            <span className='text-xl font-semibold'>{coursedate}</span>
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <span className='text-sm font-normal text-[#122135cc]'>Seat available</span>
              <span className='text-base font-normal text-[#122135]'>{courseseats}/250</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-sm font-normal text-[#122135cc]'>Contact Number</span>
              <span className='text-base font-normal text-[#122135]'>{contactNumber}</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-normal text-[#122135cc]'>Donation</span>
            <span className='text-base text-[#122135]'>₹ {donation}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-normal text-[#122135cc]'>Address</span>
            <span className='text-base text-[#122135]'>{address}</span>
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
  },
);

export default CourseCard;

CourseCard.propTypes = {
  courselocation: PropTypes.string,
  coursedate: PropTypes.string,
  courseseats: PropTypes.number,
  contactNumber: PropTypes.number,
  donation: PropTypes.number,
  address: PropTypes.string,
};
