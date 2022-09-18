import React from "react"
import Data from "./contact_data"
import Contact_render from "./contact_render"

export default function Contact(){
    const contacts = Data.map(item => {
        return(
          <Contact_render
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    return(
        <div>
            <h1>Meet the Devs:</h1>
            <div className="contacts">
                {contacts}
            </div> 
        </div>
    );
}