import React from "react"

export default function Newpage_programs(props) {
    
    
    return (
        <div>
            
            <div className="new_page_render" >
                <h2>{props.id}.{props.title}:</h2>
                <img src={props.coverImg} className="newpage_img"></img>
                <p>{props.description}</p>
                <p><b>Difficulty Level: </b>{props.stats.difficulty}</p>
                <p><b>Career Prospects: </b>{props.stats.career}</p>
            </div>
        </div>
    )
}