import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Container from './Container';

const FamilyPremium = () => {
  const title = "Family \nPremium"
  return (
    <Container title={title} >
      <View style={styles.mainContent} >
        <Text style={styles.about} >
          2 Premium accounts - Duo Mix: shared playlist for two - Listen to music without ads - Download content to listen offline - Skip as many tracks as you like- Enjoy the sound on demand - Cancel when you want
        </Text>

        <TouchableOpacity style={styles.button} >
          <Text style={{ fontWeight: "bold", color: "#252525" }} >EARN 3 MONTHS FREE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.prePaid]} >
          <Text style={{ fontWeight: "bold", color: "#252525" }} >PRE PAID PLAN</Text>
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
    fontSize: 17
  },
  button: {
    width: "95%",
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 15
  },
  prePaid: {
    width: "85%"
  }
});

export default FamilyPremium;