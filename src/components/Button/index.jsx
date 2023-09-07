import { cn } from '@/lib/utils';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ type, variant, className, children, to, ...props }) => {
  return (
    <Link
      className={cn(
        'flex items-center rounded-lg px-6 py-[9px] md:py-4 text-sm font-normal md:text-base md:font-semibold',
        {
          'text-white bg-accent-blue': variant == 'filled',
          'bg-white text-accent-blue border-2 border-accent-blue': variant == 'outline',
        },
        'whitespace-nowrap cursor-pointer outline-none overflow-hidden transition-all duration-500',
        className,
      )}
      to={to}
    >
      {children}
    </Link>
  );
};

export default memo(Button);
