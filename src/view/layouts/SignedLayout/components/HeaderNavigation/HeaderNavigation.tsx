import { Calculator, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { headerNavigationPaths } from 'src/shared/constants/headerNavigationPaths';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { Button, Sheet, SheetContent, SheetTrigger } from 'src/view/components';

export function HeaderNavigation() {
  const currentPath = useLocation().pathname;

  return (
    <>
      {/* desktop menu */}
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavigationItem
          href="/"
          isCurrentPage={false}
          icon={<Calculator className="h-6 w-6" />}
        >
          <span className="sr-only">Cálculo Previdenciário</span>
        </NavigationItem>
        {headerNavigationPaths.map((path) => (
          <NavigationItem
            href={path.path}
            isCurrentPage={path.path === currentPath}
            key={path.path}
          >
            {path.label}
          </NavigationItem>
        ))}
      </nav>
      {/* mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            {headerNavigationPaths.map((path) => (
              <NavigationItem
                href={path.path}
                isCurrentPage={path.path === currentPath}
                key={path.path}
              >
                {path.label}
              </NavigationItem>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
