import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, Picker } from 'react-native';

export default class SignUpForm extends Component {

  render() {
    return (
      <View style={styles.container}>


          <RNPickerSelect
              placeholder={{
              label: 'Gender',
              value: null,
              color: 'red',
              }}
              placeholderTextColor='black'
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Famale' },

              ]}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom:'90%',
    paddingHorizontal:50,
    borderWidth: 1,



  },

  input: {
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    marginBottom: -30,
    borderRadius: 8,
    paddingLeft:5,
    fontStyle:'italic',
    width:150
  },

  buttonContainer: {
    backgroundColor: 'green',
    paddingVertical: 10,
    width: 80,
    borderRadius: 4,

  },

  buttonText: {
    textAlign:'center',
    color:'white'
  },
  signUpText:{
      paddingVertical: 15,
      color: 'blue',
  }
});
