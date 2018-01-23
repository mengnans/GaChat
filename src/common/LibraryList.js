import React, { Component } from 'react';
import { LayoutAnimation, Text, TouchableWithoutFeedback, TouchableOpacity, View, Image, ListView } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Profile from './Profile';
import Profiles from './Profiles';
import ListItem from './ListItem';
import Input from './Input';
import * as actions from '../action/index.js';

class LibraryList extends Component {
  state = { friendShow: true, friend: true, pending: false }
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  pressPend() {
    if (this.state.friendShow) {
    this.setState({ friendShow: !this.state.friendShow });
  }
  }
  pressFriend() {
    if (!this.state.friendShow) {
    this.setState({ friendShow: !this.state.friendShow });
  }
  }
  renderContent() {
    if (this.state.friendShow) {
  return (
    <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
  );
}
return;
  }
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <Card>
      <CardSection>
      <Button status={this.state.friendShow} whenPressed={this.pressFriend.bind(this)}>Friends</Button>
      <Button status={!this.state.friendShow} whenPressed={this.pressPend.bind(this)}>Pending</Button>
      </CardSection>
      <CardSection>
      <Input style2={{ height: 20 }} />
      </CardSection>
      {this.renderContent()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
//    console.log(state.libraries);
    return { libraries: state.libraries };
};


export default connect(mapStateToProps)(LibraryList);
