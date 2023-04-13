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
const Dom = document.getElementById('root');
Dom?.parentNode && ReactDOM.createRoot(Dom).render(<App />);
