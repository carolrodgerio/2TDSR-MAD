import React from 'react';
import { View, Text } from 'react-native';

function Principal() { 
  
// UTILIZANDO CREATE ELEMENT ⬇️

  // return React.createElement( "View", {style: {flex: 1, backgroundColor: "lightcyan"}}, React.createElement("Text", {}, "Olá, mundo"));

// UTILIZANDO NOTAÇÃO JSX ⬇️

  return (
    <View style={{flex: 1, backgroundColor: "lightcyan"}}>
      <Text>Olá, mundo</Text>
    </View>
  );
}

export default Principal;
