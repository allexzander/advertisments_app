import React, { Component } from 'react';
import AdvertisementList from './containers/AdvertisementList';

//Latest ads feed. Sorted with newest ads going first.

//----------------------------TODO: Remove this dummy code-----------------------------------------------

//-------------------------------------------------------------------------------------------------------

class LatestAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "LatestAds"};
  }

  render() {
    return (
      <div>
       <h3>Latest adds</h3>
       <AdvertisementList/>
      </div>
    );
  }

}

export default LatestAds;