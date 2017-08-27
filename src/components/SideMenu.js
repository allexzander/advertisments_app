import React, { Component } from 'react';

/*Drop-right menu on the left side of the application.
  Contains links to: Latest Ads, Create Advertisement, Saved Advertisements e.t.c.
*/

class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "SideMenu"};
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

export default SideMenu;