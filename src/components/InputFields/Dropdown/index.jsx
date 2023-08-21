/* eslint-disable react/display-name */
import { useState, useEffect, useRef, useCallback, memo } from 'react';
import IconArrowDown from '@/assets/arrow-down.jsx';
import IconTick from '@/assets/tick.jsx';

const Dropdown = memo(
  ({
    defaultSelected,
    placeholder,
    label,
    required,
    options,
    onChange,
    optionsMaxHeight,
    disabled,
    showIcon = true,
    showError = true,
  }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(() =>
      options?.find((option) => defaultSelected === option.value),
    );

    useEffect(() => {
      const option = options.find((option) => option.value === defaultSelected);
      setSelectedOption(option);
    }, [defaultSelected, options]);

    const containerRef = useRef(null);

    const handleSelect = useCallback(
      (option) => {
        setSelectedOption(option);
        setShowDropDown(false);
        onChange && onChange(option.value);
      },
      [onChange],
    );

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, []);

    return (
      <div ref={containerRef} className='dropdown relative'>
        <span className='flex gap-0.5 items-center text-[#122135CC] text-[14px] font-normal'>
          {label}
          {required && <span className='text-primary-red text-sm'>*</span>}
        </span>
        <button
          disabled={disabled}
          title='Show options'
          type='button'
          onClick={() => {
            setShowDropDown(!showDropDown);
          }}
          className={`${
            selectedOption ? 'text-primary-black' : 'text-[#a19f9f]'
          } w-full flex justify-between gap-1 py-3 px-4 rounded-lg mt-1 border-[#0084CB29] border-[2px]`}
        >
          {selectedOption ? selectedOption.label : placeholder || 'Click me'} <IconArrowDown />
        </button>
        {showDropDown && (
          <div
            style={{
              maxHeight: optionsMaxHeight ?? 160,
            }}
            className='rounded-lg bg-white shadow-secondary p-2 mt-2 absolute top-100 w-full overflow-y-auto z-20 border border-stroke'
          >
            {options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`${
                  option.value === selectedOption?.value
                    ? 'text-[#0084CB]'
                    : 'text-primary-black hover:bg-grey-white'
                } 
              ${
                index ? 'border-t border-stroke' : 'border-none'
              } py-3 gap-2 px-4 flex justify-between w-full overflow-y-auto transition-colors duration-300 ease-out`}
              >
                {option.label}
                {showIcon && selectedOption?.value === option.value ? <IconTick /> : <div></div>}
              </button>
            ))}
          </div>
        )}
        {showError ? (
          <span className='text-sm text-primary-red mt-1'>{false || String.fromCharCode(160)}</span>
        ) : (
          ''
        )}
      </div>
    );
  },
);

export default Dropdown;
