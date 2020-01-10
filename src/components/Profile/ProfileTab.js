import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, ScrollView  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Constants from 'expo-constants';

export default class ProfileTab extends Component {
  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'column', alignItems:'center'}}>

        {/*Profile picture, Name, and Bio View Compartment*/}
        <View style={{flex:1,  backgroundColor: 'white', width:'100%' }}>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                            {/*PROFILE PICTURE*/}
            <Image source={{ uri: this.props.navigation.state.params.image }} style={{ width: 90, height: 90, borderRadius:25, marginTop: 36, marginLeft:10 }} />
            <View style={{flexDirection:'column', marginTop: 40, justifyContent:'space-around', width:'69%'}}>
                              {/*NAME*/}
              <Text style={{fontSize: 28, textDecorationLine:'underline'}}>{this.props.navigation.state.params.name}</Text>
                              {/*BIO*/}
              <Text>{this.props.navigation.state.params.bio}</Text>
            </View>
          </View>
        </View>

        {/*Age, Gender, Breeed, Friends View Compartment*/}

        <View style={{ flex:0.4, borderTopWidth: 1 ,borderBottomWidth: 1, borderColor:'#d3d3d3', backgroundColor: '#f2f3f4', flexDirection: 'row', width:'100%', justifyContent:'space-around', alignItems:'center'}}>
                        {/*AGE*/}
          <View style={{ flexDirection: 'column'}}>
            <Text style={{fontSize: 18}}>Age</Text>
            <Text style={{textAlign:'center'}}>{this.props.navigation.state.params.age}</Text>
          </View>
                        {/*GENDER*/}
          <View style={{ flexDirection: 'column'}}>
            <Text style={{fontSize: 18}}>Gender</Text>
            <Text style={{textAlign:'center'}}>Male</Text>
          </View>
                        {/*BREED*/}
          <View style={{ flexDirection: 'column'}}>
            <Text style={{fontSize: 18}}>Breed</Text>
            <Text style={{textAlign:'center'}}>Siames</Text>
          </View>
                      {/*FRIENDS*/}
          <View style={{ flexDirection: 'column'}}>
            <Text style={{fontSize: 18}}>Friends</Text>
            <Text style={{textAlign:'center'}}>234</Text>
          </View>
        </View>

        {/*All posted pictues on profile*/}
        <SafeAreaView style={{flex: 3, marginTop: Constants.statusBarHeight,}}>
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{  marginLeft:'5%', backgroundColor: 'white', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap', width:'90%'}}>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/cat2.gif')}/>
          </View>
          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/source.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>
          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>
          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

          <View style={{borderWidth:1, marginTop:20, borderRadius:10}}>
            <Image style={styles.logo} source={require('../../.././Images/lolo.gif')}/>
          </View>

        </View>
        </ScrollView >
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

logo: {

  width: 95,
  height:95,
},

});
