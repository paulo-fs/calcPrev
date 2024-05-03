import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { AuthLayout } from 'src/view/layouts';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth guard */}
        <Route element={<AuthGuard isPrivate={false} />}>
          {/* public routes */}
          {/* auth layout */}
          <Route element={<AuthLayout />}>
            {/* login */}
            <Route path="/login" element={<div>login</div>} />
            {/* register */}
            <Route path="/register" element={<div>register</div>} />
          </Route>

          <Route element={<AuthGuard isPrivate={true} />}>
            {/* private routes */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
