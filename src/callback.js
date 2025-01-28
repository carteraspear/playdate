import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

function Callback() {
  const auth = useAuth();

  useEffect(() => {
    auth.signinRedirectCallback().then(() => {
      // Clear the URL parameters after handling the callback
      window.history.replaceState({}, document.title, window.location.pathname);
      // Redirect to the main app
      window.location.href = '/';
    }).catch((error) => {
      console.error('Error during callback handling:', error);
    });
  }, [auth]);

  return <div>Loading...</div>;
}

export default Callback;