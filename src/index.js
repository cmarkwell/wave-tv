import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

render((
  
  <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"
    />
    <script>{injectGA()}</script>
       
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
