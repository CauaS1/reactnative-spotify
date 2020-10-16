import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity, LogBox } from 'react-native';

const { width, height } = Dimensions.get('window');
const numberGrid = 2.2;
const itemWidth = width / numberGrid;

import { Title, Subheading, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';


export default class Home extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}
  recentlyPlaylist = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.recentlyContainer} >
        <Image source={item.photo} style={styles.recentlyImg} />
        <Subheading style={styles.recentlyName} > {item.name} </Subheading>
      </TouchableOpacity>
    );
  }

  bestPlaylist = ({ item, index }) => {
    //Number of lines makes the 3 dots effect when the text is too large (...)
    return (
      <TouchableOpacity style={[styles.recentlyContainer, styles.bestContainer]}>
        <Image source={item.image} style={styles.bestImg} />
        <Caption numberOfLines={2} style={styles.captionBestPlaylist} > {item.artists} </Caption>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(`width: ${width}, height: ${height}`)
    const evening = this.props.evening;
    const recently = this.props.recently;
    const bestOfArtists = this.props.best;

    return (
      <ScrollView style={styles.container} >
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="settings" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View>
          <Title style={styles.mainTitle} >Good evening</Title>
          <View style={styles.goodEvening}>
            <FlatList
              data={evening}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.playlist} >
                  <Image source={item.photo} style={styles.img} />
                  <Text style={styles.title} >{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View>
            <Title style={styles.mainTitle} >Recently played</Title>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={recently}
              renderItem={this.recentlyPlaylist}
              activeSlideAlignment="start"
              sliderWidth={400}
              itemWidth={130}
              itemHeight={180}
              layout={'default'}
            />
          </View>

          <View>
            <Title style={styles.mainTitle} >Best of Artists</Title>
            <View>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={bestOfArtists}
                renderItem={this.bestPlaylist}
                activeSlideAlignment="start"
                sliderWidth={400}
                itemWidth={170}
                itemHeight={190}
                layout={'default'}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#121212'
  },

  header: {
    width: "100%",
    height: 40,
    padding: 10,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    backgroundColor: "transparent"
  },

  mainTitle: {
    fontSize: 22,
    color: "#fff",
    marginLeft: 10,
    marginBottom: 7
  },

  //Good Evening
  goodEvening: {
    padding: 8,
    flexDirection: "row",
  },
  playlist: {
    width: itemWidth,
    height: 70,
    margin: 5,
    flexDirection: "row",
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#2a2a2a"
  },
  img: {
    width: "42%",
    height: "100%",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  title: {
    width: "40%",
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },

  //recenly playlist
  recentlyContainer: {
    width: 130,
    height: 180,
    marginTop: 0,
    margin: 10,
    alignItems: "center",
    justifyContent: 'center'
  },
  recentlyImg: {
    width: 130,
    height: 130
  },
  recentlyName: {
    color: "#fff",
  },

  //best of artists playlist

  bestContainer: {
    width: 170,
    height: 190,
    marginBottom: 15
  },
  bestImg: {
    width: 170,
    height: 170
  },
  captionBestPlaylist: {
    color: "#ccc"
  }

})

