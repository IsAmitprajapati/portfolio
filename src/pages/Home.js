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
            <p className='description_intro'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>




      </header>

    </main>
  )
}

export default Home