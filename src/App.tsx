import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './index.css';

function App() {
  const auth = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

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
    navigate('/home'); // Navigate to /home
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
        <header className="App-header">
          <h1>Welcome to Playdate: An App For Planning Stuff</h1>
          <button onClick={handleSignIn}>Sign In</button>
        </header>
      </div>
    );
  }

  // After authentication, display the "Welcome" message and a button
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <button onClick={handleCreateEvent}>Create an Event</button>
      </header>
    </div>
  );
}

export default App;