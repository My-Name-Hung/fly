import React,{useEffect} from 'react'
import logo from '../../assets/logo2.png'

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';

// Import AOS =================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // UseEffect to set animation duration ============>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="footer">

      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='Logo' />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon'/>
            <TiSocialTwitter className='icon'/>
            <TiSocialYoutube className='icon'/>
            <FiInstagram className='icon'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Infomation</span>
          <li>
            <Link to={'#'} className='link'>Home</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Explore</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Flight Status</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Travel</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Check-In</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Manage booking</Link>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <Link to={'/'} className='link'>FAQ</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Help</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Features</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Baggage</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Map</Link>
          </li>

          <li>
            <Link to={'/'} className='link'>Our communities</Link>
          </li>
        </div>

      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <Link to={'https://github.com/My-Name-Hung'} target='_blank'>Hung</Link></p>
      </div>
    </div>
  )
}

export default Footer