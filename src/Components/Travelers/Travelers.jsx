import React,{useEffect} from 'react'

import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.png'
import london from '../../assets/london.png'
import NewYork from '../../assets/NewYork.png'

import travler1 from '../../assets/traveler1.jpg'
import travler2 from '../../assets/traveler2.jpg'
import travler3 from '../../assets/traveler3.jpg'
import travler4 from '../../assets/traveler4.jpg'

// Import AOS =================>
import Aos from 'aos'
import 'aos/dist/aos.css'


// Method called Map to display all data
const traveler = [
  {
    id: 1,
    destinationsIMG: paris,
    travelerIMG: travler1,
    travelerName: 'David',
    socialLink: '@DavidTravel3'
  },

  {
    id: 2,
    destinationsIMG: dubai,
    travelerIMG: travler2,
    travelerName: 'IsraTech',
    socialLink: '@isratech8'
  },

  {
    id: 3,
    destinationsIMG: london,
    travelerIMG: travler3,
    travelerName: 'Jhon',
    socialLink: '@JhonJim'
  },

  {
    id: 4,
    destinationsIMG: NewYork,
    travelerIMG: travler4,
    travelerName: 'Rose',
    socialLink: '@Rose2k'
  },
]

const Travelers = () => {

  // UseEffect to set animation duration ============>
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>
      

      <div className="travelersContainer grid">

       
      {
        traveler.map(({id, destinationsIMG, travelerIMG, travelerName, socialLink})=>{
          return(
            // {/* CARD USER TRAVLER IN MONTH ==================>*/}
            <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
              <img src={destinationsIMG} className='destinationsIMG' />
    
              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerIMG} className='travelerIMG' />
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{socialLink}</p>
                </div>
              </div>
            </div>
          )
        })
      }
      </div> 
      </div>
    </div>
  )
}

export default Travelers