import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { AuthLayout, SignedLayout } from 'src/view/layouts';
import { Login } from 'src/view/pages/public/Login/Login';
import { Register } from 'src/view/pages/public/Register/Register';
import { headerNavigationPaths } from 'src/shared/constants/headerNavigationPaths';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        {/* private routes */}
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<SignedLayout />}>
            {headerNavigationPaths.map((path) => (
              <Route
                path={path.path}
                element={<div>calc</div>}
                key={path.path}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
