import React from 'react'
import Navigation from '../Navigation';
import "../Style.css";
import { useNavigate } from 'react-router-dom';
import OnlineCourse from './OnlineCourse';
import Footer from '../footer';

const About = () => {
  const Navigat=useNavigate();
  const clickOn=()=>{
    Navigat('/About/Online Courses');
  }
  return (
    <>
    <Navigation/>
      <div className='aboutbody'>
        <h1 style={{textAlign:'center'}}>About the Developer</h1>
        <div className='abtdvlp'>
          <h1>By Developer</h1>
          <h3>I am a BCA(Computer Science) holder. I make this Website for that Students, who Want to learn Developing.My Name is Kanhaiya Lal Mali.I am a Full Stack Developer. I am Awaiting for my BCA Degree.In this Website,I can Provide Notes for Basic computer,Basic programming,Basic Web Design,Advance Programming and Advance Web Designing Languages.
            In this Website,I also provide some online Courses. If you are interested in my any online Course you most Welcome.
          </h3>
          <button  className='roundbutton' onClick={clickOn}><b>Online Courses</b></button>
        </div>
        <div className='resume'>
          <br /><br />
          <h1 style={{textAlign:'center'}}>Developer Skill and Info.</h1>
          <img className='rimg' src="./img/resume.jpg" alt="image" />
        </div>
      </div>
       <Footer/>
    </>
  )
}

export default About
