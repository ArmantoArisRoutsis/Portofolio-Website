import React from 'react'
import LinkButton from "./shared/LinkButton"

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Contact Information</h2>
            <div>
            <LinkButton blank="_blank" name="Github" link="https://github.com/VasiliosX" />
            <LinkButton blank="_blank" name="Email" link="mailto:vaschronas@gmail.com" />
            <LinkButton blank="_blank" name="LinkedIn" link="https://www.linkedin.com/in/vasileios-chronas-74946a173" />
            </div>
        </section>
        
    )
}

export default Contact
