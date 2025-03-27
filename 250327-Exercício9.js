import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  const handleCadastrar = () => {
    console.log("Fabricante:", fabricante);
    console.log("Modelo:", modelo);
    console.log("Preço:", preco);
    alert(`Veículo cadastrado!\nFabricante: ${fabricante}\nModelo: ${modelo}\nPreço: ${preco}`);
  };

  return (

    <View style={styles.container}>
      <View style={styles.viewSuperior}>
        <Image
          source={{uri: "https://images.vexels.com/media/users/3/208550/isolated/preview/2a20453c0a623fe0368d6a43ae912879-carro-esportivo-amarelo-liso.png"}}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>Concessionária de Veículos</Text>
      </View>

      <View style={styles.viewInferior}>
        <Text style={styles.caracteristicas}>Fabricante:</Text>
        <TextInput
          style={styles.input}
          value={fabricante}
          onChangeText={setFabricante}
        />

        <Text style={styles.caracteristicas}>Modelo:</Text>
        <TextInput
          style={styles.input}
          value={modelo}
          onChangeText={setModelo}
        />

        <Text style={styles.caracteristicas}>Preço:</Text>
        <TextInput
          style={styles.input}
          value={preco}
          onChangeText={setPreco}
        />

        <Button
          title="Cadastrar / Salvar"
          onPress={handleCadastrar}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  viewSuperior: {
    flex: 0.3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  viewInferior: {
    flex: 0.7,
    backgroundColor: "lightblue",
    padding: 20,
  },

  imagem: {
    width: 150,
    height: 80,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  caracteristicas: {
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    height: 40,
    borderColor: "darkblue",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

});
