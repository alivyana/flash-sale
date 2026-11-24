import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FlashSaleApp from './FlashSaleApp.jsx';
import './flash-sale.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashSaleApp />
  </StrictMode>,
);
