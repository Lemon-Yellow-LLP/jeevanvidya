import { useState, useMemo, memo, useEffect } from 'react';
import OtpInput from 'react-otp-input';

const OtpInputField = ({
  label,
  required,
  verified,
  hasSentOTPOnce = true,
  error,
  touched,
  onBlur,
  handleInput,
}) => {
  const [otp, setOtp] = useState('');

  useEffect(() => {
    handleInput(otp);
  }, [otp]);

  const inputClasses = () => {
    if (!hasSentOTPOnce) return 'otpInput border-[#0084CB29] border-[2px]';
    if (hasSentOTPOnce && !error) return 'otpInput border-[#0084CB29] border-[2px]';
    if (error && touched) return 'otpInput border-[#DE3400] border-[2px]';
    if (verified) return 'otpInput border-[#0084CB29] border-[2px]';
    return 'otpInput border-[#0084CB29] border-[2px]';
  };

  return (
    <div className='otp-container'>
      <span className='flex gap-0.5 items-center text-[#122135CC] text-[14px] font-normal'>
        {label}
        {required && <span className='text-primary-red text-sm'>*</span>}
      </span>
      {/* <div className='flex gap-2 mt-1'> */}
      <OtpInput
        value={otp}
        onChange={setOtp}
        onBlur={onBlur}
        numInputs={6}
        renderSeparator={<span></span>}
        inputType='tel'
        renderInput={(props) => <input {...props} />}
        containerStyle='flex gap-1 md:gap-2 mt-[5px]'
        inputStyle={inputClasses()}
      />
      {/* </div> */}
      <div className='mt-3 flex justify-between items-center'>
        <div className='flex gap-0.5'>
          {verified === null && (
            <span className='text-[#DE3400] text-xs leading-[18px]'>0:{resendTime}s</span>
          )}
          {verified === true && (
            <span className='flex text-green text-xs leading-[18px]'>
              OTP Verified
              {/* <img src={otpVerified} alt='Otp Verified' role='presentation' /> */}
            </span>
          )}
          {!verified && error && touched && (
            <span className='flex text-[#DE3400] text-xs leading-[18px]'>
              Enter correct OTP
              {/* <img src={otpNotVerified} alt='Otp Verified' role='presentation' /> */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpInputField;
