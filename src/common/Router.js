import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LibraryList from './LibraryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="list" component={LibraryList} title="匹配列表" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
