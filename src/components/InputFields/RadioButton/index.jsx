import { memo } from 'react';

const RadioButton = ({ name, value, onChange }) => {
  return (
    <input
      name={name}
      type='radio'
      onChange={onChange}
      checked={value}
      className=' w-[24px] h-[24px] accent-[#0084CB] border border-[2px]'
    />
  );
};

export default memo(RadioButton);
