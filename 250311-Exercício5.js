import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1},

  superior: {
    flex: 5,
    flexDirection: "row"},

  inferior: {
    flex: 1,
    flexDirection: "row"},

  retangulo: {
    flex: 1},

  quadrado: {
    flex: 1},

});

const Padrao: React.FC = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.superior}>
        <View style={[styles.retangulo, { backgroundColor: "white" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "yellow" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "cyan" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "green" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "magenta" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "red" }]}></View>
        <View style={[styles.retangulo, { backgroundColor: "blue" }]}></View>
      </View>
    
      <View style={styles.inferior}>
        <View style={[styles.quadrado, { backgroundColor: "darkblue" }]}></View>
        <View style={[styles.quadrado, { backgroundColor: "white" }]}></View>
        <View style={[styles.quadrado, { backgroundColor: "purple" }]}></View>
        <View style={[styles.quadrado, { backgroundColor: "#080808" }]}></View>
        <View style={[styles.quadrado, { backgroundColor: "#080808" }]}></View>
        <View style={[styles.quadrado, { backgroundColor: "#080808" }]}></View>
      </View>
    </View>
  );
};

export default Padrao;
