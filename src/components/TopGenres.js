import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const config = [
  {
    title: `Dance/ ${"\n"} Electronic`,
    photo: require('../img/edm.jpeg'),
    backColor: "#8edcce"
  },
  {
    title: "Hip Hop",
    photo: require('../img/hiphop.jpeg'),
    backColor: "#f19922"
  }
]

export default class TopGenres extends Component {
  render() {
    return (
      <View style={styles.containerList} >
        <FlatList
          data={config}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: "50%", alignItems: "center", position: "relative", zIndex: 5, marginTop: 10 }} >
              <View style={[styles.card, { backgroundColor: item.backColor }]} >
                <Text style={styles.title} numberOfLines={2} > {item.title} </Text>
                <Image source={item.photo} style={styles.images} />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList: {
    width: "100%",
  },
  card: {
    width: "96%",
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    padding: 5

  },
  images: {
    width: 65,
    height: 65,
 //   transform: [{ rotate: '40deg' }],
    position: "absolute",
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 8 
  }
})
