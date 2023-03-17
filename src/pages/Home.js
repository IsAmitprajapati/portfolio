import React from 'react'
import { Link } from 'react-router-dom'
import Amit from "../assets/images/amit.png"
import Contact from './Contact'
import Project from './Project'
import Skill from './Skill'

const Home = () => {
  return (
    <main >
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
            <h4 className='designation'>Full Stack Developer</h4>
            <p className='description_intro'>
              I'm passionate about developing a better world through technology.
              I graduated from the Mumbai University with Bsc in Information Technology.
              I've always been an analytical problem solver as well and the software developing process is a great fit for
              my personality and thinking style.
            </p>
            <div className='homeBtnContainer'>

              <button className='homeBtn'>
                <Link to="contact" className='desktop'>
                  Contact
                </Link>

                <Link to="#contact" className='mobile' >
                  Contact
                </Link>
              </button>

              {/* <button className='homeBtn'>
                <a href='#'>
                  Download
                </a>
              </button> */}
            </div>
          </div>
        </div>




      </header>

      <section id='skill' name="skill" className='mobile '>
        <Skill/>
      </section>

      <section id='project' name="project" className='mobile '>
        <Project/>
      </section>

      <section id='contact' name="contact" className='mobile '>
        <Contact/>
      </section>
    </main>
  )
}

export default Home