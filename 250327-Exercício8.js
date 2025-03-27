import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const listaProdutos = [
  { nome: "Camiseta", preco: 29.99, categoria: "Roupas" },
  { nome: "Tênis", preco: 79.99, categoria: "Calçados" },
  { nome: "Celular", preco: 899.99, categoria: "Eletrônicos" },
  { nome: "Livro", preco: 19.99, categoria: "Livros" }
];

export default function App() {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      {listaProdutos.map((produto, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.nomeProduto}>{produto.nome}</Text>
          <Text>Preço: R$ {produto.preco.toFixed(2)}</Text>
          <Text>Categoria: {produto.categoria}</Text>
        </View>
      ))}
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  itemContainer: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 12,
    marginBottom: 8,
    borderRadius: 5,
    width: "100%",
  },

  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

});
