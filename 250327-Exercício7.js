import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const listaPets = [
  { nome: "Totó", raca: "Vira Lata", idade: 4, peso: 9.6, nomeDono: "Nathalia Almeida" },
  { nome: "Rex", raca: "Pastor Alemão", idade: 7, peso: 23.8, nomeDono: "Gabriel" },
  { nome: "Suri", raca: "Lhasa", idade: 9, peso: 7.0, nomeDono: "Antonio" },
  { nome: "Lassie", raca: "Cockie", idade: 16, peso: 13.0, nomeDono: "Antonio" }
];

export default function App() {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pets</Text>
      {listaPets.map((pet, index) => (
        <View key={index} style={styles.petContainer}>
          <Text style={styles.petNome}>{pet.nome}</Text>
          <Text>Raça: {pet.raca}</Text>
          <Text>Idade: {pet.idade} anos</Text>
          <Text>Peso: {pet.peso} kg</Text>
          <Text>Dono(a): {pet.nomeDono}</Text>
        </View>
      ))}
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightpink",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  petContainer: {
    borderWidth: 1,
    borderColor: "magenta",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
  },

  petNome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  
});
