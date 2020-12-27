import React from 'react'

import ProjectCard from "./shared/ProjectCard"

const Work = () => {
    return (
        <section className="work-section">
            
            <ProjectCard 
            projectImage="https://cdn.cloudflare.steamstatic.com/steam/apps/1128810/header.jpg?t=1607584766"
            projectName="Risk Board"
            projectInfo="Monte-Carlo simulations about RISK, the board game." 
            buttonName="Github Repository"
            buttonLink="https://github.com/VasiliosX/Risk-Board"
            />
            <ProjectCard 
            projectImage="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5e/b4ef8069b511e3ae92c39913bb30e0/Rprogramming.jpg?auto=format%2Ccompress&dpr=1"
            projectName="High Dimensional Forecasting"
            projectInfo="This is a set of applications, written in R, of high dimensional econometric techniques." 
            buttonName="Github Repository"
            buttonLink="https://github.com/VasiliosX/High-Dimensional-Forecasting-Techniques"
            />
            
        </section>
    )
}

export default Work
