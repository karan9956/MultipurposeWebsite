import React from 'react';
import api from './apitoken.js';

export default function Stq(quo) {

    const [dataq, setDataq] = React.useState([])
    React.useEffect(() => {

        let str = `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${quo.quo}&datatype=json`

        fetch(str, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": api
            }
        })
            .then(res => res.json())
            .then(dataq => setDataq(dataq))
    }, [quo])
    console.log("Reached Quote")
    const dat = dataq["Global Quote"]
    if (dat != null) {
        return (
            <div className="maindiv"><label htmlFor="quotediv" className="labell">Stock Quote</label>
                <div id="quotediv" className="quotediv">
                    <p>Symbol:                           {dat["01. symbol"]}</p>
                    <p>Open:                               {dat["02. open"]}</p>
                    <p>High:                               {dat["03. high"]}</p>
                    <p>Low:                                 {dat["04. low"]}</p>
                    <p>Price:                             {dat["05. price"]}</p>
                    <p>Volume:                           {dat["06. volume"]}</p>
                    <p>Latest Trading Day:   {dat["07. latest trading day"]}</p>
                    <p>Previous Close:           {dat["08. previous close"]}</p>
                    <p>Change:                           {dat["09. change"]}</p>
                    <p>Change %:                 {dat["10. change percent"]}</p>
                </div>
            </div>
        )
    }
    else {
        return (null)
    }
}


