import { useAuth } from 'react-oidc-context';

const Home = () => {
  const auth = useAuth();

  console.log('Home component - Auth state:', {
    user: auth.user,
    profile: auth.user?.profile,
    email: auth.user?.profile?.email,
  });

  if (!auth.user) {
    return <div>No user data found. Please check authentication.</div>;
  }

  // Extract the email from the user's profile
  const email = auth.user?.email || auth.user?.profile?.email || 'User';

  return (
    <div>
      <h1>Signed in! Welcome {email}</h1>
    </div>
  );
};

export default Home;