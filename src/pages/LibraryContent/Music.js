import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView, Dimensions } from 'react-native';

import { Caption, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

export default class Library extends Component {
  state = {
    visible: false,
    infoPlaylist: null
  }

  modalDetails() {
   // console.log(this.state.infoPlaylist) //when the onPressOut is enable, it call this function again
    const info = this.state.infoPlaylist;
    return (
      <Modal
        isVisible={this.state.visible}
        swipeDirection="down"
        style={styles.modalBottom}
      >
        <View style={styles.modalContainer} >
          {
            info && (
              <Image source={info.image} style={styles.imgModal} />
            )
          }
          {
            info && (
              <View style={styles.informations}>
                <Title numberOfLines={1} style={styles.titleModal} >{info.title}</Title>
                <Caption style={styles.captionModal} >by {info.creator} · {info.likes}K LIKES</Caption>
                <Caption style={styles.aboutModal} >{info.description}</Caption>
              </View>
            )
          }
          <TouchableOpacity style={styles.suffleButton} >
            <Text style={{ fontWeight: "bold" }} >SHUFFLE PLAY</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.filtersContainer} >
          <TextInput placeholder="Find in playlists"
            inlineImageLeft="username"
            placeholderTextColor="#7e7e7e"
            style={styles.input}
          />
          <Icon name="search" size={20} color="#7e7e7e" style={styles.searchIcon} />

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#7e7e7e", fontWeight: "bold" }} >Filters</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.playlistsContainer} >
          <TouchableOpacity style={styles.playlist}>
            <View style={[styles.image, styles.createPlaylistImg]}>
              <Text style={{ fontSize: 23, fontWeight: "bold", color: "#fff" }} >+</Text>
            </View>
            <View style={styles.about}>
              <Title style={styles.title} numberOfLines={1} >Create Playlist</Title>
            </View>
          </TouchableOpacity>

          <View style={{ marginBottom: 20 }} >
            <FlatList
              data={this.props.playlist}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.playlist}
                  onPressIn={() => this.setState({ visible: true, infoPlaylist: item })}
                  onPressOut={() => this.setState({ visible: false })}
                >
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.about}>
                    <Title style={styles.title} numberOfLines={1} >{item.title} </Title>
                    <Caption style={styles.caption}>By {item.creator}</Caption>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          {this.modalDetails()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: "100%",
    backgroundColor: "#121212",
    padding: 15
  },
  //Search and Button
  filtersContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "82%",
    height: 40,
    position: "relative",
    borderRadius: 8,
    paddingLeft: 40,
    backgroundColor: "#282828",
    fontSize: 15,
    fontWeight: "bold",
    color: "#7e7e7e"
  },
  button: {
    width: "20%",
    backgroundColor: "#282828",
    height: 40,
    marginLeft: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  searchIcon: {
    position: "absolute",
    top: 9,
    left: 5
  },

  //Playlists
  playlistsContainer: {
    width: "100%",
    height: "100%",
    marginTop: 15,
    //    padding: 15

  },
  createPlaylistImg: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828"
  },
  image: {
    width: 90,
    height: 90
  },
  playlist: {
    width: "95%",
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: "center",
  },
  about: {
    height: 90,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "flex-start",
  },
  title: {
    color: "#fff",
    marginBottom: -2
  },
  caption: {
    color: "#7e7e7e",
    marginTop: -2
  },

  //Modal
  modalContainer: {
    width: "100%",
    height: "54%",
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imgModal: {
    //  marginTop: 15,
    width: "40%",
    height: "40%",
    resizeMode: "center"
  },
  informations: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 8

  },
  titleModal: {
    color: "#fff",
    textAlign: "center"
  },
  captionModal: {
    marginTop: -2,
    color: "#7e7e7e"
  },
  aboutModal: {
    //  marginTop: 14,
    color: '#fff',
    textAlign: "center"
  },
  suffleButton: {
    //  marginTop: 15,
    width: "75%",
    height: "13%",
    borderRadius: 10,
    backgroundColor: "#04e762",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBottom: {
    justifyContent: "flex-end",
    margin: 0,
  }

})

