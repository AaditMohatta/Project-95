import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';
import Player2 from './screens/Player2';
import Player3 from './screens/Player3';
import Player4 from './screens/Player4';
import Player5 from './screens/Player5';




import {createAppContainer,createSwitchNavigator}from 'react-navigation';


export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>

      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  PlayerScreen:PlayerScreen
  Player2:Player2,
  Player3:Player3,
  Player4:Player4,
  Player5:Player5
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
