import React, { useEffect, useState } from 'react'
import '../Style.css'
import axios from 'axios';
import Footer from '../footer';
import toast from 'react-hot-toast';

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    qualy: "",
    age: "",
    email: "",
    add: "",
    payss: null,
    msj: ""
  });
  const [urlLastpart, setUrlLastpart] = useState("");
  const [coursedata, setCoursedata] = useState(null);
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    setUrlLastpart(lastPart);
  }, []);
  useEffect(() => {
    const getcourse = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/finddec/${urlLastpart}`);
        setCoursedata(res?.data);
      } catch (error) {
        toast.error('error', error);
      }
    };
    if (urlLastpart) {
      getcourse();
    }
  }, [urlLastpart]);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      payss: e.target.files[0]
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('qualy', formData.qualy);
    data.append('age', formData.age);
    data.append('email', formData.email);
    data.append('add', formData.add);

    data.append('msj', formData.msj);
    data.append('urlLastpart', urlLastpart);
    data.append('payss', formData.payss);
    try {
      await axios.post('http://localhost:3001/gmail', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success('Form Submitted! Thank you.');
    } catch (error) {
      toast.error('There was an error submitting your form! plese send a direct mail on kingkanhaiya57@gmail.com')
    }
  };

  return (
    <>
      <div className='joinbody'>
        <br /><br />
        <h1 style={{ textAlign: 'center' }}>Join the Course</h1><br />
        <div className='coursedec'>
          <h3>Course Description</h3>
          {coursedata && coursedata?.map((curElem) => {
            return (
              <>
                {curElem?.coursedec} <br />
                <h5>Fees: {curElem?.fees} Rs.</h5>
                <b>It is compalsory to submit 30% fees with Form Submission.</b>
              </>
            )
          })}

        </div><br /><br /><br />
        <div className='cordet'>
          <div className='corform'>
            <form onSubmit={handleSubmit}>
              <h2>Fill the Form for Course*</h2> <br />
              <h3>Name*</h3>
              <input type="text" placeholder='Your Name' name='name' value={formData.name} onChange={handleChange} className='ginput' /><hr />
              <h3>Qualification*</h3>
              <input type="text" placeholder='10th/12th/Graduation' name='qualy' value={formData.qualy} onChange={handleChange} className='ginput' /><hr />
              <h3>Your Age*</h3>
              <input type="text" placeholder='Your Age' name='age' value={formData.age} onChange={handleChange} className='ginput' /><hr />
              <h3>Email*</h3>
              <input type="text" placeholder='Email Address' name='email' value={formData.email} onChange={handleChange} className='ginput' /><hr />
              <h3>Address*</h3>
              <input type="text" placeholder='Your Address/place name(city name)' name='add' value={formData.add} onChange={handleChange} className='ginput' /><hr />
              <h3>Payement ScreenShort*</h3>
              <input type="file" name='payss' onChange={handleFileChange} className='' /><span className='payat'>Attach a ScreenShort of 30% payment of Fees</span><hr />
              <h3>Message*</h3>
              <input type="text" placeholder='Write your interest' name='msj' value={formData.msj} onChange={handleChange} className='ginput' /><hr /><br />
              <input type="submit" value="Submit" className='dnldbtn' />
            </form>
          </div>
          <div className='pmethod'>
            <h3>Pay on number*</h3>
            <span className='nump'>7742936692</span> <br /> <br />
            <h3>Pay on QR Code*</h3>
            <h4>Phone Pay</h4>
            <img src='/img/phonepay.jpg' alt="phonepay" className='pay' /> <br /> <br />
            <h4>Google Pay</h4>
            <img src="/img/gpay.jpg" alt="phonepay" className='pay' /> <br /> <br />
            <h4>Bhim UPI</h4>
            <img src="/img/bhimupi.jpg" alt="phonepay" className='pay' />
          </div>
        </div><br /><br />

        <Footer />
      </div>
    </>
  )
}

export default Join
