import logo from './logo.svg';
import './App.css';
import { useAuth } from 'react-oidc-context';

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = 'm2rogeivplk4o2tccvkngrk3c';
    const logoutUri = '<logout uri>'; // Replace with your actual logout URI
    const cognitoDomain = 'https://<user pool domain>'; // Replace with your Cognito domain
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Hello: {auth.user?.profile.email}</p>
        <p>ID Token: {auth.user?.id_token}</p>
        <p>Access Token: {auth.user?.access_token}</p>
        <p>Refresh Token: {auth.user?.refresh_token}</p>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Main brand page here</h1>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;
