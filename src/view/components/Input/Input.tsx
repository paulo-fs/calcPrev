import * as React from 'react';

import { cn } from 'utils/cn';
import { inputVariants } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
