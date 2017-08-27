import React, { Component } from 'react';
import "../../css/advertisementListItem.css";

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
      elementValue = <span className="ad_list_element_title">{this.props.element.title}
        <span className="ad_list_element_description">{this.props.element.description}</span> <span className="ad_list_element_timestamp">{this.props.element.timeAdded}</span></span>;
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