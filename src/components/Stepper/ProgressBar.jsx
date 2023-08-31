import React from 'react';

export default function ProgressBar({index, activeStep}) {
  return (
    <div
      className={`${index <= activeStep ? 'bg-[#0084CB]' : 'bg-slate-300'} h-1.5 rounded-md`}
    ></div>
  );
}
