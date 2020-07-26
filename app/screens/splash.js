import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
    'Avenir': require('../assets/fonts/Avenir.ttf'),
    'Futura': require('../assets/fonts/Futura.ttf'),
  };
  
export default class Splash extends React.Component  {
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
  
    render(){
        if (this.state.fontsLoaded) {
        return (
        <View style={styles.container}>
        <Image source={require('../assets/images/phone.png')} style={styles.logo}></Image>
         
         
          <Text style={styles.welcome2}>Welcome to Secret Birthday Santa</Text>
          <Text style={styles.welcome3}>Connect with your friends and surprise them on their birthday!</Text>
          <Text style={styles.btn}>Register</Text>
          <Text style={styles.btn2} onPress={() => this.props.navigation.navigate('Home')}>Log in</Text>
         
        </View>
        );
        }
        else {
        return <AppLoading />;
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
          height:'100%',
          position:'relative',
          backgroundColor: 'white',
        },
        logo:{
          height:'80%',
          width:'80%',
          resizeMode:'contain',
          zIndex:1,
          position:'relative',
          alignSelf:'center',
          top:'-10%',
        },
        welcome: {
            fontFamily:'Avenir',
            fontSize:100,
            position:'absolute',
            alignSelf:'center',
            top:'30%',
            zIndex:2,
            color:'transparent',
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
        top:'-30%',
        elevation:2,
        color:'black',
        width:'75%',
        textAlign:'center'
    },
    btn: {
      fontFamily:'Avenir',
      fontSize:20,
      position:'relative',
      alignSelf:'center',
      top:'-25%',
      elevation:2,
      color:'black',
      width:'75%',
      textAlign:'center',
      backgroundColor:'#EA765D',
      padding:'5%',
      borderRadius:15,
      shadowColor:'#000',
      color:'#FFF'
  },
  btn2: {
    fontFamily:'Avenir',
    fontSize:20,
    position:'relative',
    alignSelf:'center',
    top:'-20%',
    elevation:2,
    color:'black',
    width:'75%',
    textAlign:'center',
    backgroundColor:'#FFF',
    padding:'5%',
    borderRadius:15,
    shadowColor:'#000',
    
},
        
      });