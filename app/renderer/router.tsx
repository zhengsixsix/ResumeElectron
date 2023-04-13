import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Root from './container/root';
import Resume from './container/resume';
function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default Router;
