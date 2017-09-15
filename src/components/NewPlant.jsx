import React from "react";
import PropTypes from "prop-types";

class NewPlant extends React.Component{

  constructor(props) {
    super(props);
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault()
    const { _plantname, _type, _water, _cost} = this.refs;
    var newPlant = new Plant( _plantname.value, _type.value, _water.value, _cost.value);
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
            type="text"
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
