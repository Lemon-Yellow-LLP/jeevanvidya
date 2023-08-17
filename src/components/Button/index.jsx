import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ register, children, ...props }) => {
  console.log(props);
  return (
    <Link
      className={`group w-[153px] flex items-center rounded-lg px-6 py-[9px] md:py-4 ${
        register ? 'text-white bg-[#F09444]' : 'bg-white text-[#F09444] border-2 border-[#F09444]'
      } whitespace-nowrap cursor-pointer outline-none overflow-hidden transition-all duration-500 md:hover:w-[170px]`}
    >
      {children}
    </Link>
  );
};

export default Button;
