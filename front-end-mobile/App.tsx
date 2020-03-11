import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </View>
    );
  }
  
}

