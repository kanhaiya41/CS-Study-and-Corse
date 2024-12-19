import React, { useState } from 'react';
import './Style.css';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (div) => {
    setHoveredDiv(div);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };
  const Navigat = useNavigate();
  const clickOn = () => {
    Navigat('/About/Online Courses');
  }
  return (
    <>
      <div className='bodyh'>
        <Navigation />
        <div className='main'>
          <div
            className={`homea ${hoveredDiv === 'homea' ? 'hidden' : ''}`}
            onMouseEnter={() => handleMouseEnter('homea')}
            onMouseLeave={handleMouseLeave}
          ><h2>Welcome in Computer Science</h2>
            <p>your one-stop destination for all things computer science! Whether you're a seasoned professional, a curious student, or someone just beginning their tech journey, we have something for you. Explore our wide range of tutorials, articles, and resources to elevate your knowledge and skills. Let's dive into the world of technology together!</p>
          </div>
          <div
            className={`homeb ${hoveredDiv === 'homea' ? 'visible' : ''}`}
            onMouseEnter={() => handleMouseEnter('homea')}
            onMouseLeave={handleMouseLeave}
          >
            <h2>Study with Us</h2>
            <p>Enhance Your Learning with Our Comprehensive and Easy-to-Follow Computer Science Notes – Your Ultimate Study Companion! <br />
              We can Transform you from Zero to Hero with Our Step-by-Step Computer Science Program – Master the Basics and Conquer Advanced Topics!
              No Prior Knowledge? No Problem! Our Courses Are Designed to Take You from Absolute Beginner to Computer Science Pro!</p>
          </div>
          <div
            className={`homec ${hoveredDiv === 'homec' ? 'hidden' : ''}`}
            onMouseEnter={() => handleMouseEnter('homec')}
            onMouseLeave={handleMouseLeave}
          ><h2>Learn with Us</h2>

            <p>To get started, you might want to: <br />
              - Browse our [Course](#) section for step-by-step guides on various topics.  <br />
              - Check out our [Online](#) for the latest trends and research in computer science. <br />
              - Join the conversation in our [Touch](#) and connect with fellow tech enthusiasts.

              If you have any questions or need assistance, don't hesitate to reach out via our [Contact](#) page. Happy learning!
            </p>
          </div>
          <div
            className={`homed ${hoveredDiv === 'homec' ? 'visible' : ''}`}
            onMouseEnter={() => handleMouseEnter('homec')}
            onMouseLeave={handleMouseLeave}
          >
            <h2>Our Online Course</h2>
            <p>We are also a good Teachers with the good Developer's And Interested to Teach You! So do this Now, Unlock Your Potential with Our Expert-Led Online Courses in Computer Science – Learn, Innovate, and Advance Your Career from Anywhere! <br /><b>Click Here To See Our Online Course:</b></p>
            <button className='roundbuttono' onClick={clickOn}><b>Online Courses</b></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
