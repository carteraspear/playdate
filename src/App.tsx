import { useAuth } from 'react-oidc-context';
import { useState } from 'react';
import './index.css';
import Home from './Home';

function App() {
  const auth = useAuth();
  const [showHome, setShowHome] = useState(false);

  console.log('Auth state:', {
    isLoading: auth.isLoading,
    isAuthenticated: auth.isAuthenticated,
    error: auth.error,
    user: auth.user,
  });

  const handleSignIn = () => {
    console.log('Sign In button clicked');
    auth.signinRedirect()
      .then(() => {
        console.log('Redirecting to Cognito...');
      })
      .catch((error: Error) => {
        console.error('Error during sign-in redirect:', error);
      });
  };

  const handleCreateEvent = () => {
    console.log('Create Event button clicked');
    setShowHome(true);
  };

  const goToDashboard = () => {
    window.location.href = 'Dashboard.tsx'; // Redirect to Dashboard.tsx
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return (
      <div>
        <h1>Encountering an error</h1>
        <p>{auth.error.message}</p>
        <button onClick={handleSignIn}>Retry Sign In</button>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="App">
        <div className="top-bar">
          <a href="https://carterspear.com/fix" target="_blank" rel="noopener noreferrer">
            by Spear Technologies
          </a>
        </div>
        <div className="main-content">
          <h1>Welcome to Playdate: An App For Planning Stuff</h1>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
        <div className="footer">
          © Copyright 2025 Spear Technologies
        </div>
      </div>
    );
  }

  if (!showHome) {
    return (
      <div className="App">
        <div className="top-bar">
          <button className="dashboard-button" onClick={goToDashboard}>
            Go to Dashboard
          </button>
          <a href="https://carterspear.com/fix" target="_blank" rel="noopener noreferrer">
            by Spear Technologies
          </a>
        </div>
        <div className="main-content">
          <h1>Welcome</h1>
          <button onClick={handleCreateEvent}>Create an Event</button>
        </div>
        <div className="footer">
          © Copyright 2025 Spear Technologies
        </div>
      </div>
    );
  }

  return <Home />;
}

export default App;
