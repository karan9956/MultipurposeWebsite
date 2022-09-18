import React from 'react';
import Stb from './stb.js';
import ReactDOM from 'react-dom';
import './filescss.css';
export default function St() {
    const [sok, setsok] = React.useState({ kw: "" })
    function hS(eventt) {
        setsok(items => {
            return {
                ...items,
                [eventt.target.name]: eventt.target.value
            }
        })
    }
    function shows() {
        ReactDOM.render(<Stb sok={sok} />, document.getElementById('datArea2'))
    }
    
    return (
        <div className="temp1">
            <div><label htmlFor="ip1" className="labell">Search Stock</label>
                <input id="ip1" type="text" className="ip" onChange={hS} name="kw" onKeyPress={
                    event => {
                        if (event.key === 'Enter') {
                            { shows() }
                        }
                    }
                } />
                <button className="buttoncur" onClick={shows}>></button></div>
            <div id="datArea2" className="stockss"></div>
        </div>
    )
}