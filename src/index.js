import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-w7p860irgphvuuzq.us.auth0.com"
    clientId="6MZxAt94qqJYfqeypbHHQqnunOkwNf4G"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>

);