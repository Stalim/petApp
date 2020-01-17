import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, View, Button, Image, TextInput, Text, TouchableOpacity, Picker,KeyboardAvoidingView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import NumericInput from 'react-native-numeric-input';
import * as firebase from "firebase";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


  var userId = 0;

  var config = {
    apiKey: "AIzaSyCICFM-viU7aEhZoTVAzjF_nTlKLL5gMYA",
    authDomain: "petapp-8e90b.firebaseapp.com",
    databaseURL: "https://petapp-8e90b.firebaseio.com",
    projectId: "petapp-8e90b",
    storageBucket: "petapp-8e90b.appspot.com",
    messagingSenderId: "1043247261213",
    appId: "1:1043247261213:web:66dad83fee99021d7f88f4"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const breeds = [
  {
    label: 'Husky',
    value: 'Huske',
  },
  {
    label: 'Golden Retriever',
    value: 'Golden Retriever',
  },
  {
    label: 'Poodle',
    value: 'Poodle',
  },
  {
    label: 'German Sheperd',
    value: 'German Sheperd',
  },
  {
    label: 'Chihuahua',
    value: 'Chihuahua',
  },
];

export default class SignUpForm extends Component {
constructor(props) {
 super(props);
 this.state = {
   email: "",
   password: "",
   name:"",
   bio:"",
   age:"",
   image:null,
   breed: undefined,
 };

 firebase.database().ref("Users").on("value", function(snapshot) {
   userId = snapshot.numChildren()
})

}

SignUp = (email, password) => {

  let selectedButton = this.stateOne.gender.find(e => e.selected == true);
  selectedButton = selectedButton ? selectedButton.value : this.stateOne.gender[0].label;

  firebase.database().ref('Users/' + userId).set({
   email:this.state.email,
    name: this.state.name,
    breed: this.state.breed,
    image: this.state.image,
    gender: selectedButton,
    bio: this.state.bio,
    age: this.state.age

  }).then(() => {
    console.log('INSERTED!!!');
    {/*this.incrementCount()*/}

  }).catch((error) => {
    console.log(error);
  });


   try {
     firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(user => {
                console.log(user);
          });
} catch (error) {
     console.log(error.toString(error));
   }

   this.props.navigation.navigate('Profile', {email: email} );

 };

  stateOne = {
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
    let { image } = this.state;


    let selectedButton_1 = this.stateOne.type.find(e => e.selected == true);
    selectedButton_1 = selectedButton_1 ? selectedButton_1.value : this.stateOne.type[0].label;

    return (
    <KeyboardAvoidingView behavior='position' enable style={styles.container}>

      {/*<View style={{alignItems:'center'}}>
        <Image style={styles.logo} source={require('../../.././Images/cat.gif')}/>
      </View>*/}

      <View style={{ flex:3, justifyContent:'space-evenly'}}>

        <View style={styles.formContainer}>
        {image &&
          <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius:45 }} />}

        <Button
          title="Select Profile Picture"
          onPress={this._pickImage}
        />
        </View>

        {/*<View style={{alignItems:'center'}}>
          <Image style={styles.logo} source={require('../../.././Images/source.gif')}/>
        </View>*/}


        <View style={styles.container_radio}>
          <Text style={styles.valueText}>
              Gender
          </Text>
          <RadioGroup radioButtons={this.stateOne.gender} onPress={this.onPress} flexDirection='row'
          />
        </View>

        <View style={styles.container_radio}>
          <Text style={styles.valueText_type} >
              Animal
          </Text>
          <RadioGroup radioButtons={this.stateOne.type} onPress={this.onPress} flexDirection='row'
          />
        </View>

        <View style={styles.container_radio}>
          <Text style={styles.valueText_type} >
              Age
          </Text>
          <View style={styles.container_num}>
            <NumericInput
              value={this.state.value}
              onChange={age => this.setState({age})}
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
          <View style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
            <View  style={{flexDirection: 'row', alignItems:'center',}}>
              <Text style={styles.valueText_type_name}>Breed</Text>
              <RNPickerSelect
              placeholder={{
              label: 'Select Animal Breed',
              value: null,
              color: 'red',
              }}
              items={breeds}
              onValueChange={value => {this.setState({breed: value,});}}
              style={pickerSelectStyles}
              value={this.state.breed}
              />
            </View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_name} >
              Name
          </Text>
          <TextInput
            style={{ height: 40, width:150, borderColor: 'gray', borderBottomWidth: 1, }}
            placeholder="  pet's name"
            onChangeText={name => this.setState({ name })}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_bio} >
            Biography
          </Text>
          <TextInput
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }}
            placeholder="  small description "
            onChangeText={bio => this.setState({ bio })}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_email} >
            Email
          </Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }} placeholder="   email"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.valueText_type_psw} >
            Password
          </Text>
          <TextInput
            onChangeText={password => this.setState({ password })}
            style={{ height: 40, width:250, borderColor: 'gray', borderBottomWidth: 1 }} placeholder="   password"
          />
        </View>

        <View style={{alignItems:'center'}}>
          <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.SignUp(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>



    );
  }
  componentDidMount() {
  this.getPermissionAsync();
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};
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
  scrollContainer: {
    flex: 1,

  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    width:200,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
   // to ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor:'yellow',
    fontSize: 16,
    width:200,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 2,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon

  },
});
