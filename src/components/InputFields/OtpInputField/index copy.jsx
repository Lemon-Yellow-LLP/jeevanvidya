import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import OtpInput from 'react-otp-input';
// import otpVerified from '../../assets/icons/otp-verified.svg';
// import otpNotVerified from '../../assets/icons/otp-not-verified.svg';

let currentOtpIndex = 0;
const DISALLOW_CHAR = ['-', '_', '.', '+', 'ArrowUp', 'ArrowDown', 'Unidentified', 'e', 'E'];

const OtpInputField = ({
  label,
  required,
  verified,
  setOTPVerified,
  verifyOTP,
  defaultResendTime,
  hasSentOTPOnce = true,
  error,
}) => {
  const [otp, setOtp] = useState('');
  const [activeOtpIndex, setActiveOtpIndex] = useState(null);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [timer, setTimer] = useState(false);
  const [resendTime, setResendTime] = useState(defaultResendTime || 10);

  const inputRef = useRef(null);

  const handleOnChange = useCallback(
    (e) => {
      const { value } = e.target;
      const newOTP = [...otp];
      newOTP[currentOtpIndex] = value.substring(value.length - 1);

      if (!value) setActiveOtpIndex(currentOtpIndex - 1);
      else setActiveOtpIndex(currentOtpIndex + 1);

      setOtp(newOTP);
      const otpAsString = newOTP.join('');
      if (otpAsString.length >= 6) {
        setInputDisabled(true);
        setActiveOtpIndex(null);
        verifyOTP(otpAsString).then((isVerifed) => {
          setInputDisabled(isVerifed);
        });
        setTimer(false);
      }
    },
    [otp, verifyOTP],
  );

  useEffect(() => {
    let interval = null;
    if (timer) {
      setOTPVerified(null);
      let time = defaultResendTime || 10;
      interval = setInterval(() => {
        time -= 1;
        setResendTime(time);

        if (time <= 0) {
          clearInterval(interval);
          setTimer(false);
        }
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [verified, timer, setOTPVerified, defaultResendTime]);

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true });
  }, [activeOtpIndex]);

  const handleKeyDown = useCallback((e, index) => {
    currentOtpIndex = index;
    if (e.key === 'Backspace') setActiveOtpIndex(currentOtpIndex - 1);
    if (e.key === 'Enter') setActiveOtpIndex(currentOtpIndex + 1);
  }, []);

  const inputClasses = useMemo(() => {
    if (!hasSentOTPOnce) return 'border-[#0084CB29] border-[2px]';
    if (hasSentOTPOnce && !error) return 'border-[#0084CB29] border-[2px]';
    if (error && !verified) return 'border-[#DE3400] border-[2px]';
    if (verified) return 'border-[#0084CB29] border-[2px]';
  }, [verified, hasSentOTPOnce]);

  return (
    <div className='otp-container'>
      <span className='flex gap-0.5 items-center text-[#122135CC] text-[14px] font-normal'>
        {label}
        {required && <span className='text-primary-red text-sm'>*</span>}
      </span>
      <div className='flex gap-2 mt-1'>
        {/* {otp.map((_, index) => (
          <input
            autoComplete='one-time-code'
            disabled={inputDisabled}
            ref={index === activeOtpIndex ? inputRef : null}
            key={index}
            className={`
              w-12 h-12 bg-transparent outline-none text-center text-base font-normal text-primary-black transition spin-button-none rounded-lg hidearrow
              ${inputClasses}
            `}
            onChange={handleOnChange}
            onKeyDown={(e) => {
              if (DISALLOW_CHAR.includes(e.key)) {
                e.preventDefault();
                return;
              }
              handleKeyDown(e, index);
            }}
            value={otp[index]}
            pattern='\d*'
            min='0'
            onInput={(e) => {
              if (!e.currentTarget.validity.valid) e.currentTarget.value = '';
            }}
            onPaste={(e) => {
              e.preventDefault();
              const text = (e.originalEvent || e).clipboardData.getData('text/plain').split('');
              const copiedOTP = new Array(5).fill('').map((_, i) => text[i] || '');
              setOtp(copiedOTP);
              if (text.length === otp.length) {
                setActiveOtpIndex(null);
                verifyOTP(text.join(''));
              }
            }}
          />
        ))} */}

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className='mt-3 flex justify-between items-center'>
        <div className='flex gap-0.5'>
          {verified === null && timer && (
            <span className='text-primary-red text-xs leading-[18px]'>0:{resendTime}s</span>
          )}
          {verified === true && !timer && (
            <span className='flex text-primary-black text-xs leading-[18px]'>
              OTP Verified
              {/* <img src={otpVerified} alt='Otp Verified' role='presentation' /> */}
            </span>
          )}
          {verified === false && !timer && error && (
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
