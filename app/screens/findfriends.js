import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { ScrollView } from 'react-native-gesture-handler';
import FriendList from '../components/friendList';

let customFonts  = {
    'Avenir': require('../assets/fonts/Avenir.ttf'),
    'Futura': require('../assets/fonts/Futura.ttf'),
  };
  
export default class FindFriends extends React.Component  {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
    getData() {
      fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/gethackyfriendlist', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user" : "me"
        })
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson.friends);
    })
    .catch((error) => {
        console.error(error);
    });
      }
     
     
  
    render(){
        if (this.state.fontsLoaded) {
        return (
        <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('SendGift')}>Find my friends</Text>
        
        
          <Text style={styles.welcome3}>Tap on their profile to check out their wishlist!</Text>
         
         

      <ScrollView style={styles.scrollcontainer}>
      <FriendList itemList={this.getData()}/>
      
     
      </ScrollView>
    </View>
        )}

        else {
        return <AppLoading />;
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
            height:'100%',
            position:'relative',
            
          },
          scrollcontainer: {
            height:'100%',
            position:'relative',
            top:'40%',
            
            
          },
        logo:{
          height:'80%',
          width:'80%',
          resizeMode:'contain',
          zIndex:1,
          position:'relative',
          alignSelf:'center',
          top:'2%',
        },
        welcome: {
            fontFamily:'Avenir',
            fontSize:30,
            position:'absolute',
            alignSelf:'center',
            
            zIndex:2,
            padding:'5%',
            backgroundColor:'#EA765D',
            width:'100%',
            height:'15%',
            textAlignVertical:'center',
            textAlign:'center',
            color:'#FFF'
        },
        welcome2: {
          fontFamily:'Avenir',
          fontSize:30,
          position:'relative',
          alignSelf:'center',
          top:'-30%',
          elevation:2,
          color:'black',
          width:'70%',
          textAlign:'center'
      },
      welcome3: {
        fontFamily:'Futura',
        fontSize:20,
        position:'relative',
        alignSelf:'center',
        top:'20%',
        elevation:2,
        color:'black',
        width:'85%',
        textAlign:'left'
    },
    btn: {
      fontFamily:'Avenir',
      fontSize:20,
      position:'relative',
      alignSelf:'center',
      top:'-20%',
      elevation:2,
      color:'black',
      width:'75%',
      textAlign:'center',
      backgroundColor:'#EA765D',
      padding:'5%',
      borderRadius:15,
      shadowColor:'#000',
      color:'#FFF',
      marginBottom:'5%',
      elevation:4,
  },
  btn2: {
    fontFamily:'Avenir',
    fontSize:20,
    position:'relative',
    alignSelf:'center',
    top:'0%',
    elevation:2,
    color:'black',
    width:'75%',
    textAlign:'center',
    backgroundColor:'#FFF',
    padding:'5%',
    borderRadius:15,
    shadowColor:'#000',
    elevation:4,
},
        
      });