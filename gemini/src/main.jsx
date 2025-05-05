import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Import your global styles
import App from './App.jsx';  // Import your main App component
import ContextProvider from './context/context.jsx';  // Import the ContextProvider

// Rendering the app and wrapping it with ContextProvider to make context available throughout the app
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
