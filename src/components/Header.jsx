import React from "react";

function Header(){

  var headerStyles = {
    backgroundColor: "#94cca5",
    fontFamily: "Times New Roman",
    textAlign: "center",
    padding: "10px"
  }
  return (
    <div style={headerStyles}>
      <h1>Plant Store!</h1>
      <hr/>
    </div>
  );
}

export default Header;
