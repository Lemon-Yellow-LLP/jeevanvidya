import React, { memo } from 'react';

function CaptchaWithInput({
  name,
  label,
  error,
  onChange,
  value,
  image,
  disabled,
  displayError = true,
  placeholder,
  required = true,
  touched,
  onBlur,
}) {
  return (
    <div className='flex flex-col gap-1 w-[100%]'>
      <label
        htmlFor={name}
        className='flex gap-0.5 items-center text-[#000000] text-[16px] font-normal'
      >
        {label}
        {required && <span className='text-primary-red text-sm ml-[2px]'>*</span>}
      </label>

      <div className='flex justify-between gap-[20px] w-[100%] max-md:flex-col'>
        <img src={image} alt='' className='h-[51.2px]' />
        <div className='flex flex-col gap-1 w-[100%]'>
          <input
            className={`input-container px-4 py-3 border-[2px] rounded-lg flex gap-1
      transition-all ease-out duration-150 focus:outline-none outline-none
      ${error && touched && touched.name ? 'border-[#DE3400]' : 'border-[#0084CB29]'}
      ${disabled ? 'bg-[#EEEEEE] pointer-events-none cursor-not-allowed' : ''}
      `}
            placeholder={placeholder}
            id={name}
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
            onBlur={onBlur}
          />

          {displayError ? (
            <span
              className='text-xs text-[#DE3400]'
              dangerouslySetInnerHTML={{
                __html: error && touched && touched.name ? error : String.fromCharCode(160),
              }}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(CaptchaWithInput);
