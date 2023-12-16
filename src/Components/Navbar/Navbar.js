import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';  // Import NavLink and Link from react-router-dom
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ec12 from '../Assets/ec12.jpg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import customSlider from "../slider"
import LoginPopup from '../../Pages/Login';
import axios from 'axios';
// import ec5 from '../Assets/ec5.jpg';
// import ec6 from '../Assets/ec6.jpg';
// import ec7 from '../Assets/ec7.jpg';
// import ec8 from '../Assets/ec8.jpg';
// import ec9 from '../Assets/ec9.jpg';
// import ec10 from '../Assets/ec10.jpg';
const Marquee = () => {
  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left" scrollamount="6">
        Get up to 50% off on Men's Fashion! | Special discounts on Women's Apparel! | Exciting offers on Kids' Clothing!
        | Limited-time deals on Electronics | Free Shipping on orders over 599 | Explore our new arrivals now!
      </marquee>
    </div>
  );
};

const WishlistModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // Add your wishlist logic here

  return (
    <div className="wishlist-modal">
      {/* Display wishlist items here */}
      <button onClick={onClose}>Close Wishlist</button>
    </div>
  );
};

const ImageSlider = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
const [dropdownOpen,setdropdownOpen]=useState(false);


  const clicks=()=>{
        setdropdownOpen(!dropdownOpen);
  }

  return (
    <div className="image-slider-container">
      <div className='left'>
      <h2>NEW ARRIVALS ONLY</h2>
     <div>
      <div>
        <p>new</p>
        <p>winter</p>
        <p>collection</p>
 <p>for everyone</p>    
  </div>
  <div >
   <button className='latest-button' onClick={clicks}>latest collection</button> 
   {dropdownOpen && <customSlider />}
  </div>
     </div>
      </div>

      <div className='right'>
      
          <img src={ec12} alt="Slide 1" />
        

      </div>

      {/* <Slider {...settings}>
        <div>
          <img src={ec4} alt="Slide 1" />
        </div>
        <div>
          <img src={ec5} alt="Slide 2" />
        </div>
        <div>
          <img src={ec6} alt="Slide 3" />
        </div>
        <div>
          <img src={ec7} alt="Slide 4" />
        </div>1
        <div>
          <img src={ec8} alt="Slide 5" />
        </div>
        <div>
          <img src={ec9} alt="Slide 6" />
        </div>
        <div>
          <img src={ec10} alt="Slide 7" />
        </div>
      </Slider> */}
    </div>
  );
};





const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [count,setCount]=useState(0);

  useEffect(async()=>{
    try {
     
      const response = await axios.get('http://localhost:4000/count');
      setCount(response.data.data)
      console.log(response.data); // Log the response for debugging
    } catch (error) {
      console.error('Error:', error.message || 'Network Error');
    }
  },[])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Search term:", searchTerm);
  };

  const handleWishlistClick = () => {
    setWishlistModalOpen(true);
  };

  const closeWishlistModal = () => {
    setWishlistModalOpen(false);
  };

  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

  const handleLoginSubmit = (credentials) => {
    // Perform login logic with credentials
    // You can make an API call or authenticate the user here

    // Close the login pop-up after successful login
    setLoginOpen(false);
  };

  return (
    <>
      <div className='navbar'>
  <div className='nav-logo'>
    <img src={logo} alt='' />
    <p>SHOPPY</p>
  </div>
  <ul className='nav-menu'>
    <li onClick={() => setMenu("shop")}>
      <NavLink to='/' activeClassName="active-link" style={{textDecoration: 'none'}}>Shop</NavLink>
      {menu === "shop" ? <hr/> : <></>}
    </li>
    <li onClick={() => setMenu("men")}>
      <Link to='/men'  style={{textDecoration: 'none'}}>Men</Link>
      {menu === "men" ? <hr/> : <></>}
    </li>
    <li onClick={() => setMenu("women")}>
      <Link to='/women'  style={{textDecoration: 'none'}}>Women</Link>
      {menu === "women" ? <hr/> : <></>}
    </li>
    <li onClick={() => setMenu("kids")}>
      <Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>
      {menu === "kids" ? <hr/> : <></>}
    </li>
  </ul>
  <div className='nav-search'>
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
    </form>
  </div>
  <div className='nav-wishlist' onClick={handleWishlistClick}>
    <FontAwesomeIcon icon={faHeart} />
  </div>
  <div className='nav-login-cart'>
    <Link to='/login'>
      <button  onClick={handleLoginClick}>Login</button>
      {isLoginOpen && (
        <LoginPopup
          onClose={handleCloseLogin}
          onLoginSubmit={handleLoginSubmit}
        />
      )}
    </Link>
    <Link to='/cart'>
      <FontAwesomeIcon icon={faShoppingCart} />
    </Link>
    <div className='nav-cart-count'>{count}</div>
  </div>
</div>

      <Marquee />
      <ImageSlider />
      <WishlistModal isOpen={wishlistModalOpen} onClose={closeWishlistModal} />
    </>

   
  );
};

export default Navbar;
