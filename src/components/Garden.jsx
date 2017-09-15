import React from "react";
import PropTypes from  "prop-types";
import NewPlantControl from "./NewPlantControl";

class Garden extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPlantList: [],
    };

    this.addNewPlantToList = this.addNewPlantToList.bind(this);
  }

  addNewPlantToList(newPlant) {
    var newMasterPlantList = this.state.masterPlantList.slice();
    newMasterPlantList.push(newPlant);
    this.setState({masterPlantList: newMasterPlantList});
  }

  render() {
    return (
      <div>
        <NewPlantControl onNewPlantCreation= {this.addNewPlantToList}/>
      </div>
    );
  }
}

export default Garden;
