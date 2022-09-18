import React from 'react';
import ReactDOM from 'react-dom';
import Stq from './stq.js';
import api from './apitoken.js';
function Stb(sok) {

    const [datas, setDatas] = React.useState([])
    React.useEffect(() => {

        let str = `https://alpha-vantage.p.rapidapi.com/query?keywords=${sok.sok.kw}&function=SYMBOL_SEARCH&datatype=json`
        fetch(str, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key": api
            }
        })
            .then(res => res.json())
            .then(datas => setDatas(datas))
    }, [sok])
    

    if (JSON.stringify(datas["bestMatches"]) != null) {
        const dt = datas["bestMatches"]

        var arr = new Array((dt).length)
        

        for (let i = 0; i < (dt).length; i++) {
            let datt = {
                symbol: (dt[i])["1. symbol"], name: (dt[i])["2. name"], type: (dt[i])["3. type"],
                region: (dt[i])["4. region"],
                marketOpen: (dt[i])["5. marketOpen"],
                marketClose: (dt[i])["6. marketClose"],
                timezone: (dt[i])["7. timezone"],
                currency: (dt[i])["8. currency"],
                matchScore: (dt[i])["9. matchScore"]
            }
            arr[i] = datt
        }
        

        let fin = arr.map(item => {
            function showres() {
                
                const arr1 = < Stq quo={item.symbol} />
                ReactDOM.render(
                    <div className="detailmaindiv"><div>
                        <label htmlFor="detailsubdiv" className="labell">Stock Detail</label>
                        <div id="detailsubdiv" className="detailsubdiv">
                            <p>Name:                    {item.name}</p>
                            <p>Type:                    {item.type}</p>
                            <p>Region:                {item.region}</p>
                            <p>Market Open:       {item.marketOpen}</p>
                            <p>Market Close:     {item.marketClose}</p>
                            <p>Tmezone:             {item.timezone}</p>
                            <p>Currency:            {item.currency}</p>
                            <p>Match Score:       {item.matchScore}</p>

                        </div></div>
                        <div>{arr1}</div>
                    </div>, document.getElementById("stockres")
                )
                
            }
            return (

                <div>
                    <button onClick={showres} className="buttoncur2">{item.name} --- {item.symbol}</button>
                </div>


            )
        })
        

        return (<div className="pg">
            <div className="scrollist">{fin}</div>
            <div id="stockres"></div>
        </div>
        )
    }
    return (<div className="pg">
        <div>NO DATA</div>
        <div id="stockres"></div>
    </div>)

}

export default Stb;