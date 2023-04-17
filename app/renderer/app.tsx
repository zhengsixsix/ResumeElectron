import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
