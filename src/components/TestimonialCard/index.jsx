import React from 'react';

const TestimonialCard = ({
  testimonialName,
  testimonialposition,
  testimonialReview,
  profile,
  children,
  inputClasses,
  ...props
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-end p-6 h-[366px] bg-[#f5f5f5] rounded-2xl border border-[#E2EAF4] ${inputClasses}`}
    >
      <img src={profile} className='w-[120px] h-[120px] absolute -top-14 z-50' alt='Testimonial' />
      <div className='flex flex-col items-center gap-8 text-center'>
        <div className=''>
          <h4 className='text-xl font-semibold'>{testimonialName}</h4>
          <p className='text-base font-normal'>{testimonialposition}</p>
        </div>
        <p className='text-base font-normal'>{testimonialReview}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
