import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speech = () => {
    Speech.speak(this.state.text);
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor={'rgb(64,255,0)'}
          centerComponent={{
            text: 'TEXT TO SPEECH CONVERTER',
            style: { color: 'purple', fontSize: 14 },
          }}
        />
        <Image
          style={{ width: 350, height: 200, alignSelf: 'center' }}
          source={{
            uri: 'https://www.elegantthemes.com/blog/wp-content/uploads/2019/01/000-Text-to-Speech.png',}} />

        <TextInput
          onChangeText={(data) => this.setState({ text: data })}
          style={{
            borderWidth: 3,
            width: 200,
            marginTop: 20,
            alignSelf: 'center',
            color:'purple'
          }}
        />

        <TouchableOpacity
          onPress={this.speech}
          style={{
            width: 100,
            height: 80,
            backgroundColor: 'rgb(0, 0, 128)',
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 10,
            borderBottomColor: 'rgb(64,255,0)',

            borderTopColor: 'red',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              alignText: 'center',
              alignSelf: 'center',
              marginTop: 12,
            }}>
            {' '}
            Listen{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
