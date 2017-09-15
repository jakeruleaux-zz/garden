import React from "react";
import Plant from './Plant';
import PropTypes from 'prop-types';

function PlantList(props){

  return (
    <div>
      <hr/>
      {props.plantList.map((plant, index) =>
        <Plant plantname={plant.plantname}
          type={plant.type}
          cost={plant.cost}
          water={plant.water}
          key={index}/>
      )}
    </div>
  );
}

PlantList.propTypes = {
  plantList: PropTypes.array.isRequired
};

export default PlantList;