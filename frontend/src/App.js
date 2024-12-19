import React from 'react';
import './Style.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Docs from './navmenu/docs';
import Study from './navmenu/study';
import Contact from './navmenu/contact';
import About from './navmenu/about';
import { BrowserRouter } from 'react-router-dom';
import BasicComp from './Course/basiccomp';
import OnlineCourse from './navmenu/OnlineCourse';
import Join from './navmenu/Join';
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/about' element={<About />} />
          <Route path='/docs' element={<Docs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/study' element={<Study />} />
          <Route path='/study/Basic-Computer' element={<BasicComp />} />
          <Route path='/study/MS-Office' element={<BasicComp />} />
          <Route path='/study/Programming-Startup' element={<BasicComp />} />
          <Route path='/study/Web-Designing' element={<BasicComp />} />
          <Route path='/study/Programming' element={<BasicComp />} />
          <Route path='/study/ASP.NET' element={<BasicComp />} />
          <Route path='/study/DBMS' element={<BasicComp />} />
          <Route path='/study/MERN-Stack' element={<BasicComp />} />
          <Route path='/About/Online Courses' element={<OnlineCourse />} />
          <Route path='/About/Online Courses/JoinCourse/Basic-Computer' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/MS-Office' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/Programming-Startup' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/Web-Designing' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/Programming' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/ASP.NET' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/DBMS' element={<Join />} />
          <Route path='/About/Online Courses/JoinCourse/MERN-Stack' element={<Join />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
