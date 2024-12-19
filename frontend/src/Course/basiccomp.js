import React, { useEffect, useState } from 'react';
import "../Style.css";
import axios from 'axios';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const BasicComp = () => {
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [heading, setHeading] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [urlLastpart, setUrlLastpart] = useState("");
  const [coursedata, setCoursedata] = useState(null);



  const alogin = () => {
    var ad = document.getElementById('adiv');
    var al = document.getElementById('alogin');
    var adc = document.getElementById('adcourse');
    if (ad.style.display === "none") {
      ad.style.display = 'block';
      al.style.display = 'none';
      adc.style.display = 'none';
    }
    else {
      ad.style.display = 'none';
      al.style.display = 'none';
      adc.style.display = 'none';
    }
  };

  const ashow = () => {
    var al = document.getElementById('alogin');
    var ad = document.getElementById('adiv');
    if (al.style.display === "none") {
      al.style.display = 'block';
      ad.style.display = 'none';
    }
    else {
      al.style.display = 'none';
      ad.style.display = 'none';
    }
  };

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3001/study/BasicComputer/login/${User}/${Pass}`);
      if (!res.data) {
        toast.error("Incorrect information");
      } else {
        var adc = document.getElementById('adcourse');
        var al = document.getElementById('alogin');
        var ad = document.getElementById('adiv');
        adc.style.display = 'block';
        al.style.display = 'none';
        ad.style.display = 'none';
      }
    } catch (error) {
      toast.error(error);
    }
  };



  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const enfile = encodeURIComponent(file);
      const res = await axios.post(`http://localhost:3001/store/${heading}/${course}/${description}/${enfile}`);

      if (res.data) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error('error', error);
    }
  };

  //eting url for select course
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    setUrlLastpart(lastPart);
  }, []);

  //for selecting course
  useEffect(() => {
    const getcourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/findnotes/${urlLastpart}`);
        setCoursedata(res.data);
      } catch (error) {
        toast.error('error', error);
      }
    };
    if (urlLastpart) {
      getcourse();
    }
  }, [urlLastpart]);

  const downpdf = (divId) => {
    const input = document.getElementById(divId);
    html2canvas(input).then((canvas) => {
      const imgdata = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      pdf.addImage(imgdata, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('download.pdf');
    })
  }
  const Navigat = useNavigate();
  const clickOn = () => {
    Navigat('/About/Online Courses');
  }
  return (
    <>
      <div className='bcbody'>
        {coursedata && coursedata.map((curElem, index) => {
          return (
            <>
              <div className='hi'>
                <h1 className='centerr'>
                  {curElem?.heading}
                </h1>
              </div> <br />
              <h2>Description:</h2>
              <p>{curElem?.description}</p>

              {curElem.file && (
                < div id='notes'>
                  <h2 style={{ backgroundColor: 'whitesmoke' }}>Notes(It is just your opinion that these notes are difficult. You just download it, read it carefully and understand it. It is simpler than you think)</h2>
                  <div id={`notespdf-${index}`} className='notespdf'>
                    {curElem.file}
                  </div> <br /> <br />

                  <button className='dnldbtn' onClick={() => downpdf(`notespdf-${index}`)}><b>Download</b></button><br /><br />
                </div>
              )} <br /><br /> <br />

            </>
          );
        })}
        <h3 style={{ textAlign: 'center' }}>See Online Courses</h3>
        <button className='roundbuttonb' onClick={clickOn}><b>Online Courses</b></button>
        <img src="/img/admin.png" className='aimg' onClick={alogin} alt="Admin" />

        {/* enter button for admin on img click  */}
        <div id='adiv'>
          <p style={{ padding: '50px' }}>Only for Admin Use</p>
          <button className='enter' onClick={ashow}>Enter</button>
        </div>

        <div id='alogin'>
          <form>
            <p style={{ background: 'green' }}>Only for Admin Use</p><br />
            Username: <input type="text" value={User} onChange={(e) => setUser(e.target.value)} /><br /><br />
            Password: <input type="password" value={Pass} onChange={(e) => setPass(e.target.value)} /><br /><br />
            <button className='enter' onClick={PostData}>Login</button>
          </form>
        </div>

        <div id='adcourse'><br /><br />
          <form onSubmit={onFormSubmit}>
            <h2>Add Notes</h2><br />
            Heading: <input type="text" name='heading' value={heading} onChange={(e) => setHeading(e.target.value)} /><br /><br />
            Course: <input type="text" name='course' value={course} onChange={(e) => setCourse(e.target.value)} /><br /><br />
            Description: <input type="text" name='description' value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
            File: <input type="text" name='notes' value={file} onChange={(e) => setFile(e.target.value)} maxLength={10000000000000} /><br /><br />
            <button type='submit' className='enter' >Add Now</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BasicComp;
