import React from "react";
import Home_data from "./Home_data";
import Homepage_render from "./Home_render";

export default function Home(){
    const Homepage = Home_data.map(item => {
        return(
          <Homepage_render
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    return(
        <div className="home">
            {Homepage}
            <br></br>
        </div>
    );
}