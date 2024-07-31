import React from 'react'
import './Navbar.css'
import { FcLike } from "react-icons/fc";
import { FaUserPlus } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar-container'>
      <Banner/>
      <div className="logo"></div>
      <div className="search-container"></div>
      <div className="fakeP"></div>
      
      <div className="main-section-bar">

      <div className="main-section-bar-item1">
      {/* <Link to={'/like'} > */}
        <div className="main-section-bar-item1-icon-box">
          <FcLike className='nav-icons'/>
        </div>
        <div className="main-section-bar-item1-text-box">
          <p>like</p>
          
        </div>
        {/* </Link> */}
      </div>
      <div className="main-section-bar-item2">
      <Link to={'/card'}>
          <div className="main-section-bar-item2-icon-box">
          <TiShoppingCart className='nav-icons'/>
          </div>
          <div className="main-section-bar-item2-text-box">
          <p>card</p>
          </div>
      </Link>
      </div>
      <div className="main-section-bar-item3">
        <Link to={'/login'}>
        <div className="main-section-bar-item3-icon-box">
          <FaUserPlus className='nav-icons'/>
        </div>
        <div className="main-section-bar-item3-text-box">
          <p>User</p> 
        </div>
        </Link>
      
      </div>
      </div>
    </div>
  )
}

export default Navbar