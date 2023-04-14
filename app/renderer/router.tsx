import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@common/constants/router';
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTER.root} element={<Root />}></Route>
        <Route path={ROUTER.resume} element={<Resume />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default Router;
