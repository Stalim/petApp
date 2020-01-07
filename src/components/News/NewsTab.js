import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex:1}}>
        <View style={{flex:0.8, borderBottomWidth: 1, alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
          <Text style={{fontSize: 35, position: 'absolute',alignSelf:'center' }}>News</Text>
          <View style={{alignSelf:'flex-end', marginTop:22}}>
            <Button onPress={this._logout} title="Logout"/>
          </View>
        </View>
        <View style={{flex:5.2, alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
          <Text style={{fontSize: 20}}>This is the News Tab</Text>
          <Text style={{fontSize: 35}}>Needs Implemenation</Text>

        </View>
      </View>
    );
  }

    _logout = async() => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');

    }
};
