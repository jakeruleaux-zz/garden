import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";


class Water extends React.Component {

  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.state = {
      water: 0,
    }
  }

  componentDidMount() {
    this.life = setInterval(() =>
    this.addWater(), 1000 );

}


  addWater() {
    var newWater = new Date().toLocaleTimeString();
    console.log(newWater);
    this.setState({water: newWater});

  }

  render() {
  return (
    <div>
        <button onClick={this.addWater}>Water!</button>
        <p><em>Time since water: </em>{this.state.water}</p>

    </div>
  )

  }
}

export default Water;
