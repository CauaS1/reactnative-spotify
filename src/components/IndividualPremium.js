import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Container from './Container';

import { Title, Caption } from 'react-native-paper';

const IndividualPremium = () => {
  const title = 'Individual \nPremium'
  return (
    <Container title={title} >
      <View style={styles.mainContent}>
        <Text style={styles.about} >3 meses gratis ao fazer uma assinatura - Ate 6 contas Premium ou Kids - Aplicatido do Spotify Kids - Bloqueia a repoducao de contaudo explicido - Family Mix: playlists compartilhadas - Escute cmusica sem anuncios - Baixe conteudo para ouvir offline - Cancele as assinaturas quando quiser.</Text>

        <TouchableOpacity style={styles.threeMonthButton} >
          <Text style={{ fontWeight: "bold", color: "#252525" }} >EARN 3 MONTHS FREE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.threeMonthButton, styles.prePaid]} >
          <Text style={{ fontWeight: "bold", color: "#252525" }} >PRE PAID PLAN</Text>
        </TouchableOpacity>

      </View>
    </Container>
  )
}

const styles = StyleSheet.create({

  //Main COntent
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
  //buttons
  threeMonthButton: {
    width: "95%",
    padding: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 15
  },
  prePaid: {
    width: "85%",
  }
})

export default IndividualPremium;