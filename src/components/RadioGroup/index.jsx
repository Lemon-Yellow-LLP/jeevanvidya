import React, { useState } from 'react';
import RadioButton from '../InputFields/RadioButton';

function RadioGroup({
  options,
  label,
  name,
  error,
  touched,
  displayError = true,
  onChange,
  placeholder,
  required,
  value,
  disabled,
  max,
  onBlur,
  type,
}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='flex flex-col flex-1 gap-1 lg:gap-4'>
      <label
        htmlFor={label}
        className='flex gap-0.5 items-center text-[#122135CC] text-[14px] font-normal'
      >
        {label}
        {required && <span className='text-primary-red text-sm ml-[2px]'>*</span>}
      </label>
      <div className='flex gap-3 lg:gap-10'>
        {options.map((option, i) => (
          <RadioButton
            key={i}
            name={option.name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;
