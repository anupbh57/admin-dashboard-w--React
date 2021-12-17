import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip } from "@fortawesome/free-brands-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
const up = <FontAwesomeIcon icon={faSortUp} />;
const google = <FontAwesomeIcon icon={faGoogle} />;
const direct = <FontAwesomeIcon icon={faMousePointer} />;
const affiliate = <FontAwesomeIcon icon={faUserFriends} />;

class res extends React.Component {
  traffic = {
    loading: true,
    todayTotal: null,
    todaySe: null,
    todayD: null,
    todayAf: null,
    yesterdayTotal: null,
    yesterdaySE: null,
    yesterdayD: null,
    yesterdayAL: null,
    month: null
  };
  
  async componentDidMount() {
    const url = "https://api.npoint.io/30cbb80f8eb05eb35489";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({todayTotal: data.traffic[0].sources.total , loading: false });
    this.setState({todaySe: data.traffic[0].sources.sengine , loading: false });
    this.setState({ todayD: data.traffic[0].sources.direct, loading: false });
    this.setState({ todayAf: data.traffic[0].sources.affiliates, loading: false });
    console.log(this.traffic.todayTotal);
  }
}

class TodayTraffic extends res {
    render() {
        let se = ((this.todaySE/this.todayTotal)*100) + "%";
        let d = (this.todayD / this.todayTotal) * 100 + "%";
        let af = (this.todayAf / this.todayTotal) * 100 + "%";
if (this.traffic.loading == null) {
      return <div className="card-wrapper">..</div>;
    } else {
        return (
          <div className="card-wrapper">
            <h3 className="card-title">Today</h3>
            <div className="card-stat d-flex justify-content-between">
              <h5 className="card-stat-num">{this.traffic.todayTotal}</h5>
              <div className="card-stat-ico">{up}</div>
            </div>
            <div className="card-source">
              <div className="card-source-row d-flex justify-content-between">
                <div className="card-source-sr">
                  <span className="card-source-ico">{google}</span> Search
                  Engine
                </div>
                <h6 className="card-source-num">{se}</h6>
              </div>
              <div className="card-source-row d-flex justify-content-between">
                <div className="card-source-sr">
                  <span className="card-source-ico">{direct}</span> Direct
                </div>
                <h6 className="card-source-num">{d}</h6>
              </div>
              <div className="card-source-row d-flex justify-content-between">
                <div className="card-source-sr">
                  <span className="card-source-ico">{affiliate}</span>{" "}
                  Affiliates
                </div>
                <h6 className="card-source-num">{af}</h6>
              </div>
            </div>
          </div>
        );
    }
    }
}

export {TodayTraffic};