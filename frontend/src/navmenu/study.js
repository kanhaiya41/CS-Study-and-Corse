import React, { useState } from 'react'
import Navigation from '../Navigation';
import "../Style.css"
import StudyMenu from './studyApi';
import StudyCard from '../studycard';
import Footer from '../footer';

const Study = () => {
  const [Studydata,SetStudydata]=useState(StudyMenu);
  return (
    <>
   
    <Navigation/>
      <div className='studybody'><br /><br />
        <h1 className='center'>What you Want to Learn</h1><br /><br />
          <StudyCard Studydata={Studydata}/>
          <Footer/>
      </div>
      
    </>
  )
}

export default Study
