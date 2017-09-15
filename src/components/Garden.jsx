import React from "react";
import PropTypes from  "prop-types";
import NewPlantControl from "./NewPlantControl";
import PlantList from "./PlantList";

class Garden extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: [],
    };

    this.addNewPlantToList = this.addNewPlantToList.bind(this);
    this.updatePlantTimeSinceWatered = this.updatePlantTimeSinceWatered.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.timeSinceWateredTest = setInterval(() =>
    this.updatePlantTimeSinceWatered(),
    5000
    );
  }

  addNewPlantToList(newPlant) {
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

  updatePlantTimeSinceWatered() {
    let newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.forEach((plant) =>
    plant.setTimeSinceWatered()
    );
    this.setState({masterPlantList: newMasterPlantList})
  }

  render() {
    return (
      <div>
        <NewPlantControl onNewPlantCreation= {this.addNewPlantToList}/>
        <PlantList plantList = {this.state.masterPlantList}/>
      </div>
    );
  }
}

export default Garden;
