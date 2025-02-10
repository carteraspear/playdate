import { useAuth } from 'react-oidc-context';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  const auth = useAuth();

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
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            auth.isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <div className="App">
                <header className="App-header">
                  <h1>Welcome to Playdate: An App For Planning Stuff</h1>
                  <button onClick={handleSignIn}>Sign In</button>
                </header>
              </div>
            )
          }
        />
        <Route
          path="/home"
          element={
            auth.isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;