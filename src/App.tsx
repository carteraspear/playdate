import { useAuth } from 'react-oidc-context';
import { useState } from 'react'; // Import useState
import './index.css';
import Home from './Home'; // Add this line

function App() {
  const auth = useAuth();
  const [showHome, setShowHome] = useState(false); // State to control rendering

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
    setShowHome(true); // Show the Home component
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
        {/* Top Bar */}
        <div className="top-bar">
          <a href="https://carterspear.com/fix" target="_blank" rel="noopener noreferrer">
            by Spear Technologies
          </a>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1>Welcome to Playdate: An App For Planning Stuff</h1>
          <button onClick={handleSignIn}>Sign In</button>
        </div>

        {/* Footer */}
        <div className="footer">
          © Copyright 2025 Spear Technologies
        </div>
      </div>
    );
  }

  // After authentication, display the "Welcome" message and a button
  if (!showHome) {
    return (
      <div className="App">
        {/* Top Bar */}
        <div className="top-bar">
          <a href="https://carterspear.com/fix" target="_blank" rel="noopener noreferrer">
            by Spear Technologies
          </a>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1>Welcome</h1>
          <button onClick={handleCreateEvent}>Create an Event</button>
        </div>

        {/* Footer */}
        <div className="footer">
          © Copyright 2025 Spear Technologies
        </div>
      </div>
    );
  }

  // If showHome is true, render the Home component
  return <Home />;
}

export default App;