
import { useState } from 'react';
import './LoginCard.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import RegistrationModal from '../components/RegistrationModal';
import { useData } from '../utils/DataContext'; // Import useData hook

Modal.setAppElement('#root');

export default function LoginCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateUserData } = useData(); // Access updateUserData from context

  const navigate = useNavigate();

  const roleMapping = {
    'varun@gmail.com': 'Institute',
    'prashanth@gmail.com': 'School',
    'teacher@gmail.com': 'Teacher',
    'clinician@gmail.com': 'Clinician',
    'nodal@gmail.com':'nodal'
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email in roleMapping && password === '1234') {
      const role = roleMapping[email]; // Get the role from the mapping

      // Update user data in the context
      updateUserData({
        role,
        name: email.split('@')[0], // You can customize the name if needed
        email,
      });

   
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <a href="forgot-password" className="forgot-password">
          Forgot password?
        </a>
        <p className="register-link">
          Don't have an account?{' '}
          <a
            onClick={() => {
              openModal();
              console.log('Register link clicked!');
            }}
          >
            Register
          </a>
        </p>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <RegistrationModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}
