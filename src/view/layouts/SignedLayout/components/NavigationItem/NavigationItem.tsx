import { cn } from 'src/shared/utils/cn';
import { styles as s } from './NavigationItem.styles';
import { NavigationItemProps } from './NavigationItem.types';
import { NavLink } from 'react-router-dom';

export function NavigationItem({
  children,
  icon,
  className,
  href,
  ...props
}: NavigationItemProps) {
  return (
    <NavLink to={href || ''} end>
      {({ isActive }) => (
        <a className={cn(s({ active: isActive }), className)} {...props}>
          {icon}
          {children}
        </a>
      )}
    </NavLink>
  );
}
