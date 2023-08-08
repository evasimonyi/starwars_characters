import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);