import React, { Component } from 'react';
import AdvertisementList from './containers/AdvertisementList';

//Advertisements published by current user

class PublishedAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "PublishedAds"};
  }

  render() {
    return (
      <div>
       <div>
       <h3>Adds, published by me</h3>
       <AdvertisementList/>
      </div>
       <AdvertisementList/>
      </div>
    );
  }

}

export default PublishedAds;