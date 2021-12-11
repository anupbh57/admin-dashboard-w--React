import React from "react";
import logo from "./man.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
const arrowDown = <FontAwesomeIcon icon={faChevronDown} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const cog = <FontAwesomeIcon icon={faCog} />;
const powerOff = <FontAwesomeIcon icon={faPowerOff} />;

const userName = "Anup Bhandari";
const notifNumber = 12;
function App() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="nav-wrapper d-flex justify-content-between">
          <div className="nav-logo">LOGO</div>
          <div className="nav-right d-flex justify-content-between">
            <div className="nav-search input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
              ></input>
            </div>
            <div className="nav-profile d-flex justify-content-center">
              <div className="nav-profile-left d-flex justify-content-center">
                <img src={logo} className="usr-logo"></img>

                <h3 class="usr-name">{userName}</h3>
                <div className="notif">{notifNumber}</div>
                <div className="usr-arrow">{arrowDown}</div>
              </div>
            </div>
            <div className="nav-controls d-flex justify-content-between">
              {cog}
              {powerOff}
            </div>
          </div>
        </div>
      </nav>

      <div className="d-flex w-100 main-wrapper">
        <div className="sidebar w-30 container-fluid">
          <div className="sidebar-wrapper row">
            <div className="logo-container col-12">
              <h2>LOGO</h2>
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
        <div className="content w-70"></div>
      </div>
    </div>
  );
}

export default App;
