import { cva } from 'class-variance-authority';

export const styles = cva(
  'flex items-center gap-2 text-lg md:text-base text-muted-foreground hover:text-foreground transition-colors',
  {
    variants: {
      active: {
        true: 'font-semibold text-primary',
        false: '',
      },
    },

    defaultVariants: {
      active: false,
    },
  },
);
