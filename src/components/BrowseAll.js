import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';

const config = [
  {
    title: "Podcasts",
    photo: require('../img/podcast.jpeg'),
    backColor: "#f4a261"
  },
  {
    title: "New Releases",
    photo: require('../img/new-releases.jpeg'),
    backColor: "#2D46BA"
  },
  {
    title: "Charts",
    photo: require('../img/global.jpeg'),
    backColor: "#06d6a0"
  },
  {
    title: "At Home",
    photo: require('../img/athome.png'),
    backColor: "#e63946"
  },
  {
    title: `Made for ${'\n'} You`,
    photo: require('../img/your-mix.jpeg'),
    backColor: "#a2d2ff"
  },
  {
    title: "Discover",
    photo: require('../img/discover.jpeg'),
    backColor: "#d883ff"
  },
  
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
    borderBottomRightRadius: 8 ,
  //  transform: [{ rotate: '0deg' }],
    position: "absolute",
    bottom: 0,
    right: 0,
  }
})
