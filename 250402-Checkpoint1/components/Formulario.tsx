/*
Checkpoint 1 - Mobile Application Development

2TDSR

NOME: Carolina Estevam Rodgerio
RM: 554975
*/

// ITEM B: componente "formulário"

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

interface PropsFormulario {

  funcaoAdicionarTarefa: (tarefa: { nome: string; data: string; estado: string }) => void;
  funcaoIrParaLista: () => void;

}

export default function TelaFormulario({ funcaoAdicionarTarefa, funcaoIrParaLista }: PropsFormulario) {

// ITEM C: criação de variáveis de estado

  const [nomeTarefa, setNomeTarefa] = useState("");
  const [dataTarefa, setDataTarefa] = useState("");
  const [estadoTarefa, setEstadoTarefa] = useState("");

// ITEM D: criação da função "Cadastrar tarefa" 
  
  const funcaoCadastrarTarefa = () => {
    funcaoAdicionarTarefa({ nome: nomeTarefa, data: dataTarefa, estado: estadoTarefa });
    setNomeTarefa("");
    setDataTarefa("");
    setEstadoTarefa("")
  };

  return (

    <View style={estilos.container}>
      <Text style={estilos.texto}>Nome:</Text>
      <TextInput style={estilos.input} value={nomeTarefa} onChangeText={setNomeTarefa} />

      <Text style={estilos.texto}>Data:</Text>
      <TextInput style={estilos.input} value={dataTarefa} onChangeText={setDataTarefa} />

      <Text style={estilos.texto}>Estado:</Text>
      <TextInput style={estilos.input} value={estadoTarefa} onChangeText={setEstadoTarefa} />

      {/* ITEM D: implementação do botão "Cadastrar" */}
      <Button title="Cadastrar" onPress={funcaoCadastrarTarefa} />
      <Button title="Ir para Listagem" onPress={funcaoIrParaLista} />
    </View>

  );
}

const estilos = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: "seagreen"
  },

  texto: {
    fontSize: 16,
    marginTop: 10
  },

  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "white"
  },

});