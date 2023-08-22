import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ register, children, inputClasses, ...props }) => {
  return (
    <Link
      className={`group flex items-center rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibol ${inputClasses} ${
        register ? 'text-white bg-[#F09444]' : 'bg-white text-[#F09444] border-2 border-[#F09444]'
      } whitespace-nowrap cursor-pointer outline-none overflow-hidden transition-all duration-500`}
    >
      {children}
    </Link>
  );
};

export default memo(Button);
