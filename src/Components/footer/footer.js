import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import logo from '../Assets/logo.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='f-logo'>
       <img src={logo} alt='' /> 
        <p>SHOPPY</p>
      </div>
      <ul className='footer-links'>
        <li>Company |</li>
        <li>Product |</li>
        <li>Reviews |</li>
        <li>About |</li>
        <li>Blog |</li>
        <li>Contact</li>
      </ul>

      <div className='social-icons'>
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>

      <div className='f-copyright'>
        <hr />
        <p>
          Copyright @ 2023 | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
