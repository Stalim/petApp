import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import {StyleSheet, View, Image, TextInput, Text, TouchableOpacity, Picker,KeyboardAvoidingView } from 'react-native';
import ImagePicker from './ImagePicker';

import RadioGroup from 'react-native-radio-buttons-group';
import NumericInput from 'react-native-numeric-input'

export default class SignUpForm extends Component {

  state = {
       gender: [
           {
               label: 'Male',

           },
           {
               label: 'Female',
           },
       ],

       type: [
           {
               label: 'Dog ',

           },
           {
               label: 'Cat',
           },
       ],


   };

   // update state
   onPress = gender => this.setState({ gender });
   onPress = type => this.setState({ type });

  render() {

    let selectedButton = this.state.gender.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.gender[0].label;

    let selectedButton_1 = this.state.type.find(e => e.selected == true);
    selectedButton_1 = selectedButton_1 ? selectedButton_1.value : this.state.type[0].label;

    return (
    <KeyboardAvoidingView behavior='position' enable style={styles.container}>

      {/*<View style={{alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../.././Images/cat.gif')}/>
      </View>*/}

      <View style={{ flex:3, justifyContent:'space-evenly'}}>

        <View style={styles.formContainer}>
          <ImagePicker/>
        </View>

        {/*<View style={{alignItems:'center'}}>
          <Image style={styles.logo} source={require('../../.././Images/source.gif')}/>
        </View>*/}


        <View style={styles.container_radio}>
          <Text style={styles.valueText}>
              Gender
          </Text>
          <RadioGroup radioButtons={this.state.gender} onPress={this.onPress} flexDirection='row'
          />
        </View>

        <View style={styles.container_radio}>
          <Text style={styles.valueText_type} >
              Animal
          </Text>
          <RadioGroup radioButtons={this.state.type} onPress={this.onPress} flexDirection='row'
          />
        </View>

        <View style={styles.container_radio}>
          <Text style={styles.valueText_type} >
              Age
          </Text>
          <View style={styles.container_num}>
            <NumericInput
              value={this.state.value}
              onChange={value => this.setState({value})}
              onLimitReached={(isMax,msg) => console.log(isMax,msg)}
              totalWidth={120}
              totalHeight={28}
              iconSize={28}
              step={1.5}
              valueType='integer'
              rounded
              textColor='black'
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor='#827263'
              leftButtonBackgroundColor='#827263'/>
          </View>
        </View>


        <View style={styles.container_breed}>
          <Text style={styles.valueText_type} >
            Breed
          </Text>
          <View style={styles.container_breed_picker}>
            <RNPickerSelect
              placeholder={{
              label: 'Select Animal Breed',
              value: null,
              color: 'red',
              }}
              placeholderTextColor='gray'
              fontStyle='italic'
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Labrador retriever', value: 'Labrador retriever' },
                  { label: 'German shepherd', value: 'German shepherd' },
                  { label: 'Golden retriever ', value: 'Golden retriever' },
                  { label: 'French bulldog', value: 'French bulldog' },
                  { label: 'Beagle', value: 'Beagle' },
                  { label: 'Poodle', value: 'Poodle' },
                  { label: 'Sato', value: 'Sato' },
              ]}
            />
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_name} >
              Name
          </Text>
          <TextInput
            style={{ height: 40, width:150, borderColor: 'gray', borderBottomWidth: 1, }} placeholder="  pet's name"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_bio} >
            Biography
          </Text>
          <TextInput
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }} placeholder="  small description "
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_email} >
            Email
          </Text>
          <TextInput
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }} placeholder="   email"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_psw} >
            Password
          </Text>
          <TextInput
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }} placeholder="   password"
          />
        </View>

        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>



    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems:'center',
    marginTop:'5%'
  },
  container_breed: {
    flexDirection:'row'
  },

  container_breed_picker: {
    width:150,
    height: 40,
    marginLeft:12,
    paddingTop:13,
    borderBottomWidth: 1,
    borderColor: 'gray'

  },

  formContainer: {
    flexDirection:'row'
  },

  container_radio: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    container_num: {
        paddingLeft:35
      },

    valueText: {
        fontSize: 18,
        paddingRight:25
    },
    valueText_type: {
        fontSize: 18,
        paddingRight:25,
        marginTop:11
    },

    valueText_type_bio: {
        fontSize: 18,
        paddingRight:10,
        marginTop:11
    },

    valueText_type_email: {
        fontSize: 18,
        paddingRight:47,
        marginTop:11
    },

    valueText_type_psw: {
        fontSize: 18,
        paddingRight:10,
        marginTop:11
    },

    valueText_type_name: {
        fontSize: 18,
        paddingRight:42,
        marginTop:11
    },

    logo: {
      width: 120,
      height:120,
    },

    buttonContainer: {
      backgroundColor: 'green',
      paddingVertical: 10,
      width: 80,
      borderRadius: 4,

    },

    buttonText: {
      textAlign:'center',
      color:'white',

    },

});
