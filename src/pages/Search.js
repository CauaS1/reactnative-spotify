import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TextInput, FlatList } from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';

import TopGenres from '../components/TopGenres';
import BrowseAll from '../components/BrowseAll';

const windowWidth = Dimensions.get('window').width;

export default class Search extends Component {

  render() {
    return (
      <ParallaxScrollView
        contentBackgroundColor="#121212"
        renderForeground="#121212"
        parallaxHeaderHeight={200}
        renderForeground={() => (
          <LinearGradient style={styles.parallax}
            colors={['#333', 'transparent']}
            start={[1, 6]}
            end={[3, 1]}
          >
            <Text style={styles.searchTitle}>Search</Text>
          </LinearGradient>
        )}>
        <View style={styles.container} >
          <View style={{ alignItems: "center", width: "100%" }} >
            <TextInput placeholder="Artists, songs or podcasts" style={styles.input} />
          </View>
          <View style={styles.topGenres} >
            <View style={styles.titleContainer} >
              <Title style={styles.title} >Your top genres</Title>

              <TopGenres />

              <Title style={styles.title} >Browse all</Title>

              <BrowseAll />

            </View>
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parallax: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  searchTitle: {
    color: "#fff",
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15
  },

  //container 
  container: {
    width: windowWidth,
    justifyContent: "center"
  },
  input: {
    marginTop: 5,
    width: "95%",
    height: 60,
    fontSize: 18,
    paddingLeft: 10,
    backgroundColor: "#fff",
    fontWeight: 'bold',
    borderRadius: 10,
  },

  //Your Top Genres
  topGenres: {
    alignItems: "center"
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "95%",
    alignItems: "flex-start"
  },
  title: {
    color: "#fff",
    fontSize: 17
  },

  //flatlist

})

