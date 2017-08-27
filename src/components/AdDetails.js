import React, { Component } from 'react';
import Advertisement from './containers/Advertisement';

//Details of selected advertisement

class AdDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AdDetails"};
  }

  render() {
    var dummyAddDetails = { title: "New appartment is on sale", description: "New, furnished appartment in the city center...", timeAdded: "25 AUG 2017"};
    return (
      <div>
       <div><h3>Hello, I am: "{this.state.className}"</h3></div>
       <Advertisement element = {dummyAddDetails}/>
      </div>
    );
  }

}

export default AdDetails;