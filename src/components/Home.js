import React,{useEffect} from 'react'

import LinkButton from "./shared/LinkButton"
import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {

    useEffect(() => {
        Aos.init({duration:3000});
    }, [])
    return (
        <section className="home-section" id="home">
            <h1 data-aos="fade-down">I am Vasilis</h1>
            <div data-aos="zoom-out" data-aos-duration="2000"  className="box">
            <h3 className="box-iam">and I'm a</h3>
            <h3><div className="word">
                    <span>Msc of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>Economics</span>
                    <span>Data Analyst</span>
                    <span>Programmer</span>
                    <span>Language&nbsp;<br/>Enthusiast</span>
                </div></h3>
            </div>
            <div className="home-section-buttons">
                <LinkButton blank="_blank" name="Resume" link="Assets/Resume/Resume__Chronas-Vasilis.pdf" />
                <LinkButton name="Contact Me" link="#contact" />
            </div>
        </section>
    )
}

export default Home
