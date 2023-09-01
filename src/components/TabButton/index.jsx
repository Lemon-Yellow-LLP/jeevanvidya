import React, { memo } from 'react';

function TabButton({ activeTab, label, onChange }) {
  return (
    <div
      className={` ${
        activeTab === label ? 'bg-[#0084cb28]' : null
      } w-fit px-4 py-2 lg:px-6 lg:py-[14px] text-sm lg:text-base border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300 cursor-pointer text-center`}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
}

export default memo(TabButton);
