import React, { Component } from 'react';
import "../css/sideMenu.css";
//TODO: remove one of those!
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TransitionGroup from 'react-addons-transition-group';

/*Drop-right menu on the left side of the application.
  Contains links to: Latest Ads, Create Advertisement, Saved Advertisements e.t.c.
*/

class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    //TODO: remove this from state
    this.state = {expanded: false};
  }

  handleClick(e) {
    console.log('this is:', e.target['id']);
    this.setState({expanded: true})
  }

  render() {
    let itemNames = ["All Ads", "Saved Ads", "My Ads", "New Add", "Account Settings", "Log out"];
    let itemIds = ["mu_item_all_ads", "mu_item_saved_ads", "mu_item_my_ads", "mu_item_anew_ad", "mu_item_acc_settings", "mu_item_log_out"];

    let menuItems = [];

    for (let i = 0; i < itemNames.length; ++i) {
      menuItems.push(<li key={i} className="side_menu_nav_list_item"><button id={itemIds[i]} onClick={(e) => this.handleClick(e)}>{itemNames[i]}</button></li>);
    }

    let listWithTransition = <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
    <ul className="side_menu_nav_list">
      {menuItems}
    </ul>
 </ReactCSSTransitionGroup>;

let listWithNoTransition = 
<ul className="side_menu_nav_list">
  {menuItems}
</ul>;

    let listToRender = this.state.expanded ? listWithTransition : listWithNoTransition;

    console.log('this state:', this.state);

    //TODO: make one of transitions work! https://medium.com/appifycanada/animations-with-reacttransitiongroup-4972ad7da286
    return (
      <div id ="slider_menu">
        {listToRender}
      </div>
    );
  }

}

export default SideMenu;