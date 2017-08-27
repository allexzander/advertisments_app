import React, { Component } from 'react';

//Account settings for currently logged user

class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {className: "AccountSettings"};
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

export default AccountSettings;