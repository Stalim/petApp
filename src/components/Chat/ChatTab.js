import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {

  render() {
    return (

      // Try setting `flexDirection` to `column`.
      <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <Text style={{fontSize: 20}}>This is the Chat Tab</Text>
        <Text style={{fontSize: 35}}>Needs Implemenation</Text>
      </View>
    );
  }
};
