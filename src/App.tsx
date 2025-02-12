import { useAuth } from 'react-oidc-context';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import './index.css';

function App() {
  const auth = useAuth();

  console.log('Auth state:', {
    isLoading: auth.isLoading,
    isAuthenticated: auth.isAuthenticated,
    error: auth.error,
    user: auth.user,
  });

  const handleSignIn = () => {
    console.log('Sign In button clicked');
    auth.signinRedirect().then(() => {
      console.log('Redirecting to Cognito...');
    }).catch((error: Error) => {
      console.error('Error during sign-in redirect:', error);
    });
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;