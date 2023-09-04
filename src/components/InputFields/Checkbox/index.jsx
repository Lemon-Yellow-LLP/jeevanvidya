import { memo } from 'react';

const Checkbox = ({ name, value, onChange, label }) => {
  return (
    <div className='flex items-center gap-[20px]'>
      <input
        name={name}
        type='checkbox'
        onChange={onChange}
        checked={value}
        className='min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] accent-[#0084CB] border border-[2px]'
      />
      <span className='text-[#122135cc]'>{label}</span>
    </div>
  );
};

export default memo(Checkbox);
