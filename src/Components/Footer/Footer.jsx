import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className='Logo' />
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Footer