import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_f8bYWCTh0',
  client_id: 'm2rogeivplk4o2tccvkngrk3c',
  redirect_uri: 'https://d84l1y8p4kdic.cloudfront.net',
  response_type: 'code',
  scope: 'phone openid email',
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
