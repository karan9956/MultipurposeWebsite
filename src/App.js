import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MainContent from "./pages/MainContent";
import NewPage from "./pages/newpage";
import Contact from "./pages/Contact";
import Suryansh_App from "./pages/suryansh_App";
import Ayush_App from "./pages/Ayush_App";
import Finance_App from "./pages/finance_App";
import Raunak_NewPage from "./pages/Raunak_NewPage";
import Karan_App from "./pages/karan_App";
import logo from "./logo7.png";
function App() {
  return (
    <BrowserRouter>
      <nav className="total-nav">
        <img src={logo} className="logo"></img>
        <ul id="navbar">
          <li><button className="navbar-button"><Link to="/">Home</Link></button></li>
          <li><button className="navbar-button"><Link to="/about">About us</Link></button></li>
          <li><button className="navbar-button">DropDown</button>
            <ul className="drop">
              <div className="drop-content">
                <li><Link to="/ayush">latest News</Link></li>
                <li><Link to="/suryansh">Current weather</Link></li>
                <li><Link to="/newpage">Top 10 lists</Link></li>
                <li><Link to="/project">F2P games</Link></li>     
                <li><Link to="/ayushFinance">Finance</Link></li>
                <li><Link to="/raunak">Sports</Link></li>
                <li><Link to="/karan">calculator</Link></li>
              </div>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/project" element={<MainContent />} />
          <Route path="/newpage" element={<NewPage/>} />
          <Route path="/suryansh" element={<Suryansh_App />}/> 
          <Route path="/ayush" element={<Ayush_App />}/>
          <Route path="/ayushFinance" element={<Finance_App />}/>
          <Route path="/raunak" element={<Raunak_NewPage />} />
          <Route path="/karan" element={<Karan_App/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
