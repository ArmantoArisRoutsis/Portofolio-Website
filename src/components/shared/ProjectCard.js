import React from 'react'
import LinkButton from "./LinkButton"

const ProjectCard =({projectImage,projectName,projectInfo,buttonName,buttonLink})=> {
    return (
        <div className="project-card">
                <img src={projectImage}/>
                <div className="project-info">
                    <h3>{projectName}</h3>
                    <p>{projectInfo}</p>
                </div>
                <div className="card-buttons">
                    <LinkButton blank="_blank" name={buttonName} link={buttonLink}/>
                </div>
        </div>
    )
}

export default ProjectCard;
