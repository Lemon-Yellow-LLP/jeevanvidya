import React, { memo } from 'react';

function TabButton({ activeTab, label, onChange, className }) {
  return (
    <div
      className={` ${
        activeTab === label
          ? 'bg-secondary-2 border-primary-3'
          : 'border-secondary-2 bg-accent-white'
      } w-fit xl:text-base font-medium  px-4 py-2 xl:px-6 xl:py-[14px] border-[1.5px] rounded-[64px] transition-all duration-300 cursor-pointer text-center backdrop-blur-md ${
        className ? className : 'text-sm'
      }`}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
}

export default memo(TabButton);
