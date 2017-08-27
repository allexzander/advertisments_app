import React, { Component } from 'react';
import Advertisement from './Advertisement';

/*
    AdvertisementList. Contains Advertisements.
*/

class AdvertisementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AdvertisementList"};
  }

  render() {
    return (
      <div>
       <div><h3>Hello, I am: "{this.state.className}"</h3></div>
       <div><em>Implement me!</em></div>
       <Advertisement/>
       <Advertisement/>
       <Advertisement/>
      </div>
    );
  }

}

export default AdvertisementList;