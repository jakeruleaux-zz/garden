import React from "react";
import PropTypes from "prop-types";
import Water from "./Water";

function PLant(props){

  var plantStyles = {
    fontFamily: "Times New Roman",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#22422c",
    padding: "10px"
  }

  return (
    <div style={plantStyles}>
      <h3>Plant: {props.plantname} - Type: {props.type} - Cost: ${props.cost}.00</h3>
      <p><em>Needs water: {props.water}</em></p>
      <Water />
    </div>
  );
}

PLant.propTypes = {
  type: PropTypes.string.isRequired,
  plantname: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired
};

export default PLant;
