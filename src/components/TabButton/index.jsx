import React, { memo } from 'react';

function TabButton({ activeTab, label, onChange }) {
  return (
    <div
      className={` ${
        activeTab === label
          ? 'bg-secondary-2 border-primary-3 backdrop-filter'
          : 'border-secondary-2 bg-accent-white'
      } w-fit text-base font-medium px-6 py-[14px] border-[1.5px] rounded-[64px] transition-all duration-300 cursor-pointer text-center`}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
}

export default memo(TabButton);
