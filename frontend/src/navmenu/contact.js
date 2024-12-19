import React from 'react'
import Navigation from '../Navigation';
import Footer from '../footer';

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className='conbody'>
        <h1 className='git'>Get in Touch</h1>
        <p className='condec'>Do not hesitate to contact us to tell us about your Interest and Thoughts. We can surely answer your questions and help you clarify your needs.</p><br />
        <div className='condecniche'>
          <div className='phone'><br />
            <p className='pn'>Phone</p><br />
            <img src="./img/call.jpeg " className='call' alt="img" /><span>+91-7742936692</span><br /><br />
            <img src="./img/call.jpeg " className='call' alt="img" /><span>+91-9509346008</span><br /><br />
            We are here for you
            <button className='pnldbtn'>Make Call Now!</button>
          </div>
          <div className='phonee' ><br />
            <p className='pn'>Addresses</p><br />
            <img src="./img/loc.png" alt="" className='call' /><span>Bada Talab Ke Pass,Kapasan</span><br /><br />
            <img src="./img/loc.png" alt="" className='call' /><span>Bhilwara Bypass,Chittorgarh</span><br /><br />
            <img src="./img/loc.png" alt="" className='call' /><span>IT Park,Rana Pratam Railway Station Ke Pass,Udaipur</span>
          </div>
          <div className='phonee' >
            <p className='pn'>Mail Contact</p><br />
            <img src="./img/mail.png" alt="" className='call' /><span>malikanhaiyalal35@gmail.com</span><br /><br />
            <img src="./img/mail.png" alt="" className='call' /><span>bhaveshvyasji2@gmail.com</span><br /><br /><br />
            Mail us if you want to learn Coding

          </div>
        </div><br /><br /><br />
        <div className='condecniche'>
          <div className='career'>
            <p className='pn'>Make Career</p>
            <img src="./img/career.png" alt="" className='call' /><span>Unlock Your Potential: Lern With Us. Be a Developer and make your Future Bright. <br />Every line of code you write is a step towards turning your dreams into reality; embrace the journey of creation, and your passion will pave the way to a successful career in development. <br />In the world of development, every bug is an opportunity to learn, and every solution is a testament to your growth. Keep pushing boundaries and coding your future.</span>

          </div><br />
          <div className='careerr'>
            <p className='pn'>Interest in learning</p>

            <img src="./img/msj.png" alt="" className='call' /><span>Dive into the world of development, where your curiosity fuels innovation and every challenge is an opportunity to grow. <br />Learning to code is like unlocking a superpower—one that allows you to shape the future with your creativity and skills. <br />The best way to predict the future is to create it. Start developing today and be the architect of tomorrow. <br />In the realm of coding, each problem solved is a victory that brings you closer to mastering the art of development.</span>

          </div>
        </div><br /><br />
        <Footer />
      </div>
    </>
  )
}

export default Contact
