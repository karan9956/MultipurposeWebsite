import React from "react"

export default function Newpage_mysterious(props) {
    
    
    return (
        <div>
            
            <div className="new_page_render" >
                <h2>{props.id}.{props.title}:</h2>
                <img src={props.coverImg} className="newpage_img"></img>
                <p>{props.description}</p>
            </div>
        </div>
    )
}