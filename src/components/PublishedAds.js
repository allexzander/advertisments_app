import React, { Component } from 'react';

//Advertisements published by current user

class PublishedAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "PublishedAds"};
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

export default PublishedAds;