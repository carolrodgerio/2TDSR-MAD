/*
Checkpoint 1 - Mobile Application Development

2TDSR

NOME: Carolina Estevam Rodgerio
RM: 554975
*/

import React from "react";
import { View, Button, FlatList, StyleSheet } from "react-native";
import ItemTarefa from "./Tarefa";

interface PropsLista {

  listaTarefas: {
    nome: string;
    data: string;
    estado: string
  }[];
  funcaoIrParaFormulario: () => void;

}

export default function TelaLista({ listaTarefas, funcaoIrParaFormulario }: PropsLista) {
  return (
    <View style={estilos.container}>
      <FlatList
        data={listaTarefas}
        renderItem={({ item }) => <ItemTarefa tarefa={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Ir para o Formulário" onPress={funcaoIrParaFormulario} />
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    padding: 20
  },

});