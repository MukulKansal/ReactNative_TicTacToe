import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import image from '../images/brick1.jpg';

export default class Names extends React.Component {

    state={
        player1: 'player1',
        player2: 'player2',
    }
  render(){
  return (
    <View style={styles.container}>
    <ImageBackground
    source={image}
    style={styles.ImageContainer}
    imageStyle={{opacity: 0.5}}>
    
      <Text style={styles.text}> Enter Player 1 Name </Text>

      <TextInput 
      style={styles.textField}
      onChangeText={player1 => this.setState({player1})}
      // value={this.state.player1}
      maxLength={8} />

      <Text style={styles.text}> Enter Player 2 Name </Text>
      
      <TextInput 
      style={styles.textField}
      onChangeText={player2 => this.setState({player2})}
      // value={this.state.player2}
      maxLength={8} />

      <View>
        <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('Game',{
            player1 : this.state.player1,
            player2 : this.state.player2,
            })}>
            <Text style={styles.MenuText}> Start Game </Text>
        </TouchableOpacity>
      </View>
     </ImageBackground >
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333945',
  },
  MenuText: {
    fontSize: 60,
    color: '#fff',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 5,
    marginBottom: 40,
    alignItems: 'center',
    marginTop: 50,
    padding:5,
    borderRadius:10,
    paddingLeft: 11
  },
  text: {
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
    marginTop: 10
  },
  textField: {
    height: '8%',
    width: '70%',
    borderColor: 'gray',
    borderWidth: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginTop: 5,
    padding: 5,
    borderRadius:6
},
});
