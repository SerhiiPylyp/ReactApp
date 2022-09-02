import {createRoot, Root} from 'react-dom/client';
import './index.css';
import App from './components/App';
import {StrictMode} from "react";

const root: Root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
