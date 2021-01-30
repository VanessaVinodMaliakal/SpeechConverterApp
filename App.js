import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as Speech from 'expo-speech'
import AppHeader from './header.js'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      textTyped : ''
    }
  }
  speak=()=>{
    var word = this.state.textTyped
    Speech.speak(word)
  }
  render(){
    return (
   <View style={styles.container}>
     <AppHeader />
      <Image 
        source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',}}>
     </Image>
     <TextInput 
     style={styles.inputBox}
     placeholder='Enter the word'
     onChangeText={(text)=>{
      this.setState({
        textTyped : text
      })
    }}
     ></TextInput>
     <TouchableOpacity 
     style={styles.button}
     onPress={this.speak}
     ><Text style={styles.styleText}>Pronunciation</Text></TouchableOpacity>
   </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{ 
      marginTop: 50,
      width: '30%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
  }, 
  button:{
      width: '10%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10, 
      backgroundColor : '#88E2F2',
      borderRadius: 30
  },
  styleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})