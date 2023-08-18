import React from 'react';

function TabButton({activeTab, label, onChange }) {
  console.log(activeTab);
  console.log(label);
  return (
    <div
      className={` ${
        activeTab === label ? 'bg-[#0084cb28]' : null
      } w-fit px-6 py-[14px] border-[#0084cb7a] border-[1.5px] rounded-[64px] transition-all duration-300`}
      onClick={() => onChange(label)}
    >
      {label}
    </div>
  );
}

export default TabButton;
