import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const Navigat = useNavigate();

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
      <nav>
        <ul>
          <li className='menu'> <FontAwesomeIcon icon={faBars} onClick={openNav} /> </li>
          <li className='home' onClick={() => Navigat('/')}><b>Home</b></li>
          <li className='navli' onClick={() => Navigat('/docs')} ><b>Docs</b></li>
          <li className='navli' onClick={() => Navigat('/study')}><b>Study</b></li>
          <li className='navli' onClick={() => Navigat('/contact')}><b>Contact</b></li>
          <li className='navli' onClick={() => Navigat('/about')}><b>About</b></li>
        </ul>
        <h1 className='dvlpr'>Developers</h1>

      </nav>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}><FontAwesomeIcon icon={faClose} /></div>
        <div onClick={() => Navigat('/')}>Home</div>
        <div onClick={() => Navigat('/docs')}>Docs</div>
        <div onClick={() => Navigat('/study')}>Study</div>
        <div onClick={() => Navigat('/contact')}>Contact</div>
        <div onClick={() => Navigat('/about')}>About</div>
      </div >
    </>
  )
}

export default Navigation
