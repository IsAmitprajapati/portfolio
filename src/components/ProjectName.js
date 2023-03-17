import React from "react";

const ProjectName = ({link,code,img,name}) => {
  return (
    <div className="Project-item">
      <div className="project-item-image">
        <img src={img} loading="lazy" />
      </div>
      <div className="project-item-details">
        <h3>{name}</h3>
        <div className="project-item-details-btn-container">
          <a href={link}>Demo</a>
          <a href={code}>Github</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectName;
