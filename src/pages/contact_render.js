import React from "react"
import phone from "./assets/phone.png"
import mail from "./assets/mail.png"

export default function Contact_render(props) {
    
    
    return (
        <div className="contact_render" >
            <p></p>
            <h3>{props.name}</h3>
            <div className="info-group1">
                <img src={phone}></img>
                {props.stats.phone}
            </div>
            <div className="info-group2">
                <img src={mail}></img>
                {props.stats.email}
            </div>
        </div>
        
    )
}