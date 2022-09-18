import React from 'react';
import api from './apitoken.js';
import './filescss.css'
function Crb(cur) {

    const [data, setData] = React.useState([])
    React.useEffect(() => {

        let str = `https://alpha-vantage.p.rapidapi.com/query?to_currency=${cur.cur.to}&function=CURRENCY_EXCHANGE_RATE&from_currency=${cur.cur.from}`
        fetch(str, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": api
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [cur])
    console.log(data)
    const tempData = data["Realtime Currency Exchange Rate"]
    if (JSON.stringify(tempData) != null) {
        const tat = [

            tempData["5. Exchange Rate"],
            cur.cur.amt * (parseFloat(tempData["5. Exchange Rate"]))
        ]
        return (
            <div className="result">
                <p className="returndata">Exchange Rate : {tat[0]}</p>
                <p className="returndata1">Your amount : {tat[1]}</p>
            </div>
        )
    }
    else {
        return (
            <div className="result">
                <p className="errordata">Data Not Avialable</p>
            </div>
        )
    }

}

export default Crb;