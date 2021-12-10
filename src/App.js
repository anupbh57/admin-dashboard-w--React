import React from "react";
import logo from "./man.png";
const userName = "Anup Bhandari"
function App() {
  return (
    <div className="main container-fluid">
      <div className="row main-wrapper">
        <div className="sidebar col-2 container-fluid">
          <div className="sidebar-wrapper row">
            <div className="logo-container col-12">
              <img src={logo} className="logo"></img>
            </div>
            <div className="sidebar-content col-12">
              <div className="s-wrapper">
                <ul className="s-list">
                  <li className="s-li">Dashboard</li>
                  <li className="s-li">Account</li>
                  <li className="s-li">Schedule</li>
                  <li className="s-li">About</li>
                  <li className="s-li">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content col-10">
          <nav className="nav">
            <div className="nav-wrapper d-flex justify-content-between">
              <div className="nav-profile d-flex">
                <img src = {logo} className = "usr-logo"></img>
                <h3 class = "usr-name">{userName}</h3>
              </div>
              <div className="nav-logo">
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
