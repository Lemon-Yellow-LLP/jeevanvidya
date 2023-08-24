import { cn } from '@/lib/utils';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ variant, className, children, ...props }) => {
  return (
    <Link
      className={cn(
        'flex items-center rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibol ',
        {
          'text-white bg-[#F09444]': variant == 'filled',
          'bg-white text-[#F09444] border-2 border-[#F09444]': variant == 'outline',
        },
        'whitespace-nowrap cursor-pointer outline-none overflow-hidden transition-all duration-500',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default memo(Button);
