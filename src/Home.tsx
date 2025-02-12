import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Navigate back to the root route
  };

  return (
    <div>
      <h1>Create an Event</h1>
      <p>This is where you can create a new event.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Home;