import React from "react"

export default function Raunak_Newpage_render(props) {
    
    
    return (
        <div className="new_page_render" >
            <h2>{props.id}.{props.name}:</h2>
            <img src={props.coverImg} className="newpage_img"></img>
            <p>{props.about}</p>
            <h3><u>Information:</u></h3>
            <h4>Early Life:</h4>
            {props.info.earlylife}
            <h4><b>Social: <a href={props.info.social}>{props.info.social}</a></b></h4>
            
        </div>
        
    )
}