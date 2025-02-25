import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  titulo: {fontSize: 28, fontWeight: "bold"},
  texto: {fontSize: 18},
  container: {flex: 1, backgroundColor: "white"},
  input: {borderWidth: 1, borderColor: "blue"},
  formContainer: {marginBottom: 20},
  buttonContainer: {flexDirection: "row", justifyContent: "space-between"}
});

function Formulario() {
  return (
    
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Restaurante</Text>
    
      <View style={estilos.formContainer}>
        <Text style={estilos.texto}>Nome do estabelecimento</Text>
        <TextInput style={estilos.input}/>

        <Text style={estilos.texto}>Tipo da comida</Text>
        <TextInput style={estilos.input}/>

        <Text style={estilos.texto}>Nível do preço</Text>
        <TextInput style={estilos.input}/>

        <Text style={estilos.texto}>Satisfação geral</Text>
        <TextInput style={estilos.input}/>

        <Text style={estilos.texto}>Endereço</Text>
        <TextInput style={estilos.input}/>
      </View>

      <View style={estilos.buttonContainer}>
        <Button title="Gravar"/>
        <Button title="Pesquisar"/>
      </View>
    </View>
  );
}

export default Formulario;
