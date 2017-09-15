import React from "react";
import PropTypes from "prop-types";
import NewPlant from "./NewPlant";

class NewPlantControl extends React.Component {

  constructor(props) {
    super(props
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm(event) {
  this.setState({formVisibleOnPage: true});
  }

  hideForm(event) {
  this.setState({formVisibleOnPage: false});
  }

  render() {
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <NewPlant onNewPlantCreation={this.props.onNewPlantCreation} hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Add a Plant</button>;
    }

    return(
      <div>
        {formAreaContent}
      </div>
    );
  }
}

NewPlantControl.propTypes = {
  onNewPlantCreation: PropTypes.func,
}


export default NewPlantControl;
