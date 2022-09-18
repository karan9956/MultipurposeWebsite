import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage_render(props) {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${props.link}`);
      };
    return (
        <div>
            
            <div className="Homepage_render" >
                <button onClick={handleClick} className="Homepage_btn">
                    <h2><u>{props.title}</u></h2>
                    <p><b>{props.description}</b></p>
                </button>
            </div>
        </div>
    )
}
//<img src={props.coverImg} className="newpage_img"></img>