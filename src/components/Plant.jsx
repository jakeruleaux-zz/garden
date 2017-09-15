import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function PLant(props){
  return (
    <div>
      <h3>{props.plantname} - {props.type} - {props.cost}</h3>
      <p><em>{props.water}</em></p>
      <p>{props.timeSinceWatered}</p>
      <hr/>
    </div>
  );
}

PLant.propTypes = {
  type: PropTypes.string.isRequired,
  plantname: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired,
  timeSinceWatered: PropTypes.string.isRequired
};

export default PLant;
