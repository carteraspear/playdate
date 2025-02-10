import { useAuth } from 'react-oidc-context';

const Home = () => {
  const auth = useAuth();

  // Extract the email from the user's profile
  const email = auth.user?.profile?.email || 'User';

  return (
    <div>
      <h1>Signed in! Welcome {email}</h1>
    </div>
  );
};

export default Home;