import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

const Info = () => {
  return (
    <div className="info section">
      <div className="infoContainer container">

        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">View all</button>
        </div>
        
        <div className="cardsDiv grid">

          <div className="singleCard grid">
            <div className="iconDiv flex">
              <FaRegCalendarAlt  className='icon'/>
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone add book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck  className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also call airlines from your phone add book a flight ticket!</p>
          </div>

          <div className="singleCard grid">
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