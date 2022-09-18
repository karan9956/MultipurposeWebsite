import React, { useState } from "react"
import "./suryansh_index.css"
import Axios from 'axios'
function Suryansh_App() {

  const [city, setCity] = useState("")
  const [name,setName] = useState("")
  const [weatherData, setWeatherData] = useState(
    {
      name: "",
      description: "",
      temp: 0,
      humidity: 0,
      country: "",
      feels_like: 0,
      wind: 0,
      iconcode: ""
    })
  const searchWeather = () => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e3472808c33c5b3c02d0b8324790051&units=metric`).then((response) => {
      setWeatherData({ name: response.data.name, description: response.data.weather[0].description, temp: response.data.main.temp,humidity: response.data.main.humidity, country: response.data.sys.country, feels_like: response.data.main.feels_like, wind: response.data.wind.speed, iconcode: response.data.weather[0].icon})
    })
  }
  React.useEffect(() => {
    if(Math.round(weatherData.temp)<=0)
    {
      setName("cold")
    }
    else if(Math.round(weatherData.temp)>=35)
    {
      setName("hot")
      
    }
    else if(Math.round(weatherData.temp)>0 && Math.round(weatherData.temp)<=15)
    {
      setName("mild-cold")
    }
    else if(Math.round(weatherData.temp)>15 && Math.round(weatherData.temp)<=25)
    {
      setName("mild")
    }
    else if(Math.round(weatherData.temp)>25 && Math.round(weatherData.temp)<35)
    {
      setName("warm")
    }
  }, [weatherData.temp]);

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(weatherData.name === "") ? 'app' : `${name}`}>
      <main className="weather--main">
        <h1 id="title">Weather<br/>Today</h1>
        <div className="inputs">
          <input type="text" id="user--input" placeholder="Enter City" onChange={(e) => {
            setCity(e.target.value)
            console.log(e.target.value)
          }} />
          <button onClick={searchWeather} id="submit">SUBMIT</button>
        </div>
        {(weatherData.name !=="") ? (
        <div>
        <div className="displayData">
          <h3 id="location">{weatherData.name}, {weatherData.country}</h3>
          <h3 id="date">{dateBuilder(new Date())}</h3>
        </div>
        <div className="weather-box">
            <div className="temp">
              {Math.round(weatherData.temp)}°c
            </div>
            <div className="data">
            <h4>Feels Like : {weatherData.feels_like}°c<br/>Humidity : {weatherData.humidity}%<br/>Wind speed : {weatherData.wind}Km/h</h4>
            </div>
            <div className="weather">
            <img id="wicon" src={`http://openweathermap.org/img/wn/${weatherData.iconcode}@2x.png`} alt="Weather icon"/>
              {weatherData.description}
            </div>
          </div>
        <footer className="footer">
          <a href="https://openweathermap.org" id="weather--anchor" rel="noreferrer" target="_blank">Powered by openweathermap</a>
        </footer>
        </div>
        ) : ('')}
      </main>
    </div>
  )
}
export default Suryansh_App;