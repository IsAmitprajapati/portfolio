import React, { useEffect, useRef } from "react";
import ProjectName from "../components/ProjectName";
import masaiSchoolImage from "../assets/images/projectImage/masaiSchool.png";
import amitrestaurantImage from "../assets/images/projectImage/amitrestaurant.png";
import amitShophereImage from "../assets/images/projectImage/amitshophere.png";
import starkbuckImage from "../assets/images/projectImage/starkbuck.png";
import w3schoolsImage from "../assets/images/projectImage/w3schools.png";
import growwcloneImage from "../assets/images/projectImage/growwclone.png";
import iphonecalculatorImage from "../assets/images/projectImage/iphonecalculator.png";
import texttospeechImage from "../assets/images/projectImage/texttospeech.png";
import memegeneratorImage from "../assets/images/projectImage/memegenerator.png";


const Project = () => {
  const htmlElement = useRef();

  // function imageCall(){
  //     fetch("https://masai-school-clone-website-36nx9urti-isamitprajapati.vercel.app/")
  //     .then(res => res.text())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }

  return (
    <div className="container project-container">
      <h1 className="project-heading">Project</h1>

      <div className="project-List">
        <ProjectName
          link={"https://restaurant-e-commerce-website-m2yp.vercel.app/"}
          code={"https://github.com/IsAmitprajapati/Restaurant-E-Commerce-Website"}
          img={amitrestaurantImage}
          name="Restaurant E-Commerce Website"
        />
        <ProjectName
          link={"https://mern-ecommerce-frontend-nu.vercel.app/"}
          code={"https://github.com/IsAmitprajapati/MERN-Ecommerce"}
          img={amitShophereImage}
          name="MERN E-commerce"
        />
        <ProjectName
          link={"https://groww-amit.netlify.app/"}
          code={"https://github.com/IsAmitprajapati/Groww-Website-Clone"}
          img={growwcloneImage}
          name="Groww Clone Website"
        />
        <ProjectName
          link={"https://starbucks-clone-website-psi.vercel.app/dashboard"}
          code={"https://github.com/IsAmitprajapati/starbucks-clone-website"}
          img={starkbuckImage}
          name="Starbucks clone "
        />
         <ProjectName
          link={"https://w3schools-clone-website.vercel.app/"}
          code={"https://github.com/IsAmitprajapati/w3schools-clone-website"}
          img={w3schoolsImage}
          name="w3Schools Clone Website "
        />
        <ProjectName
          link={"https://masai-school-clone-isamitprajapati.vercel.app/"}
          code={"https://github.com/IsAmitprajapati/Masai-school-clone-website"}
          img={masaiSchoolImage}
          name="Masai school Clone"
        />
        <ProjectName
          link={"https://prismatic-snickerdoodle-4f8875.netlify.app/"}
          code={"https://github.com/IsAmitprajapati/Iphone-calculator-with-html-css-and-javascript"}
          img={iphonecalculatorImage}
          name="Iphone Calculator"
        />
        <ProjectName
          link={"https://fascinating-griffin-9b8342.netlify.app/"}
          code={"https://github.com/IsAmitprajapati/Text-Convert-To-Speech-html-css"}
          img={texttospeechImage}
          name="Text Convert To Speech"
          />
          <ProjectName
          link={"https://memegenerator-amit.netlify.app/"}
          code={"https://github.com/IsAmitprajapati/reactjs-memes-generator"}
          img={memegeneratorImage}
          name="Memes Generator"
          />
      </div>
    </div>
  );
};

export default Project;
