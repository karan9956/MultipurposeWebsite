import React from "react"

export default function Newpage_render(props) {
    
    
    return (
        <div>
            
            <div className="new_page_render" >
                <h2>{props.id}.{props.title}:</h2>
                <img src={props.coverImg} className="newpage_img"></img>
                <p>{props.description}</p>
                <h4>Price to Visit:</h4>
                <p>{props.stats.price}</p>
                <h4><b>Visit site: <a href={props.stats.visitSite}>{props.stats.visitSite}</a></b></h4>
                <h4>Covid Update: <a href={props.covidUpdate}>{props.covidUpdate}</a></h4>
            </div>
        </div>
    )
}