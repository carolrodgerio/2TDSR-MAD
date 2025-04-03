/*
Checkpoint 1 - Mobile Application Development

2TDSR

NOME: Carolina Estevam Rodgerio
RM: 554975
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";

// ITEM E: implementação do componente que recebe dados via props

interface PropsTarefa {

  tarefa: {
    nome: string;
    data: string;
    estado: string
  };

}

// ITEM F: implementação do componente que exibe as tarefas cadastradas na tela

export default function ItemTarefa({ tarefa }: PropsTarefa) {

  return (
    <View style={estilos.container}>
      <Text style={estilos.nome}>{tarefa.nome}</Text>
      <Text>{tarefa.data}</Text>
      <Text>{tarefa.estado}</Text>
    </View>
  );

}

const estilos = StyleSheet.create({

  container: {
    backgroundColor: "beige",
    padding: 15,
    marginVertical: 8,
    borderColor: "mediumseagreen", // ITEM E: borda "mediumseagreen"
    borderRadius: 10, // ITEM E: arredondamento de 10 pixels
    borderWidth: 1 // ITEM E: espessura de 1 pixel
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold"
  },

});