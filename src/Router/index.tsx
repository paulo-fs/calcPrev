import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { AuthLayout } from 'src/view/layouts';
import { Login } from 'src/view/pages/public/Login/Login';
import { Register } from 'src/view/pages/public/Register/Register';

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
        <Route element={<AuthGuard isPrivate={true} />}>
          {/* private routes */}
          <Route path="/" element={<div>HOME</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
