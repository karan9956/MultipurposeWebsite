import React from "react"
import Raunak_data from "./Raunak_data"
import Raunak_Newpage_render from "./Raunak_Newpage_render"


export default function Raunak_NewPage(){
    const football = Raunak_data.map(item => {
        return(
          <Raunak_Newpage_render
          key={item.id}
          {...item}   
          />
        )
    })
    return(
        <div className="newpage">
            <p></p><br></br><h1 className="newpage_title"><u>Top 10 Football Players in the World</u></h1>
            {football}
        </div>
    );
}