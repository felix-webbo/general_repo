import React from 'react'

//import assets=======
import video from '../../assets/BaptismalVideo.mp4'
import aeroplane from '../../assets/Fairmont.jpg'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories with us</h1>
      </div>

      <div className='homeImage flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className='video'/>
        </div>

        <img src={aeroplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home;
