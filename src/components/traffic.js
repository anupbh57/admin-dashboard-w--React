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
    todayTotal: null
  };

  async componentDidMount() {
    const url = "https://api.npoint.io/30cbb80f8eb05eb35489";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ todayTraffic: data.traffic[0].sources.today, loading: false });
    console.log(this.state.todayTotal)
  }
}

class TodayTraffic extends res {
  render() {
    if (this.state.loading == true) {
      return <h3 className="usr-name">..</h3>;
    } else {
      return <h3 className="usr-name">{this.state.todayTotal}</h3>;
    }
  }
}

export {TodayTraffic
};
