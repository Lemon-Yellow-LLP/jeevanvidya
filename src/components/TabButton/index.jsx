import React, { memo } from 'react';

function TabButton({ activeTab, label, onChange }) {
  return (
    <div
      className={` ${
        activeTab === label ? 'bg-[#0084cb28]' : null
      } w-fit px-6 py-[14px] border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300 cursor-pointer`}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
}

export default memo(TabButton);
