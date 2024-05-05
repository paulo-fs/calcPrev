import { cn } from 'src/shared/utils/cn';
import { styles as s } from './NavigationItem.styles';
import { NavigationItemProps } from './NavigationItem.types';

export function NavigationItem({
  children,
  icon,
  className,
  isCurrentPage,
  ...props
}: NavigationItemProps) {
  return (
    <a className={cn(s({ active: isCurrentPage }), className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
