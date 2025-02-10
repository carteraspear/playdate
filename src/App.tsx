import { useState } from 'react';
import './App.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
    alert('You are now signed in!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        {!isSignedIn ? (
          <button onClick={handleSignIn}>Sign In</button>
        ) : (
          <p>You are signed in!</p>
        )}
      </header>
    </div>
  );
}

export default App;