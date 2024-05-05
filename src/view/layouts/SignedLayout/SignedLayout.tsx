import { Outlet } from 'react-router-dom';

import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';

export function SignedLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeaderMenu />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
