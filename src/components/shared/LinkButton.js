import React from 'react'
import "./LinkButton.css"

const LinkButton =({name,link,blank})=> {
    return (
        <>
            <a target={blank} href={link} alt={name} className="link-button">{name}</a>
        </>
    )

}

export default LinkButton;
