import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faHdd } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { data } from "jquery";

const up = <FontAwesomeIcon icon={faSortUp} />;
const google = <FontAwesomeIcon icon={faGoogle} />;
const direct = <FontAwesomeIcon icon={faMousePointer} />;
const affiliate = <FontAwesomeIcon icon={faUserFriends} />;
const cpu = <FontAwesomeIcon icon={faMicrochip} />;
const hdd = <FontAwesomeIcon icon={faHdd} />;
const bandwidth = <FontAwesomeIcon icon={faWifi} />;

class res extends React.Component {
  state = {
    loading: true,
    userName: null,
    siteTitle: null,
    userLogo: null,
    cpuTotal: null,
    cpuUsed: null,
    storageTotal: null,
    storageUsed: null,
    bandwidthTotal: null,
    bandwidthUsed: null,
    totalT: null,
    sengineT: null,
    directT: null,
    affiliatesT: null,
    totalY: null,
    sengineY: null,
    directY: null,
    affiliatesY: null,
    totalM: null,
    sengineM: null,
    directM: null,
    affiliatesM: null,
    totalLM: null,
    product: null,
    totalSales: null,
    target: null,
    newUsers: null,
  };

  async componentDidMount() {
    var tr = [];
    const url = "https://api.npoint.io/e0faa113a5ab38d976cf";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ userName: data.user[0].username, loading: false });
    this.setState({ siteTitle: data.site.primary.title, loading: false });
    this.setState({ userLogo: data.user[0].profilep, loading: false });
    this.setState({ cpuTotal: data.resources[0].CPU.total, loading: false });
    this.setState({ cpuUsed: data.resources[0].CPU.used, loading: false });
    this.setState({
      storageTotal: data.resources[1].storage.total * 1024,
      loading: false,
    });
    this.setState({
      storageUsed: data.resources[1].storage.used,
      loading: false,
    });
    this.setState({
      bandwidthTotal: data.resources[2].bandwidth.total,
      loading: false,
    });
    this.setState({
      bandwidthUsed: data.resources[2].bandwidth.used,
      loading: false,
    });
    this.setState({
      totalT: data.traffic[0].sources.total,
      loading: false,
    });
    this.setState({
      sengineT: data.traffic[0].sources.sengine,
      loading: false,
    });
    this.setState({
      directT: data.traffic[0].sources.direct,
      loading: false,
    });
    this.setState({
      affiliatesT: data.traffic[0].sources.affiliates,
      loading: false,
    });
    this.setState({
      totalY: data.traffic[1].sources.total,
      loading: false,
    });
    this.setState({
      sengineY: data.traffic[1].sources.sengine,
      loading: false,
    });
    this.setState({
      directY: data.traffic[1].sources.direct,
      loading: false,
    });
    this.setState({
      affiliatesY: data.traffic[1].sources.affiliates,
      loading: false,
    });
    this.setState({
      totalM: data.traffic[2].sources.total,
      loading: false,
    });
    this.setState({
      sengineM: data.traffic[2].sources.sengine,
      loading: false,
    });
    this.setState({
      directM: data.traffic[2].sources.direct,
      loading: false,
    });
    this.setState({
      affiliatesM: data.traffic[2].sources.affiliates,
      loading: false,
    });
    this.setState({
      totalLM: data.traffic[3].sources.total,
      loading: false,
    });
    this.setState({
      totalSales: data.stats[0].sales.today,
      loading: false,
    });
    this.setState({
      salesTarget: data.stats[0].sales.target,
      loading: false,
    });
    this.setState({
      salesCurrent: data.stats[0].sales.current,
      loading: false,
    });
    this.setState({
      newUsers: data.stats[1].users.new,
      loading: false,
    });
  }
}

class UserName extends res {
  render() {
    if (this.state.loading == true) {
      return <h3 className="usr-name">..</h3>;
    } else {
      return <h3 className="usr-name">{this.state.userName}</h3>;
    }
  }
}

class SiteTitle extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      return <div className="nav-logo">{this.state.siteTitle}</div>;
    }
  }
}

class CpuRes extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      return (
        <div className="s-li-wrap d-flex justify-content-start">
          <span className="li-ico">{cpu}</span>
          <span className="li-item">
            CPU ({this.state.cpuUsed}/{this.state.cpuTotal} GHz)
          </span>
        </div>
      );
    }
  }
}

class CpuLoader extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      let dat = Math.round((this.state.cpuUsed / this.state.cpuTotal) * 100);
      let bg = "blue";
      dat > 80 ? (bg = "red") : (bg = "blue");
      const style = {
        width: dat + "%",
        background: bg,
      };
      return (
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={style}
            aria-valuenow="28"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      );
    }
  }
}

class StorageRes extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      return (
        <div className="s-li-wrap d-flex justify-content-start">
          <span className="li-ico">{hdd}</span>
          <span className="li-item">
            Storage ({this.state.storageUsed}/{this.state.storageTotal} TB)
          </span>
        </div>
      );
    }
  }
}

class StorageLoader extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      let dat = Math.round(
        (this.state.storageUsed / this.state.storageTotal) * 100
      );
      let bg = "blue";
      dat > 80 ? (bg = "red") : (bg = "blue");
      const style = {
        width: dat + "%",
        background: bg,
      };
      return (
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={style}
            aria-valuenow="28"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      );
    }
  }
}

