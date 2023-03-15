import React, { useEffect, useRef } from 'react'
import masaiSchoolImage from "../assets/images/projectImage/masaiSchool.png"

const Project = () => {
  const htmlElement = useRef()

  // function imageCall(){
  //     fetch("https://masai-school-clone-website-36nx9urti-isamitprajapati.vercel.app/")
  //     .then(res => res.text())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

  return (
    <div className='container project-container'>
        <h1 className='project-heading'>Project</h1>

        <div className='project-List'>
            <div className='Project-item'>
              <div className='project-item-image'>
                <img src={masaiSchoolImage}/>
              </div>
              <div className='project-item-details'>
                <h3>Restaurant E-commerce</h3>
                <div className='project-item-details-btn-container'>
                  <a href='#'>Link</a>
                  <a href='#'>Github</a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project