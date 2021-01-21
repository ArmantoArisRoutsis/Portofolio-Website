import React from 'react'

import ProjectCard from "./shared/ProjectCard"

const Work = () => {
    return (
        <section className="work-section" id="work">
            <h2 className="section-title">My Work</h2>
            
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
            projectInfo="This Thesis will present many different methods and techniques that aim to forecast Time-Series using an abundance of Data. 
            Such techniques include Factor models and Penalized regressions. The Thesis starts with a presentation of some 
            basics from many different relevant fields of statistics and then moves on to introduce factor models, penalized 
            regressions and nowcasting. We then conduct Mote-Carlo simulations that compare those said techniques under different 
            circumstances. Finally, we apply those techniques on McCracken’s large Macroeconomic dataset.  The Monte-Carlo simulations 
            indicate that Principal Components do well, when the errors are not serially correlated.  However, when the errors do suffer 
            from serial correlation, Principal Component regression is outperformed by other methods, such as the Three Pass Regression 
            Filter (3PRF) and Partial Least Squares. We also found that, when applied on the McCracken dataset, End-of-Sample Cross-Validated 
            Ridge Regression outperforms all other methods. " 
            buttonName="Github Repository"
            buttonLink="https://github.com/VasiliosX/High-Dimensional-Forecasting-Techniques"
            />
            <ProjectCard 
            projectImage="Assets/Projects/Python100.png"
            projectName="100 Days of Code"
            projectInfo="My take on the 100 days of code Challenge using the Python Language. The Idea behind this challenge is to create 
            a new project each day for 100 days. Some of the projects I have built feature data analysis and managment libraries such as Pandas 
            where I have worked with handling information from external csv and json files. You can also view other projects that feature 
            libraries and modules that allow for the creation of Graphical User Interfaces such as Turtle and Tkinter. Finally on some of the Projects
            I have touched on web development concepts and technologies and build applications that interact with open APIs." 
            buttonName="Github Repository"
            buttonLink="https://github.com/VasiliosX/100-Days-of-code"
            />

        </section>
    )
}

export default Work
