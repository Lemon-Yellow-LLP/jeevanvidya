import React, { memo } from 'react';

function UploadFile({
  label,
  name,
  error,
  displayError = true,
  onChange,
  imageName,
  required,
  touched,
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
        ${error && touched && touched[name] ? 'border-[#DE3400]' : 'border-[#0084CB29]'}
        ${disabled ? 'bg-[#EEEEEE] pointer-events-none cursor-not-allowed' : ''}`}
      >
        <input
          className={`hidden`}
          id='fileInput'
          type='file'
          name={name}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />

        <span className='selected-file-name text-[#a19f9f] cursor-default'>
          {imageName ? imageName : ''}
        </span>

        <label htmlFor='fileInput' className='text-[#F09444] font-semibold cursor-pointer'>
          UPLOAD
        </label>
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
}

export default memo(UploadFile);
