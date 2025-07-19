import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Signin() {
  const { setUser } = useAuth();

  const updateUser = () => {
    setUser({});
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={updateUser}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
