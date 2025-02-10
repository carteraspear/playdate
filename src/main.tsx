import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-oidc-context';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_XohcmASr2',
  client_id: '39n6eqjmmo691695nelad9bbt',
  redirect_uri: 'https://main.d202kf3wc8hl26.amplifyapp.com/', // Replace with your actual redirect URI
  response_type: 'code',
  scope: 'aws.cognito.signin.user.admin email openid phone profile',
};

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);