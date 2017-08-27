import React, { Component } from 'react';

/*
  Search input field and filter drop-down for the 'Latest Ads' page
*/

class SearchHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "SearchHeader"};
  }

  render() {
    return (
      <div>
       <div><h3>Hello, I am: "{this.state.className}"</h3></div>
       <form><input type="text" placeholder="find what you need"/></form>
      </div>
    );
  }

}

export default SearchHeader;