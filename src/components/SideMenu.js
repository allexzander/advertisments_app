import React, { Component } from 'react';
import "../css/sideMenu.css";

/*Drop-right menu on the left side of the application.
  Contains links to: Latest Ads, Create Advertisement, Saved Advertisements e.t.c.
*/

class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "SideMenu"};
  }

  handleClick(e) {
    console.log('this is:', e.target['id']);
  }

  render() {
    let itemNames = ["All Ads", "Saved Ads", "My Ads", "New Add", "Account Settings", "Log out"];
    let itemIds = ["mu_item_all_ads", "mu_item_saved_ads", "mu_item_my_ads", "mu_item_anew_ad", "mu_item_acc_settings", "mu_item_log_out"];

    let menuItems = [];

    for (let i = 0; i < itemNames.length; ++i) {
      menuItems.push(<li key={i} className="side_menu_nav_list_item"><button id={itemIds[i]} onClick={(e) => this.handleClick(e)}>{itemNames[i]}</button></li>);
    }

    return (
      <div id ="slider_menu">
        <ul className="side_menu_nav_list">
          {menuItems}
        </ul>
      </div>
    );
  }

}

export default SideMenu;