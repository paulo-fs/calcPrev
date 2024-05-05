export interface NavigationItemProps extends React.ComponentProps<'a'> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  isCurrentPage: boolean;
}
