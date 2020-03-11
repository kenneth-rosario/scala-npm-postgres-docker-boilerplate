import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default class Main extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>This is the Basic Boilerplate React Native Application.</Text>
          <Text style={styles.text}>Read the React Native documentation for more information.</Text>
          <Text style={styles.text}>Read repo README to understand file structure!!! (Por favor lean)</Text>
          <Button
            title="Documentation"
            color="green"
            backgroundColor="green"
            onPress={() => Linking.openURL('http://google.com')}>
            
            </Button>
        </View>      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: 'black',
    padding: 10,
  }
});
