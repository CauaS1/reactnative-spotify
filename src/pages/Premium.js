import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import { Title, Caption } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import IndividualPremium from '../components/IndividualPremium';
import StudentsPremium from '../components/StudentsPremium';
import DuoPremium from '../components/DuoPremium';
import FamilyPremium from '../components/FamilyPremium';

const windowWidth = Dimensions.get('window').width;

export default class Premium extends Component {
  state = {
    activeTab: 0
  }

  advantageCarousel = ({ item }) => {
    return (
      <View style={[styles.card, { backgroundColor: "#333" }]}>
        <View style={styles.part} >
          <View style={styles.captionContainer} >
            <Caption style={styles.captionPart} >Free</Caption>
          </View>
          <View style={styles.titlePartContainer} >
            <Title style={styles.titlePart} numberOfLines={3} >{item.free}</Title>
          </View>
        </View>

        <View style={[styles.part, styles.greenPart]}  >
          <View style={styles.captionContainer} >
            <Caption style={styles.captionPart}>Premium</Caption>
          </View>
          <View>
            <Title style={styles.titlePart} numberOfLines={3} >{item.premium}</Title>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const advantage = this.props.carousel;
    return (
      <ScrollView>
        <View style={styles.container} >
          <View style={styles.titleContainer} >
            <Text style={styles.mainTitle} >Last Chance. Don't lost the oportunity to try out 3 months of free Premium</Text>
          </View>

          <View style={styles.carouselContainer} >
            <Carousel
              data={advantage}
              ref={(c) => { this._carousel = c; }}
              renderItem={this.advantageCarousel}
              activeSlideAlignment="start"
              sliderWidth={400}
              itemWidth={320}
              layout={'stack'}
              onSnapToItem={i => this.setState({ activeTab: i })}
            />

            <Pagination
              dotsLength={advantage.length}
              activeDotIndex={this.state.activeTab}
              dotStyle={{
                width: 10,
                height: 10,
                backgroundColor: "#04e762",
              }}
              inactiveDotScale={0.6}
              inactiveDotOpacity={0.4}
            />
          </View>

          <TouchableOpacity style={styles.currentContainer} >
            <Title style={styles.currentTitle}>Free Spotify</Title>
            <Caption style={styles.currentCaption}>Current Plan</Caption>
          </TouchableOpacity>

          <IndividualPremium />
          <StudentsPremium />
          <DuoPremium />
          <FamilyPremium />
          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    width: windowWidth,
    height: "100%",
    alignItems: "center",
    backgroundColor: "#272727",
    paddingBottom: 15,
  },
  titleContainer: {
    marginTop: 60,
    width: "85%",
  },
  mainTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center"
  },

  //carousel 
  carouselContainer: {
    width: "85%",
  },


  //advantage cards
  demonstration: {
    width: "100%",
  },
  card: {
    marginTop: 30,
    width: "95%",
    backgroundColor: "red",
    height: 150,
    justifyContent: "space-around",
    borderRadius: 10,
    flexDirection: "row",
  },
  part: {
    width: "50%",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative'
  },
  greenPart: {
    backgroundColor: "#0aa16a",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  captionContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 5,
  },
  captionPart: {
    color: "#a7a7a7",
  },
  titlePart: {
    textAlign: "center",
    color: "#fff",
  },

  //current plan
  currentContainer: {
    marginTop: 20,
    width: "85%",
    height: 70,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#333"
  },
  currentTitle: {
    color: "#fff",
  },
  currentCaption: {
    color: "#a7a7a7"
  },

  //premium


})