import React from "react";
import { View, Text, Button } from "react-native";

function Principal() {
  return (
    <View style={{flex: 1,
    backgroundColor: "#E2C1BB",
    justifyContent: "center",
    alignItems: "center"}}>
      <Text style={{fontSize: 28}}>Olá, mundo! React Native</Text>
      <Button title="Ok" color="magenta"/>
    </View>
  )
}

export default Principal;