class BandwidthRes extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      return (
        <div className="s-li-wrap d-flex justify-content-start">
          <span className="li-ico">{bandwidth}</span>
          <span className="li-item">
            Bandwidth ({this.state.bandwidthUsed}/{this.state.bandwidthTotal}{" "}
            Mbps)
          </span>
        </div>
      );
    }
  }
}

class BandwidthLoader extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="nav-logo">..</div>;
    } else {
      let dat = Math.round(
        (this.state.bandwidthUsed / this.state.bandwidthTotal) * 100
      );
      let bg = "blue";
      dat > 80 ? (bg = "red") : (bg = "blue");
      const style = {
        width: dat + "%",
        background: bg,
      };
      return (
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={style}
            aria-valuenow="28"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      );
    }
  }
}

class TodayTraffic extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="card-wrapper">..</div>;
    } else {
      let sty = { color: "green", transform: "rotate(0deg)" };
      if (this.state.totalT < this.state.totalY) {
        sty.color = "red !important";
        sty.transform = "rotate(180deg)";
        console.log(sty.color);
      }
      let se =
        Math.round((this.state.sengineT / this.state.totalT) * 100) + "%";
      console.log(this.state.sengineT);
      let d = Math.round((this.state.directT / this.state.totalT) * 100) + "%";
      let af =
        Math.round((this.state.affiliatesT / this.state.totalT) * 100) + "%";

      return (
        <div className="card-wrapper">
          <h3 className="card-title">Today</h3>
          <div className="card-stat d-flex justify-content-between">
            <h5 className="card-stat-num">{this.state.totalT}</h5>
            <div className="card-stat-ico" style={sty}>
              {up}
            </div>
          </div>
          <div className="card-source">
            <div className="card-source-row d-flex justify-content-between">
              <div className="card-source-sr">
                <span className="card-source-ico">{google}</span> Search Engine
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
                <span className="card-source-ico">{affiliate}</span> Affiliates
              </div>
              <h6 className="card-source-num">{af}</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}

class YesterdayTraffic extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="card-wrapper">..</div>;
    } else {
      let se =
        Math.round((this.state.sengineY / this.state.totalY) * 100) + "%";
      let d = Math.round((this.state.directY / this.state.totalY) * 100) + "%";
      let af =
        Math.round((this.state.affiliatesY / this.state.totalY) * 100) + "%";

      return (
        <div className="card-wrapper">
          <h3 className="card-title">Yesterday</h3>
          <div className="card-stat d-flex justify-content-between">
            <h5 className="card-stat-num">{this.state.totalY}</h5>
            <div className="card-stat-ico">{up}</div>
          </div>
          <div className="card-source">
            <div className="card-source-row d-flex justify-content-between">
              <div className="card-source-sr">
                <span className="card-source-ico">{google}</span> Search Engine
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
                <span className="card-source-ico">{affiliate}</span> Affiliates
              </div>
              <h6 className="card-source-num">{af}</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}

class MonthTraffic extends res {
  render() {
    if (this.state.loading == true) {
      return <div className="card-wrapper">..</div>;
    } else {
      let sty = { color: "green", transform: "rotate(0deg)" };
      console.log("less");
      console.log(this.state.totalM, this.state.TotalLM);
      if (this.state.totalM < this.state.totalLM) {
        sty.color = "red !important";
        sty.transform = "rotate(180deg)";
      }
      let se =
        Math.round((this.state.sengineM / this.state.totalM) * 100) + "%";
      let d = Math.round((this.state.directM / this.state.totalM) * 100) + "%";
      let af =
        Math.round((this.state.affiliatesM / this.state.totalM) * 100) + "%";

      return (
        <div className="card-wrapper">
          <h3 className="card-title">This Month</h3>
          <div className="card-stat d-flex justify-content-between">
            <h5 className="card-stat-num">{this.state.totalM}</h5>
            <div className="card-stat-ico" style={sty}>
              {up}
            </div>
          </div>
          <div className="card-source">
            <div className="card-source-row d-flex justify-content-between">
              <div className="card-source-sr">
                <span className="card-source-ico">{google}</span> Search Engine
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
                <span className="card-source-ico">{affiliate}</span> Affiliates
              </div>
              <h6 className="card-source-num">{af}</h6>
            </div>
          </div>
        </div>
      );
    }
  }
}

class TotalSales extends res {
  render() {
    return this.state.totalSales;
  }
}
class TargetSales extends res {
  render() {
    let width = (this.state.salesCurrent / this.state.salesTarget) * 100;
    let style = { width: width + "%" };
    return (
      <div className="top-right right-card d-flex flex-column col-sm-5">
        <h6>Target</h6>
        <h3>{this.state.salesTarget}</h3>
        <div className="progress deck-progress-main">
          <div
            className="progress-bar deck-progress"
            role="progressbar"
            style={style}
            aria-valuenow="28"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h6>Current: {this.state.salesCurrent}</h6>
      </div>
    );
  }
}
class NewUsers extends res {
  render() {
    return this.state.newUsers;
  }
}



export {
  UserName,
  SiteTitle,
  CpuRes,
  CpuLoader,
  StorageRes,
  StorageLoader,
  BandwidthRes,
  BandwidthLoader,
  TodayTraffic,
  YesterdayTraffic,
  MonthTraffic,
  TotalSales,
  TargetSales,
  NewUsers,
};
