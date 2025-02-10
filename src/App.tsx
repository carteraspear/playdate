import React, { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import './App.css';

// Define a type for the user profile
interface UserProfile {
  email?: string;
}

function App() {
  const auth = useAuth();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const handleSignIn = () => {
    auth.signinRedirect(); // Redirect to Cognito for sign-in
  };

  const handleSignOut = () => {
    auth.removeUser(); // Clear the user session
    setIsSignedIn(false);
  };

  const signOutRedirect = () => {
    const clientId = "39n6eqjmmo691695nelad9bbt";
    const logoutUri = "https://example.com"; // Replace with your logout URI
    const cognitoDomain = "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_XohcmASr2"; // Replace with your Cognito domain
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    const userProfile = auth.user?.profile as UserProfile; // Cast the profile to the UserProfile type
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <pre>Hello: {userProfile.email}</pre>
          <pre>ID Token: {auth.user?.id_token}</pre>
          <pre>Access Token: {auth.user?.access_token}</pre>
          <pre>Refresh Token: {auth.user?.refresh_token}</pre>
          <button onClick={handleSignOut}>Sign Out</button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button onClick={handleSignIn}>Sign In</button>
      </header>
    </div>
  );
}

export default App;