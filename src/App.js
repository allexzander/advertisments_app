import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import SearchHeader from './components/SearchHeader';
import PublishedAds from './components/PublishedAds';
import SavedAds from './components/SavedAds';
import LatestAds from './components/LatestAds';
import AdPublish from './components/AdPublish';
import AdDetails from './components/AdDetails';
import AccountSettings from './components/AccountSettings';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello, world.</h1>
      <SideMenu/>
      <AccountSettings/>
      <SearchHeader/>
      <PublishedAds/>
      <SavedAds/>
      <LatestAds/>
      <AdPublish/>
      <AdDetails/>
      </div>
    );
  }
}