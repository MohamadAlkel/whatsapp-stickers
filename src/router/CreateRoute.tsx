import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../root/common/NotFound';

const MainPageRoute = React.lazy(() => import('./components/MainPageRoute'));

const CreateRoute: FC = (): ReactElement<void> => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute showHome />
          </React.Suspense>
        }
      />
      <Route
        path="/fun"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute showFun />
          </React.Suspense>
        }
      />
      <Route
        path="/romance"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute showRomance />
          </React.Suspense>
        }
      />
      <Route
        path="/pin"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute showPin />
          </React.Suspense>
        }
      />
      <Route
        path="/thanks"
        element={
          <React.Suspense fallback={<p>Loading....</p>}>
            <MainPageRoute showThanks />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreateRoute;
