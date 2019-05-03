import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends Component {
  render() {
    return (
      <View style={style.contentLogin}>

        <Icon name='codepen' size={80} color='white'/>
        <Text style={style.txtWelcome}>Welcome to My APP</Text>

        <TextInput
          style={style.inputEmail}
          underlineColorAndroid='transparent'
          placeholder = 'Enter Email'
          placeholderTextColor = "white"
        />

        <TextInput
          style={style.inputPassword}
          underlineColorAndroid='transparent'
          placeholder= 'Enter Password'
          placeholderTextColor = "white"
          secureTextEntry={true}
        />

        <Button
          title="Login"
          buttonStyle={style.btnLogin}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  contentLogin: {
    backgroundColor: '#159ef2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtWelcome: {
    fontSize: 30,
    color: 'white',
    marginTop: 15
  },

  inputEmail: {
    width: 300,
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    fontSize: 16,
    color: 'white',
    marginTop: 25
  },

  inputPassword: {
    width: 300,
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    fontSize: 16,
    color: 'white',
    marginTop: 8
  },


  btnLogin: {
    marginTop: 10,
    height: 45,
    borderRadius: 25,
    width: 300
  }
})