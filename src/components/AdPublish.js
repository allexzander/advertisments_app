import React, { Component } from 'react';

//New advertisement publish form

class AdPublish extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AdPublish"};
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

export default AdPublish;