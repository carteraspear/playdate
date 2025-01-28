import './App.css';
import { useAuth } from 'react-oidc-context';

function Playdate() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = 'm2rogeivplk4o2tccvkngrk3c';
    const logoutUri = 'https://us-east-2f8bywcth0.auth.us-east-2.amazoncognito.com'; 
    const cognitoDomain = 'https://us-east-2f8bywcth0.auth.us-east-2.amazoncognito.com'; 
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const signInRedirect = () => {
    const redirectUri = 'https://us-east-2f8bywcth0.auth.us-east-2.amazoncognito.com';
    auth.signinRedirect({ redirectUri });
  };

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