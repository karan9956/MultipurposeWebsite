import React from "react"

export default function MainData(props) {
    
    
    return (
        <div className="f2p-footer" >
            <img src={props.thumbnail}></img>
                <div className="details">           
                <h1>{props.id}.{props.title}</h1>
                <h4>Developer: {props.developer}</h4>
                <h4>Genre: {props.genre}</h4>
                <h5>Platform: {props.platform}</h5>
                <h5>Publisher: {props.publisher}</h5>
                <h6>Realease: {props.release_date}</h6>        
                <h2>Description:</h2>
                <h5>{props.short_description}</h5>
            </div>
        </div>
    )
}