/*
Checkpoint 1 - Mobile Application Development

2TDSR

NOME: Carolina Estevam Rodgerio
RM: 554975
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TelaFormulario from "./components/Formulario";
import TelaLista from "./components/Lista";

interface TipoTarefa {

  nome: string;
  data: string;
  estado: string

}

export default function App() {

  const [telaAtual, setTelaAtual] = useState<"formulario" | "lista">("formulario");
  const [listaTarefas, setListaTarefas] = useState<TipoTarefa[]>([]);

  const funcaoAdicionarTarefa = (novaTarefa: TipoTarefa) => {
    setListaTarefas([...listaTarefas, novaTarefa])
  };

  return (

    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoCabecalho}>Lista de Tarefas</Text>
      </View>

      {/* ITEM A: mecanismo de navegação que altera entre o formulário e a lista */}
      <View style={estilos.conteudo}>
        {telaAtual === "formulario" ? (
          <TelaFormulario funcaoAdicionarTarefa={funcaoAdicionarTarefa} funcaoIrParaLista={() => setTelaAtual("lista")} />
        ) : (
          <TelaLista listaTarefas={listaTarefas} funcaoIrParaFormulario={() => setTelaAtual("formulario")} />
        )}
      </View>

    </View>

  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1
  },

  cabecalho: {
    flex: 0.2, // ITEM A: view com 20% da altura total
    backgroundColor: "seagreen", // ITEM A: background da cor "seagreen"
    justifyContent: "center",
    alignItems: "center"
  },

  textoCabecalho: {
    fontSize: 24,
    color: "white"
  },

  conteudo: {
    flex: 0.8 // ITEM A: view com 80% da altura total
  },

});