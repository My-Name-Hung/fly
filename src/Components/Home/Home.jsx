import React from 'react'

//import video,images
import video from '../../assets/video.mp4'
import flight from '../../assets/flight.png'


const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Traveling with Us you will Relax more </h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

      <img src={flight} className='plane' />
      </div>
    </div>
  )
}

export default Home