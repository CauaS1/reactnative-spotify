import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';


import { Title, Caption, } from 'react-native-paper';


const Library = () => {
  return (
    <View style={styles.container} >
      <Title style={styles.title} >Today</Title>

      <View style={{ alignItems: "center" }} >
        <View style={styles.containerCast} >
          <View style={styles.header} >
            <Image style={styles.img} source={require('../../img/code.jpg')} />
            <View style={styles.about}>
              <Text numberOfLines={2} style={styles.guest}>CAUAS1 - Coding Podcast #150</Text>
              <Text style={{ fontSize: 14, color: "#5b5b5b" }} >Coding Podcast</Text>
            </View>
            <MaterialCommunity name="dots-vertical" size={30} color="#afafaf" />
          </View>

          <View style={styles.aboutThePerson} >
            <Text style={styles.aboutFont} >CauaS1 is a programmer that study React Native and, to practice he does some copies of famous apps.</Text>
          </View>

          <View style={styles.footer} >
            <View style={styles.interactPlay} >
              <TouchableOpacity style={styles.button} >
                <MaterialIcon name="play-circle-filled" size={35} color="#ddd" />
              </TouchableOpacity>
              <Caption style={{ color: "#AFAFAF", }} >TODAY - 2 HRS 13 MINS</Caption>
            </View>
            <View style={styles.interactButtonsContainer} >
              <TouchableOpacity style={styles.button} >
                <MaterialIcon name="done" size={30} color="#afafaf" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} >
                <AntDesign name="download" size={25} color="#afafaf" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#121212",
    padding: 15,
  },
  containerCast: {
    backgroundColor: "#282828",
    width: "100%",
    height: 230,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    color: '#333',
    fontSize: 15,
    marginBottom: 15
  },

  //header
  header: {
    width: "90%",
    flexDirection: "row",
    margin: 10,
  },
  about: {
    width: "90%",
    marginLeft: 10,
    justifyContent: "center"
  },
  guest: {
    color: '#ccc',
    fontWeight: "bold",
    fontSize: 20,
    width: "65%",
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 5
  },

  //about the person
  aboutThePerson: {
    width: "90%",
  },
  aboutFont: {
    color: '#5b5b5b',
    fontSize: 15
  },

  //footer
  footer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    height: 65,
  },
  interactPlay: {
    flexDirection: "row",
    alignItems: "center",
    height: 65,
    justifyContent: "space-around",
  },
  interactButtonsContainer: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }


})

export default Library;