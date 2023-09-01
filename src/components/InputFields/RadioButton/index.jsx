import { cn } from '@/lib/utils';
import { memo } from 'react';

const RadioButton = ({ name, value, checked, onChange, className }) => {
  return (
    <div className={cn('flex flex-row-reverse gap-2 lg:gap-4', className)}>
      <label
        className='text-base lg:text-lg not-italic font-normal text-foreground-1'
        htmlFor={name}
      >
        {name}
      </label>
      <input
        name={name}
        type='radio'
        value={value}
        onChange={onChange}
        checked={checked}
        className=' w-[24px] h-[24px] accent-[#0084CB] border-[2px]'
      />
    </div>
  );
};

export default memo(RadioButton);
