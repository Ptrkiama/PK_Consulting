import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { inject } from '@vercel/analytics';

inject(); // Start Vercel Analytics

createRoot(document.getElementById("root")!).render(<App />);

