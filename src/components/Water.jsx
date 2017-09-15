import React from "react";
import PropTypes from "prop-types";


class Water extends React.Component {

  constructor(props) {
    super(props);
    this.addWater = this.addWater.bind(this);
    this.state = {
      like: 0,
    }
  }

  addWater() {
    var newWater = this.state.like + 1;
    this.setState({like: newWater});
    alert(`Hello, you've pressed the button`);
  }

  render() {
  return (
    <div>
        <button onClick={this.addWater}>Water!</button>
        <p><em>Waters: </em>{this.state.like}</p>
    </div>
  )

  }
}

export default Water;
