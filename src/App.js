import React from "react";
import logo from "./man.png";
import iphone from "./iphone.png";
import charger from "./charger.png";
import airpods from "./airpods.png";
import watch from "./watch.png";
import ReactDOM from "react-dom";
import Example from "./Chart";
import $ from "jquery";
import { ResponsiveContainer, LineChart, Line } from "recharts";
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
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
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
const filter = <FontAwesomeIcon icon={faFilter} />;
const option = <FontAwesomeIcon icon={faCaretDown} />;
const data = [
  { name: "Monday", uv: 7800 },
  { name: "Tuesday", uv: 6100 },
  { name: "Wednesday", uv: 12000 },
  { name: "Thursday", uv: 10000 },
];

const renderLineChart = (
  <ResponsiveContainer width="100%" height="80%">
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

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
                <a
                  tabindex="0"
                  class="btn btn-lg btn-danger"
                  role="button"
                  data-toggle="popover"
                  data-trigger="focus"
                  title="Dismissible popover"
                  data-content="Click anywhere to dismiss this popover"
                >
                  <div className="usr-arrow">{arrowDown}</div>
                </a>
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

          <Example></Example>
          <div className="deck container-fluid">
            <div className="deck-wrapper row justify-content-between">
              <div className="deck-left col-6 ">
                <div className="left-title d-flex justify-content-between">
                  <h4>Trending Products</h4>

                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Category
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu1"
                    >
                      <a className="dropdown-item" href="#!">
                        Action
                      </a>
                      <a className="dropdown-item" href="#!">
                        Another action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="left-content">
                  <div class="">
                    <table class="table table-striped table-borderless trending-table table-responsive">
                      <thead class="thead-dark">
                        <tr>
                          <th>Product</th>
                          <th>Popularity</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src={iphone}></img>Apple Iphone 12
                          </td>
                          <td>+51%</td>
                          <td>{option}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={airpods}></img>Apple Earpods Gen 3
                          </td>
                          <td>+35%</td>
                          <td>{option}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={watch}></img>Apple Watch Gen 6
                          </td>
                          <td>+29%</td>
                          <td>{option}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={charger}></img>Apple MagSafe Charger
                          </td>
                          <td>+16%</td>
                          <td>{option}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="deck-right col-6 ">
                <div className="right-wrapper container-fluid">
                  <div className="right-top row">
                    <div className="top-left right-card  col-6">
                      <h6>Total Sales</h6>
                      <h3>$25k</h3>
                      {renderLineChart}
                    </div>
                    <div className="top-right right-card d-flex flex-column col-5">
                      <h6>Target</h6>
                      <h3>$200k</h3>
                      <div class="progress deck-progress-main">
                        <div
                          className="progress-bar deck-progress"
                          role="progressbar"
                          style={{ width: "68%" }}
                          aria-valuenow="28"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h6>Current: 138,000</h6>
                    </div>
                  </div>
                  <div className="right-bottom row">
                    <div className="top-right right-card  col-5">
                      <h5>Ad-Campaigns</h5>
                      <p class="font-italic">No campaigns yet</p>
                      <button class="campaign-btn">Start Now</button>
                    </div>
                    <div className="top-left right-card  col-6">
                      <h6>New Users</h6>
                      <h3>+231</h3>
                      {renderLineChart}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="table-wrapper">
            <h2 className="section-title">Orders</h2>
            <div class="table-responsive">
              <table class="table table-striped table-borderless" id="table">
                <thead class="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Product ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>25/06/2021</td>
                    <td>5331</td>
                    <td>$321.6</td>
                    <td class="td-status processing">Processing</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>25/06/2021</td>
                    <td>9984</td>
                    <td>$411.2</td>
                    <td class="td-status processing">Processing</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>24/06/2021</td>
                    <td>1330</td>
                    <td>$16.6</td>
                    <td class="td-status processing">Processing</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>24/06/2021</td>
                    <td>8945</td>
                    <td>$72.5</td>
                    <td class="td-status shipped">Shipped</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>24/06/2021</td>
                    <td>3335</td>
                    <td>$125.46</td>
                    <td class="td-status shipped">Shipped</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>24/06/2021</td>
                    <td>2785</td>
                    <td>$687.0</td>
                    <td class="td-status shipped">Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
