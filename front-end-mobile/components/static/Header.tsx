import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white } from 'color-name';

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>App Header</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
     backgroundColor: '#00CC6A',
     height: 100,
     textAlign: 'center',
     margin: 'auto',
     justifyContent: 'center',
     alignItems: 'center',
  },
  text: {
    marginTop: 25,
    fontSize: 20,
    color: 'white',
  }
});
