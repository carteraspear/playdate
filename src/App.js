import './App.css';
import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

function Playdate() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = 'm2rogeivplk4o2tccvkngrk3c';
    const logoutUri = 'https://main.d3vjsffdail7l2.amplifyapp.com/'; 
    const cognitoDomain = 'https://us-east-2f8bywcth0.auth.us-east-2.amazoncognito.com'; 
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const signInRedirect = () => {
    const redirectUri = 'https://main.d3vjsffdail7l2.amplifyapp.com/';
    auth.signinRedirect({ redirectUri });
  };

  useEffect(() => {
    // Handle the redirect callback if the user is returning from the authentication server
    if (window.location.href.includes('code=') || window.location.href.includes('id_token=')) {
      auth.signinRedirectCallback().then(() => {
        // Clear the URL parameters after handling the callback
        window.history.replaceState({}, document.title, window.location.pathname);
      });
    }
  }, [auth]);

  if (auth.isLoading) {
    return <div>loading...</div>;
  }

  if (auth.error) {
    return <div>Error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <h1>playdateplaydateplaydate</h1>
        <p>hello  {auth.user?.profile.email}!</p>
        <p>sign in worked</p>
        <button onClick={() => auth.removeUser()}>sign out</button>
        <button>this button should appear if auth successfully redirected </button> 
      </div>
    );
  }

  return (
    <div>
      <h1>main sign in page here</h1>
      <button onClick={signInRedirect}>sign in</button>
      <button onClick={signOutRedirect}>sign out</button>
    </div>
  );
}

export default Playdate;