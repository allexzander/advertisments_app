import React, { Component } from 'react';

class SavedAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "SavedAds"};
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

export default SavedAds;