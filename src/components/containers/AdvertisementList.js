import React, { Component } from 'react';
import Advertisement from './Advertisement';
import "../../css/advertisementList.css";

/*
    AdvertisementList. Contains Advertisements.
*/

class AdvertisementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AdvertisementList"};
    this.items = [];

    this.items.push({ title: "New appartment is on sale", description: "New, furnished appartment in the city center...", timeAdded: "25 AUG 2017"});
    this.items.push({ title: "New appartment is on sale1", description: "New, furnished appartment in the city center...", timeAdded: "26 AUG 2017"});
    this.items.push({ title: "New appartment is on sale2", description: "New, furnished appartment in the city center...", timeAdded: "27 AUG 2017"});
  }

  render() {
    var output = "";

    var advertisments = [];

    if (this.items.length > 0) {
      for (var i = 0; i < this.items.length; ++i) {
        advertisments.push(<Advertisement element = {this.items[i]} key={i}/>);
      }
    }

    return (
         <ul className="listAdvertisements">
        {advertisments}
         </ul>
    );
  }

}

export default AdvertisementList;