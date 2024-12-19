import React from 'react'
import "./Style.css"
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const StudyCard = ({Studydata}) => {
  const Navigat=useNavigate();

  const handleStudyNowClick=(course)=>{
    Navigat(`/study/${course}`);
  }
  return (
    <>
      <div className='study-container'>
            {Studydata.map((curElem)=>{
              const {id,course,image,descrption}=curElem;
              return(
                <>
                  <div className='studycard'><br />
                    <span className='cid'>{id}</span>
                    <h1>{course}</h1>
                    <p>{descrption}</p>
                    <hr /><span className='learntext'>LEARN</span>
                    <img src={image} className='cimg'/>
                    <button className='sbi' onClick={()=>handleStudyNowClick(course)}>Study Now</button>
                  </div>
                </>
              )
            })}
            
          </div>
    </>
  )
}

export default StudyCard
