import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,Image,ImageBackground} from 'react-native';
import image1 from '../images/newLogo.gif';
import image from '../images/brick3.jpg';

export default class Home extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    <ImageBackground
          source={image}
          style={styles.ImageContainer}
          imageStyle={{opacity: 0.5}}>
          <Image source={image1} style={styles.Logo} />
      <View style={styles.Menu}>
        <TouchableOpacity 
          onPress={()=> this.props.navigation.navigate('Names')}>
          <Text style={styles.MenuText}> New Game</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
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
    backgroundColor: 'black',
  },
  Menu: {
    position: 'absolute',
    top: '67%',
    left: '12%',
  },
  MenuText: {
    fontSize: 60,
    color: '#000000',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 4,
    marginBottom: 4,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingRight: 8,
    alignItems: 'center',
  },
  Logo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '-15%',
    left: '0%',
  },
});
