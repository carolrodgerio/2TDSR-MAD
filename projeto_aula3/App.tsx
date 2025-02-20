import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// const textoEstilo = {fontSize: 28, fontWeight: "bold"};
// const container = {flex: 1, backgroundColor: "lightcyan"};

/**  function AgendaContatoFormulario() {
  return (<View style = {container}>
    <Text style = {textoEstilo}>Nome: </Text>
    <TextInput/>
    <Text style = {textoEstilo}>Telefone: </Text>
    <TextInput/>
    <Text style = {textoEstilo}>Email: </Text>
    <TextInput/>
    <Button title = "Gravar"/>
    <Button title = "Pesquisar"/>
  </View>) */

const estilos = StyleSheet.create({
  texto : {fontSize: 28, fontWeight: "bold"},
  container : {flex: 1, backgroundColor: "lightcyan"}
})

function AgendaContatoFormulario() {
  return (<View style = {estilos.container}>
    <Text style = {estilos.texto}>Nome: </Text>
    <TextInput/>
    <Text style = {estilos.texto}>Telefone: </Text>
    <TextInput/>
    <Text style = {estilos.texto}>Email: </Text>
    <TextInput/>
    <Button title = "Gravar"/>
    <Button title = "Pesquisar"/>
  </View>)

}

export default AgendaContatoFormulario;