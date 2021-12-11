import React from "react";
import logo from "./man.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faHdd } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
const arrowDown = <FontAwesomeIcon icon={faChevronDown} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const cog = <FontAwesomeIcon icon={faCog} />;
const powerOff = <FontAwesomeIcon icon={faPowerOff} />;
const home = <FontAwesomeIcon icon={faHome} />;
const database = <FontAwesomeIcon icon={faDatabase} />;
const user = <FontAwesomeIcon icon={faUser} />;
const tools = <FontAwesomeIcon icon={faTools} />;
const shop = <FontAwesomeIcon icon={faShoppingBasket} />;
const up = <FontAwesomeIcon icon={faSortUp} />;
const google = <FontAwesomeIcon icon={faGoogle} />;
const direct = <FontAwesomeIcon icon={faMousePointer} />;
const affiliate = <FontAwesomeIcon icon={faUserFriends} />;
const cpu = <FontAwesomeIcon icon={faMicrochip} />;
const hdd = <FontAwesomeIcon icon={faHdd} />;
const bandwidth = <FontAwesomeIcon icon={faWifi} />;


const siteTitle = "prototype";
const userName = "admin";
const notifNumber = 12;
function App() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="nav-wrapper d-flex justify-content-between">
          <div className="nav-logo">{siteTitle}</div>
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

      <div className="main-content d-flex justify-content-between">
        <div className="sidebar container-fluid">
          <div className="sidebar-wrapper row">
            <div className="sidebar-content">
              <div className="s-wrapper">
                <ul className="s-list">
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{home}</span>
                    <span className="li-item">Home</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{database}</span>
                    <span className="li-item">Database</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{user}</span>
                    <span className="li-item">Profile</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{tools}</span>
                    <span className="li-item">Widgets</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{envelope}</span>
                    <span className="li-item">Email</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{shop}</span>
                    <span className="li-item">E-commerce</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-title">Components</div>
            <div className="sidebar-content">
              <div className="s-wrapper">
                <ul className="s-list">
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{home}</span>
                    <span className="li-item">Home</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{database}</span>
                    <span className="li-item">Database</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{user}</span>
                    <span className="li-item">Profile</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{tools}</span>
                    <span className="li-item">Widgets</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{envelope}</span>
                    <span className="li-item">Email</span>
                  </li>
                  <li className="s-li d-flex justify-content-start">
                    <span className="li-ico">{shop}</span>
                    <span className="li-item">E-commerce</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar-title">Resources</div>
            <div className="sidebar-content">
              <div className="s-wrapper">
                <ul className="s-list">
                  <li className="s-li resource d-flex flex-column justify-content-start">
                    <div className="s-li-wrap d-flex justify-content-start">
                      <span className="li-ico">{cpu}</span>
                      <span className="li-item">CPU (1.1/3.1GHz)</span>
                    </div>
                    <div class="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "58%" }}
                        aria-valuenow="28"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="s-li resource d-flex flex-column justify-content-start">
                    <div className="s-li-wrap d-flex justify-content-start">
                      <span className="li-ico">{hdd}</span>
                      <span className="li-item">Storage (63GB/1TB)</span>
                    </div>
                    <div class="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "6%" }}
                        aria-valuenow="28"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li className="s-li resource d-flex flex-column justify-content-start">
                    <div className="s-li-wrap d-flex justify-content-start">
                      <span className="li-ico">{bandwidth}</span>
                      <span className="li-item">Bandwidth (32/100Mbps)</span>
                    </div>
                    <div class="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "32%" }}
                        aria-valuenow="28"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <h2 className="section-title">Traffic Analytics</h2>
          <div className="card-display card-deck">
            <div className="card">
              <div className="card-wrapper">
                <h3 className="card-title">Today</h3>
                <div className="card-stat d-flex justify-content-between">
                  <h2 className="card-stat-num">5400</h2>
                  <div className="card-stat-ico">{up}</div>
                </div>
                <div className="card-source">
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{google}</span> Search
                      Engine
                    </div>
                    <h6 className="card-source-num">36%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{direct}</span> Direct
                    </div>
                    <h6 className="card-source-num">28%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{affiliate}</span>{" "}
                      Affiliates
                    </div>
                    <h6 className="card-source-num">9%</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="card-title">Yesterday</h3>
                <div className="card-stat d-flex justify-content-between">
                  <h5 className="card-stat-num">3208</h5>
                  <div className="card-stat-ico">{up}</div>
                </div>
                <div className="card-source">
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{google}</span> Search
                      Engine
                    </div>
                    <h6 className="card-source-num">42%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{direct}</span> Direct
                    </div>
                    <h6 className="card-source-num">19%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{affiliate}</span>{" "}
                      Affiliates
                    </div>
                    <h6 className="card-source-num">39%</h6>
                  </div>
                </div>
              </div>
              <div id="overlay"></div>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="card-title">This Month</h3>
                <div className="card-stat d-flex justify-content-between">
                  <h2 className="card-stat-num">186,128</h2>
                  <div className="card-stat-ico">{up}</div>
                </div>
                <div className="card-source">
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{google}</span> Search
                      Engine
                    </div>
                    <h6 className="card-source-num">58%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{direct}</span> Direct
                    </div>
                    <h6 className="card-source-num">28%</h6>
                  </div>
                  <div className="card-source-row d-flex justify-content-between">
                    <div className="card-source-sr">
                      <span className="card-source-ico">{affiliate}</span>{" "}
                      Affiliates
                    </div>
                    <h6 className="card-source-num">14%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
