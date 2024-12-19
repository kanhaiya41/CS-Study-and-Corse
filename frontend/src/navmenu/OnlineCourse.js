import React, { useState } from 'react'
import "../Style.css"
import studyApi from './studyApi';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';

const OnlineCourse = () => {
    const [courseData,setCourseData]=useState(studyApi);
    const Navigate=useNavigate();
    const dbClick=(course)=>{
        Navigate(`/About/Online Courses/JoinCourse/${course}`);
    }
  return (
    <>
        <div className='ocbody'>
            <h1 className='topic'>Our Online Courses</h1>
            {courseData?.map(curElem=>{
                 const {id,course,image,descrption}=curElem;
                 return(
                    <>
                        <div className='Coursecard'>
                        <span className='cid'>{id}</span><br />
                        <h2>{course}</h2>
                        <p>{descrption}</p><br />
                        <button className='jbi' onClick={()=>dbClick(course)}>Join Course</button>
                        <br /><br />
                        </div><br /><br />
                    </>
                 )
            })}
            <Footer/>
        </div>
    </>
  )
}

export default OnlineCourse
