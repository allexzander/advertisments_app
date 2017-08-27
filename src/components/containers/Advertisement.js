import React, { Component } from 'react';

/*
    Advertisement item. Used in AdvertisementList.
*/

class Advertisement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "Advertisement"};
  }

  render() {
    if (this.props.element)
    {
      this.validateData();
    }

    var elementValue = "";

    if (this.props.element) {
      elementValue = elementValue.concat(this.props.element.title, " ", this.props.element.description, " ", this.props.element.timeAdded);
    }

    return (
      <li>{elementValue}</li>
    );
  }

  validateData() {
    if (!this.props.element.title || !this.props.element.description || !this.props.element.timeAdded)
    {
      throw new Error("Incorrect data passed to Advertisement");
    }
  }

}

export default Advertisement;