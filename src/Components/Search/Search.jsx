import React, {useRef, useState, useEffect} from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

// Import AOS =================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  
  // Create Calendar use checkIn and checkOut search Flight
  const [date, setDate] = useState('');
  const dataInputRef= useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  
  // UseEffect to set animation duration ============>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='search container section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">
            <span>Economy</span>
          </div>
          
          <div className="singleBtn">
            <span>Business CLass</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>

        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <IoLocationOutline className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want go?'/>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests'/>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <FaRegCalendarAlt  className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" onChange={handleChange} ref={dataInputRef}/>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <FaRegCalendarAlt  className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" onChange={handleChange} ref={dataInputRef}/>
            </div>
          </div>

          <button className="btn btnBlock flex">
            Search Flight
          </button>
        </div>

      </div>
    </div>
  )
}

export default Search