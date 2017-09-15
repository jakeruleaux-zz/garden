import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";


class Water extends React.Component {

  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.tilWater = this.tilWater.bind(this);
    this.state = {
      water: [],
      moreWater: [],
    }
  }

  addWater() {
    var newWater = new Date().toLocaleString();
    this.setState({water: newWater});
  }

  tilWater() {
    var timeToWater = new Date().toLocaleTimeString();
    this.setState({moreWater: timeToWater});

  }

  componentDidMount() {
    this.moreWater = setInterval(() =>
    this.tilWater(), 1000 );

  }

  render() {
    return (
      <div>
        <button onClick={this.addWater}>Water!</button>
        <p><em>Last watered at: </em>{this.state.water}</p>
      </div>
    )

  }
}

export default Water;
