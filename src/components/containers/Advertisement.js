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
    return (
      <div>
       <div><h3>Hello, I am: "{this.state.className}"</h3></div>
       <div><em>Implement me!</em></div>
      </div>
    );
  }

}

export default Advertisement;