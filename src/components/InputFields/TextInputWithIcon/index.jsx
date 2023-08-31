import React from 'react';
import WarningIcon from '@/assets/WarningIcon.jsx';
import { memo } from 'react';

const TextInputWithIcon = ({
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
  icon,
}) => {
  return (
    <div className='flex flex-col gap-1 w-[100%]'>
      <label
        htmlFor={name}
        className='flex gap-0.5 items-center text-[#122135CC] text-[14px] font-normal'
      >
        {label}
        {required && <span className='text-primary-red text-sm ml-[2px]'>*</span>}
      </label>

      <div
        className={`input-container px-4 py-3 border-[2px] rounded-lg flex gap-1
          transition-all ease-out duration-150 focus:outline-none outline-none
        ${error && touched && touched[name] ? 'border-[#DE3400]' : 'border-[#0084CB29]'}
        ${disabled ? 'bg-[#EEEEEE] pointer-events-none cursor-not-allowed' : ''}
        `}
      >
        {icon}

        <input
          className={`w-full focus:outline-none`}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={onChange}
          max={max}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
        />
        {error && touched && touched[name] && <WarningIcon />}
      </div>

      {displayError ? (
        <span
          className='text-xs text-[#DE3400]'
          dangerouslySetInnerHTML={{
            __html: error && touched && touched[name] ? error : String.fromCharCode(160),
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default memo(TextInputWithIcon);
