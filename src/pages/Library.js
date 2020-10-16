import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Title } from 'react-native-paper';

export default class Library extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} >
          <TouchableOpacity>
            <Title style={styles.title} >Music</Title>
          </TouchableOpacity>

          <TouchableOpacity>
            <Title style={styles.title} >Podcasts</Title>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#121212"
  },

  header: {
    backgroundColor: "transparent",
    width: "80%",
    height: 80,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "flex-end"
  },
  title: {
    color: "#fff",
    fontSize: 30
  }
})

