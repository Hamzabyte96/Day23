import React, { Component } from "react";

class Form extends Component {
  initialState = {
    firstName: "",
    lastName: "",
  };

  state = this.initialState;
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  render() {
      const { firstName, lastName } = this.state;

      return (
          <form>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" value={firstName}
              onChange={this.handleChange} />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" value={lastName}
              onChange={this.handleChange} />
          </form>
      )
  }
}

submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    return(
        <input type="button" value="Submit" onClick={this.submitForm} /> 
    )
      
}

export default Form;
