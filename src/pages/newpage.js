import React from "react"
import data from "./data"
import programsData from "./programsData"
import mysteriousData from "./mysteriousData"
import Newpage_render from "./newpage_render"
import Newpage_programs from "./newpage_programs"
import Newpage_mysterious from "./newpage_mysterious"

export default function NewPage(){
    const [isShown, setIsShown] = React.useState('')
    function togglePlaces(){
        setIsShown('showPlaces')
    }
    function toggleShown(){
        setIsShown('showPrograms')
    }
    function toggleNew(){
        setIsShown('showMysterious')
    }
    const places = data.map(item => {
        return(
          <Newpage_render
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    const programs = programsData.map(item => {
        return(
          <Newpage_programs
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    const mysterious = mysteriousData.map(item => {
        return(
          <Newpage_mysterious
          key={item.id}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    return(
        <div className="newpage">
             
            <div className="buttons">
                <button className="button-49" onClick={togglePlaces}>PLACES TO VISIT</button>
                <button className="button-49" onClick={toggleShown}>PROGRAMMING LANGUAGES</button>
                <button className="button-49" onClick={toggleNew}>MYSTERIOUS PLACES</button>
            </div>
            {isShown === 'showPrograms' ? <h1 className="newpage_title"><u>Top 10 Programming Languages to Learn</u></h1> : null}
            {isShown === 'showPlaces' ? <h1 className="newpage_title"><u>Top 10 Places to visit</u></h1> : null}
            {isShown === 'showMysterious' ? <h1 className="newpage_title"><u>Top 10 Mysterious Places in the world</u></h1> : null}
                {isShown === 'showPlaces' ? places: null}
                {isShown === 'showPrograms' ? programs: null}
                {isShown === 'showMysterious' ? mysterious: null}
        </div>
    );
}

