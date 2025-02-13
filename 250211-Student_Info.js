import React from "react";
import { View, Text, Button } from "react-native";

function Carol() {
  return (
    <View style={{flex: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center"}}>
      <Text style={{color: "magenta"}}>Nome: Carolina Estevam Rodgerio</Text>
      <Text style={{color: "darkgrey"}}>Faculdade: FIAP</Text>
      <Text style={{color: "darkpurple"}}>Curso: Análise e Desenvolvimento de Sistemas</Text>
      <Text style={{color: "indigo"}}>Turma: 2TDSR</Text>
    </View>
  )
}

export default Carol;
