import { Calculator, Menu } from 'lucide-react';
import { headerNavigationPaths } from 'src/shared/constants/headerNavigationPaths';
import { Button, Sheet, SheetContent, SheetTrigger } from 'src/view/components';
import { NavigationItem } from '../NavigationItem/NavigationItem';

export function HeaderNavigation() {
  return (
    <>
      {/* desktop menu */}
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 bg-white/80 bg-blur-sm">
        <NavigationItem
          href="/"
          icon={<Calculator className="h-6 w-6 text-primary" />}
        >
          <span className="sr-only">Cálculo Previdenciário</span>
        </NavigationItem>
        {headerNavigationPaths.map((path) => (
          <NavigationItem href={path.path} key={path.path}>
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
          <nav className="grid gap-6 text-lg font-medium bg-white/80 bg-blur-sm">
            {headerNavigationPaths.map((path) => (
              <NavigationItem href={path.path} key={path.path}>
                {path.label}
              </NavigationItem>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
