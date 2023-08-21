import React from 'react';

export default function UploadImage({
  label,
  name,
  error,
  touched,
  inputClasses,
  displayError = true,
  message,
  onChange,
  imageName,
  required,
  src,
  disabled,
}) {
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
        className={`input-container justify-between items-center px-4 py-3 border-[2px] rounded-lg flex gap-1
        transition-all ease-out duration-150
        ${
          error && touched
            ? 'border-primary-red shadow-primary shadow-primary-red'
            : 'border-light-grey'
        }
        ${!error && !touched && 'border-[#0084CB29]'}
        ${disabled ? 'bg-[#EEEEEE] pointer-events-none cursor-not-allowed' : ''}`}
      >
        <input
          className={`hidden`}
          id='fileInput'
          name={name}
          onChange={(e) => onChange(e)}
          type='file'
          src={src}
          disabled={disabled}
        />

        <span className='selected-file-name text-[#a19f9f] cursor-default'>
          {imageName ? imageName : 'bellow 20 kb'}
        </span>

        <label htmlFor='fileInput' className='text-[#F09444] font-semibold cursor-pointer'>
          UPLOAD
        </label>
      </div>

      {displayError ? (
        <span
          className='text-xs text-primary-red'
          dangerouslySetInnerHTML={{
            __html: error && touched ? error : String.fromCharCode(160),
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
}
