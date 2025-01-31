import React from 'react';
import Modal from 'react-modal';

import './LoginForm.css';  // Login Form CSS
import BookCard from '../components/BookCard';
import VideoCard from '../components/VideoCard';
import gate from '../assest/gate.jpeg'
import mocking from '../assest/mocking.jpeg'
import ninteen from '../assest/ninteen.png'
import moby from '../assest/moby.jpeg'
import LoginCard from '../components/LoginCard';

Modal.setAppElement('#root');

const LoginPage = () => {
  return (
    <div className="login-page">

      <div className='logging'>
        <div className="left-side">
          <div className="explanation">
            <h2>EarlySpark</h2>
            <p>
            Emphasizing early identification and rehabilitation support for students.  
            </p>
          </div>
        </div>
        <div className="right-side">
          <LoginCard />
        </div>
      </div>


      <div className="cards-container">

        <div className="book-cards">
          <h2>Reading Material</h2>
          <div className="card-grid">
            <BookCard
              title="The Great Gatsby"
              author="F. Scott Fitzgerald"
              description="A novel about the American dream and a tragic love story."
              coverImage={gate}
              infoLink="https://en.wikipedia.org/wiki/The_Great_Gatsby"
            />
            <BookCard
              title="1984"
              author="George Orwell"
              description="A dystopian novel set in a totalitarian society."
              coverImage={ninteen}
              infoLink="https://en.wikipedia.org/wiki/Nineteen_Eighty-Four"
            />
            <BookCard
              title="To Kill a Mockingbird"
              author="Harper Lee"
              description="A Pulitzer Prize-winning novel about racial injustice ."
              coverImage={mocking}
              infoLink="https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"
            />
            <BookCard
              title="Moby Dick"
              author="Herman Melville"
              description="A classic novel about the pursuit of a giant whale."
              coverImage={moby}
              infoLink="https://en.wikipedia.org/wiki/Moby-Dick"
            />
          </div>
        </div>

        <div className="video-cards">
          <h2>Videos</h2>
          <div className="card-grid">
            <VideoCard
              title="Introduction to React"
              description="A beginner-friendly tutorial on ReactJS."
              thumbnail={gate}
              videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
            <VideoCard
              title="JavaScript Basics"
              description="Learn the basics of JavaScript programming."
              thumbnail={moby}
              videoUrl="https://www.youtube.com/watch?v=upDLs1sn7g4"
            />
            <VideoCard
              title="HTML for Beginners"
              description="An introduction to HTML for web development."
              thumbnail={ninteen}
              videoUrl="https://www.youtube.com/watch?v=pQN-pnF0RA0"
            />
            <VideoCard
              title="CSS Advanced"
              description="Explore advanced CSS techniques for styling websites."
              thumbnail={mocking}
              videoUrl="https://www.youtube.com/watch?v=1Rs2ND1ryY4"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;

