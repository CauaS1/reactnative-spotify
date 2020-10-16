import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Title, Caption } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const Container = (props) => {
  const { children, title } = props
  return (
    <View style={styles.container} >
      <LinearGradient
        colors={['#292929', 'transparent']}
        style={styles.linear}
      />
      <View style={styles.header} >
        <Text style={styles.title}>{title}</Text>
        <View styles={styles.timeHeader} >
          <Title style={styles.titleTime} >Free</Title>
          <Caption style={styles.captionTime} >FOR 3 MONTHS</Caption>
        </View>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // it stands the container like as the width was "100%"
    paddingBottom: 15,
    marginTop: 15,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#333",
  },

  //Header
  header: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 23,
    textAlign: "left",
    fontWeight: "bold"
  },
  timeHeader: {
    flexDirection: "column",
  },
  titleTime: {
    color: "#fff",
    fontSize: 23,
    fontWeight: 'bold',
  },
  captionTime: {
    color: "#ccc"
  },
  linear: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    borderRadius: 10
  }
})

export default Container;