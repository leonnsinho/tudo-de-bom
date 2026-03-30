import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW, preloadCriticalResources, measurePerformance } from './utils/performance';

// Preload critical resources as early as possible
preloadCriticalResources();

// Register service worker for PWA functionality
registerSW();

// Start performance monitoring
if (import.meta.env.DEV) {
  measurePerformance();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);