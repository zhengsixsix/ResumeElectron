import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
}
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
