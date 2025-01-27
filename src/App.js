import './App.css';
import { useAuth } from 'react-oidc-context';

function playdate() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = 'clientidhere';
    const logoutUri = 'thisFieldHasBeenAVarietyOfThings'; 
    const cognitoDomain = 'myactualcognitodomainhere'; 
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>loading...</div>;
  }

  if (auth.error) {
    return <div>Error... {auth.error.message}</div>;
  }
const signInRedirect = () => {
  const redirectUri = 'thisFieldHasBeenAVarietyOfThings';
  auth.signinRedirect({ redirectUri });
};

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
      <button onClick={() => auth.signinRedirect()}>sign in</button>
      <button onClick={() => signOutRedirect()}>sign out</button>
    </div>
  );
}

export default playdate;
