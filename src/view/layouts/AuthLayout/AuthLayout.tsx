import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="w-full h-full lg:grid lg:min-h-[100dvh] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <Outlet />
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-full">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        image
      </div>
    </div>
  );
}
