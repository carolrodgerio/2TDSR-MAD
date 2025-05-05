import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const estiloApp = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ECE4B7",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D36135",
    textAlign: "center",
  },

  entrada: {
    height: 40,
    borderColor: "#E6AA68",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },

  containerBotao: {
    marginBottom: 10,
    borderRadius: 5
  },

  itemLista: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#E6AA68",
    borderWidth: 1,
  },

  textoItem: {
    fontSize: 16,
    color: "#51783F",
  },

  rotulo: {
    fontSize: 16,
    marginBottom: 5,
    color: "#51783F",
  },

  containerBotoesNavegacao: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "white",
  },

  botaoNavegacao: {
    flex: 1,
    marginHorizontal: 5,
  },

});

const Formulario = ({ inserir }) => {
  const [nomeFilme, setNomeFilme] = useState("");
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [generoFilme, setGeneroFilme] = useState("");
  const [plataformaStreaming, setPlataformaStreaming] = useState("");

  const cadastrarFilme = () => {
    const novoItem = {
      nome: nomeFilme,
      duracao: parseInt(duracaoMinutos, 10) || 0,
      genero: generoFilme,
      streaming: plataformaStreaming,
    };

    inserir(novoItem);
    setNomeFilme("");
    setDuracaoMinutos("");
    setGeneroFilme("");
    setPlataformaStreaming("");

  };

  const carregarDados = async () => {

    try {

      const valorJson = await AsyncStorage.getItem("objeto");
      const objetoCarregado = valorJson != null ? JSON.parse(valorJson) : null;
      if (objetoCarregado) {
        setNomeFilme(objetoCarregado.nome || "");
        setDuracaoMinutos(String(objetoCarregado.duracao) || "");
        setGeneroFilme(objetoCarregado.genero || "");
        setPlataformaStreaming(objetoCarregado.streaming || "");
      }

    } catch (erro) {
      console.error("Erro: ", erro);
    }

  };

  return (

    <SafeAreaView style={estiloApp.container}>
      <Text style={estiloApp.titulo}>☆ Filmes para Assistir ☆</Text>

      <Text style={estiloApp.rotulo}>Nome:</Text>
      <TextInput
        style={estiloApp.entrada}
        value={nomeFilme}
        onChangeText={setNomeFilme}
        placeholder="Digite o nome do filme"
      />

      <Text style={estiloApp.rotulo}>Duração (minutos):</Text>
      <TextInput
        style={estiloApp.entrada}
        value={duracaoMinutos}
        onChangeText={setDuracaoMinutos}
        placeholder="Digite a duração do filme em minutos"
      />

      <Text style={estiloApp.rotulo}>Gênero:</Text>
      <TextInput
        style={estiloApp.entrada}
        value={generoFilme}
        onChangeText={setGeneroFilme}
        placeholder="Digite o gênero do filme"
      />

      <Text style={estiloApp.rotulo}>Streaming:</Text>
      <TextInput
        style={estiloApp.entrada}
        value={plataformaStreaming}
        onChangeText={setPlataformaStreaming}
        placeholder="Em qual plataforma de streaming está disponível?"
      />

      <View style={estiloApp.containerBotao}>
        <Button title="Cadastrar" onPress={cadastrarFilme} color="#51783F" />
      </View>

      <View style={estiloApp.containerBotao}>
        <Button title="Carregar Dados" onPress={carregarDados} color="#51783F" />
      </View>
    </SafeAreaView>
  );
};

const Listagem = ({ listaItens }) => {
  const renderizarItem = ({ item }) => (
    <View style={estiloApp.itemLista}>

      <Text style={estiloApp.textoItem}>Nome: {item.nome}</Text>
      <Text style={estiloApp.textoItem}>Duração: {item.duracao} minutos</Text>
      <Text style={estiloApp.textoItem}>Gênero: {item.genero}</Text>
      <Text style={estiloApp.textoItem}>Streaming: {item.streaming}</Text>

    </View>
  );

  return (

    <SafeAreaView style={estiloApp.container}>
      <Text style={estiloApp.titulo}>☆ Aqui está sua lista de filmes! ☆</Text>
      {listaItens.length === 0 ? (
        <Text style={{ textAlign: "center", fontSize: 16, color: "#E6AA68" }}>
          Nenhum filme cadastrado ainda. :(
        </Text>
      ) : (
        <FlatList
          data={listaItens}
          renderItem={renderizarItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>

  );
};

const NavegacaoBotoes = () => {
  const navigation = useNavigation();

  return (

    <View style={estiloApp.containerBotoesNavegacao}>
      <View style={estiloApp.botaoNavegacao}>
        <Button
          title="Formulário"
          onPress={() => navigation.navigate("Formulário")}
          color="#D36135"
        />
      </View>

      <View style={estiloApp.botaoNavegacao}>
        <Button
          title="Listagem"
          onPress={() => navigation.navigate("Listagem")}
          color="#D36135"
        />
      </View>

    </View>

  );
};

const Principal = () => {
  const [listaDeItens, setListaDeItens] = useState([]);

  const inserirItem = async (novoItem) => {
    setListaDeItens([...listaDeItens, novoItem]);
    try {
      const valorJson = JSON.stringify(novoItem);
      await AsyncStorage.setItem("objeto", valorJson);
      console.log("Filme salvo com sucesso!");
    } catch (erro) {
      console.error("Erro: ", erro);
    }
  };

  const Navegador = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Navegador.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Navegador.Screen name="Formulário">
          {(props) => <Formulario {...props} inserir={inserirItem} />}
        </Navegador.Screen>
        <Navegador.Screen name="Listagem">
          {(props) => <Listagem {...props} listaItens={listaDeItens} />}
        </Navegador.Screen>
      </Navegador.Navigator>
      <NavegacaoBotoes />
    </NavigationContainer>
    
  );
};

export default Principal;