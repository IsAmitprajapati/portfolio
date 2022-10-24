import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { json } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Contact = () => {
  const contactFromRef = useRef()
  const [contactForm, setContactForm] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: ""
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setContactForm((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }


  const handleSubmitContactForm = async (e) => {
    e.preventDefault()
    console.log(contactForm)
    const { contactName, contactEmail, contactMessage } = contactForm

    console.log(process.env.REACT_APP_MONGODB_URL)
    //sending the data to server

    if (contactName && contactEmail && contactMessage) {
      console.log("send")
      await fetch("/", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(contactForm)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(err => console.log(err))
    }




  }
  return (
    <div>
      <div className='container contact-container'>
        <h1 className='contact_heading'>Contact us</h1>

        <div className='contact-content_container'>
          <form className='contact-form' onSubmit={handleSubmitContactForm} ref={contactFromRef}>
            <fieldset>
              <legend ><label htmlFor='contact_name'>Full Name</label></legend>
              <input type="text" id='contact_name' name='contactName' value={contactForm.contactName} onChange={handleOnChange} required />
            </fieldset>

            <fieldset>
              <legend><label htmlFor='contact_email'>Email id</label></legend>
              <input type="email" id='contact_email' name='contactEmail' value={contactForm.contactEmail} onChange={handleOnChange} required />
            </fieldset>

            <fieldset className='contact_message'>
              <legend><label htmlFor='contact_message'>Message</label></legend>
              <textarea id='contact_message' rows={3} name='contactMessage' value={contactForm.contactMessage} onChange={handleOnChange} required></textarea>
            </fieldset>

            <button className='contact_Submit_Btn'>Submit</button>

          </form>


          <div className='contact_details-email-social'>
            <div className='contact_details_container'>
              <a className='contact_details'
                href="mailto:amitprj796@gmail.com"
              >
                <i className='fa-regular fa-envelope icon_contact'></i>
                <h4>amitprj796@gmail.com</h4>
              </a>

              <a className='contact_details'
                href="https://goo.gl/maps/H4wzR8wn4pcUeyQKA"
              >
                <i className='fa-solid fa-location-dot icon_contact'></i>
                <h4>Mumbai Maharashtra - 401209</h4>
              </a>

            </div>


            {/* Social Media */}
            <div className='contact_via_SocialMedia'>
            <h4 className='social_media_heading_title'>Get Touch with Social Media</h4>
              <ul className='contact_social_ul'>

                <li className='contact_Social_Icon' title='Linkedin'>
                  <a href='https://www.linkedin.com/in/itsamitprajapati/' >
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Instagram'>
                  <a href='https://www.instagram.com/isamitprajapati/' >
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Facebook'>
                  <a href='https://www.facebook.com/itsAmitprajapati/' >
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Twitter'>
                  <a href='https://twitter.com/IsAmitprajapati' >
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Leetcode'>
                  <a href='https://leetcode.com/amitprj796/' >
                    <i className='fa-solid fa-code'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Hacker Rank'>
                  <a href='https://www.hackerrank.com/IsAmitprajapati' >
                    <i class="fa-brands fa-hackerrank"></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title="Github">
                  <a href='https://github.com/isAmitprajapati'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                </li>

                <li className='contact_Social_Icon' title='Youtube'>
                  <a href='https://www.youtube.com/channel/UCxaVAiC0v6X59Lf4qSFdohA'>
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </li>

              </ul>







              {/* <i className='' */}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact