import React, { Component } from 'react';
import AdvertisementList from './containers/AdvertisementList';

class SavedAds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "SavedAds"};
  }

  render() {
    return (
      <div>
       <div>
       <h3>Saved adds</h3>
       <AdvertisementList/>
      </div>
      </div>
    );
  }

}

export default SavedAds;