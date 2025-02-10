import { useAuth } from 'react-oidc-context';

const Home = () => {
  const auth = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the HOMEPAGE AAAAA</h1>
        <pre>Hello: {auth.user?.profile.email}</pre>
        <button onClick={() => auth.removeUser()}>Sign Out</button>
      </header>
    </div>
  );
};

export default Home;