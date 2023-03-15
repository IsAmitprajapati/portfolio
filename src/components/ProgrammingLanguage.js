import React from 'react'
import reactLogo from "../assets/images/technology/reactjs.png"
import jslogo from "../assets/images/technology/js-logo.png"
import cssLogo from "../assets/images/technology/css.png"
import bootstraplogo from "../assets/images/technology/bootstrap.png"
import htmlLogo from "../assets/images/technology/html.png"
import nodejsLogo from "../assets/images/technology/nodejs.png"
import MongodbLogo from "../assets/images/technology/mongodb.png"
import reduxLogo from "../assets/images/technology/redux.png"
import tailwindCSSLogo from "../assets/images/technology/tailwind-css.png"
import expressjsLogo from "../assets/images/technology/expressjs.png"

const ProgrammingLanguage = () => {
    return (
        <>
            <div className='ProgrammingLanguage_container skillMobile'>
                <div className='programming_lanugage'>
                    <img src={jslogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={MongodbLogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={expressjsLogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={reactLogo} />
                </div>

                <div className='programming_lanugage'>
                    <img src={nodejsLogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={cssLogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={bootstraplogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={htmlLogo} />
                </div>


                <div className='programming_lanugage'>
                    <img src={reduxLogo} />
                </div>
                <div className='programming_lanugage'>
                    <img src={tailwindCSSLogo} />
                </div>
            </div>

        </>
    )
}

export default ProgrammingLanguage