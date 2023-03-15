import React from 'react'
import mariapps from "../assets/images/experience/mariapps.jpg"

const Experience = () => {
    return (
        <>
            <div className='skill-experience'>
                <div className='skill-experience-comapany-leftside'>
                    <div className='skill-experience-company-logo'>
                        <img src={mariapps} />
                    </div>
                    {/* <div className='experience_line'></div> */}
                </div>
                <div className='skill-experience-company-details'>
                    <h3>React Developer</h3>
                    <div className='skill-experience-job-details'>
                        <p>Mariapps Marine Solutions</p>
                        <span className='sepratedLine'></span>
                        <p>Full-time</p>
                    </div>

                    <div className='detailsMonthYear'>
                        <p>Jun 2022</p>
                        <span className='sepratedLine'></span>
                        <p>Present</p>
                        <span className='sepratedLine'></span>
                        <p>9 Mos</p>
                    </div>
                    <div className='detailsLocation'>
                        <p>Mumbai, Maharashtra, India</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience