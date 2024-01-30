import React,{useEffect}  from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

// Import AOS =================>
import Aos from 'aos'
import 'aos/dist/aos.css' 

const Info = () => {
// UseEffect to set animation duration ============>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className="info section">
      <div className="infoContainer container">

        <div data-aos='fade-right' data-aos-duration='2500' className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className="btn">View all</button>
        </div>
        
        <div className="cardsDiv grid">

          <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv flex">
              <FaRegCalendarAlt  className='icon'/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone add book a flight ticket!</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck  className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also call airlines from your phone add book a flight ticket!</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <CiBookmarkCheck  className='icon'/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also call airlines from your phone add book a flight ticket!</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Info