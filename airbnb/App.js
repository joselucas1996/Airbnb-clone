
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Icon} from  'native-base'; 
import {SimpleLineIcons} from 'react-native-vector-icons'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/* <SimpleLineIcons name="user" size={20} color="black"/> */}
       <Icon name="ios-arrow-back-outline"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});