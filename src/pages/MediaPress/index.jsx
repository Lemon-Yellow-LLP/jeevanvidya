import { useState } from 'react';

export default function MediaPress() {
  const tabs = ['News & Articles', 'Videos', 'Newspapers'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(tab);
  };

  return (
    <section className='pt-[164px]'>
      <div className='tabsection flex gap-6'>
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              className={`py-[14px] whitespace-nowrap md:py-[14px] px-6 rounded-[64px] bg-[#f5f5f5] border-[1.5px] border-[#0084cb29] ${
                tab === activeTab ? 'active-tab' : ''
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {activeTab === tabs[0] && (
        <div>
          <div className='text-center'>1</div>
        </div>
      )}
      {activeTab === tabs[1] && (
        <div>
          <div>2</div>
        </div>
      )}

      {activeTab === tabs[2] && (
        <div>
          <div>3</div>
        </div>
      )}
    </section>
  );
}
