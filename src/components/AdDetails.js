import React, { Component } from 'react';

//Details of selected advertisement

class AdDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AdDetails"};
  }

  render() {
    return (
      <div>
       <div><h3>Hello, I am: "{this.state.className}"</h3></div>
       <div><em>Implement me!</em></div>
      </div>
    );
  }

}

export default AdDetails;