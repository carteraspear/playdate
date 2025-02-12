import { useAuth } from 'react-oidc-context';

interface UserProfile {
  email?: string;
  preferred_username?: string;
  // Add other properties as needed
}

interface User {
  profile?: UserProfile;
  email?: string;
  // Add other properties as needed
}

const Home = () => {
  const auth = useAuth();
  const user = auth.user as User | undefined;

  console.log('auth.user:', user);

  if (!user) {
    return <div>No user data found. Please check authentication.</div>;
  }

  const email = user?.email || user?.profile?.email || 'User';

  return (
    <div>
      <h1>Signed in! Welcome {email}</h1>
    </div>
  );
};

export default Home;