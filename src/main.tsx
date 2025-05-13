// main.tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // REQUIRED for navbar toggler
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);