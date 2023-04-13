import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Root from './container/root';
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
      </Routes>
      <Navigate to="/" />
    </HashRouter>
  );
}
export default Router;
