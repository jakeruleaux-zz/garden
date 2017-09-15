import React from "react";
import PropTypes from "prop-types";
import GardenModel from "../models/GardenModel.js"

class NewPlant extends React.Component{

  constructor(props) {
    super(props);
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault()
    const { _plantname, _type, _water, _cost} = this.refs;
    var newPlant = new GardenModel( _plantname.value, _type.value, _water.value, _cost.value);
    this.props.onNewPlantCreation(newPlant);
    _plantname.value = "";
    _type.value = "";
    _water.value = "";
    _cost.value = "";
    this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewPlantFormSubmission}>
          <input
            ref="_plantname"
            type="text"
            id="plantname"
            placeholder="plantname"/>
          <input
            ref="_type"
            type="text"
            id="type"
            placeholder="type"/>
          <input
            ref="_water"
            type="text"
            id="water"
            placeholder="water"/>
          <input
            ref="_cost"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="cost"
            placeholder="cost"/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

NewPlant.propTypes = {
  onNewPlantCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
}

export default NewPlant;
