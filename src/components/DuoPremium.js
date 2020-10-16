import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Container from './Container';
import { Title, Caption } from 'react-native-paper'

const DuoPremium = () => {
  const title = "Duo \nPremium"
  return (
    <Container title={title} >
      <View style={styles.mainContent} >
        <Text style={styles.about} >
          3 months free when subscribing • Up to 6 premium or Kids • Block music playback with explicit content • Family Mix: shared playlists • Listen to music without announcements • Download content to listen to offline • Cancel subscriptions whenever you want.  
        </Text>

        <TouchableOpacity style={styles.button} >
          <Text style={{ fontWeight: "bold", color: "#252525" }} >EARN 3 MONTHS FREE</Text>
        </TouchableOpacity>
        
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    width: "90%",
    marginTop: 30,
    alignItems: "center"
  },
  about: {
    textAlign: "center",
    color: "#f5f5f5",
    fontSize: 16.5
  },
  button: {
    width: "95%",
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 15
  },
})

export default DuoPremium