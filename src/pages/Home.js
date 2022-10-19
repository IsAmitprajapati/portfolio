import React from 'react'
import Amit from "../assets/images/amit.png"

const Home = () => {
  return (
    <main>
      <header className='header-home'>

        <div className='header-home-top'>
          <div className='container'></div>
        </div>

        <div className='container header-home-body'>
          <div className='header-home-image'>
            <img src={Amit} />
          </div>
          <div className='introduction_profile'>
            <h1 className='intro'>I'm Amit Prajapati</h1>
            <h4 className='designation'>Frontend Developer</h4>
            <p className='description_intro'>
              I'm passionate about developing a better world through technology.
              I graduated from the Mumbai University with Bsc in Information Technology.
              I've always been an analytical problem solver as well and the software developing process is a great fit for
              my personality and thinking style.
            </p>
          </div>
        </div>




      </header>

    </main>
  )
}

export default Home