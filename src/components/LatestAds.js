import React, { Component } from 'react';

//Latest ads feed. Sorted with newest ads going first.

class LatestAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "LatestAds"};
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

export default LatestAds;