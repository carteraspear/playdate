import { useAuth } from 'react-oidc-context';
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

  if (auth.isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <pre>Hello: {auth.user?.profile.email}</pre>
          <button onClick={() => auth.removeUser()}>Sign Out</button>
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