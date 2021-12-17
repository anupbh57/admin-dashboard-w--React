import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faHdd } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
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
    bandwidthUsed: null
  };

  async componentDidMount() {
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
      bandwidthUsed: data.resources[2].bandwidth.used ,
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
            Bandwidth ({this.state.bandwidthUsed}/{this.state.bandwidthTotal} Mbps)
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

export { UserName, SiteTitle, CpuRes, CpuLoader, StorageRes, StorageLoader, BandwidthRes, BandwidthLoader };
