import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component{
  displayAlert1(){
    alert('Akshat Raaj coding');
  }
  render(){
    return(
     <View style={{marginTop:100, margin:50}}>
      <Button color="green" title="open" onPress={this.displayAlert1}/>
    
     <Text>Coding By Akshat Raaj</Text>
    </View>
    );
  }
}