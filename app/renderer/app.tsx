import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';

function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
