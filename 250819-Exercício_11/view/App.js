import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import { observer } from "mobx-react-lite";
import ApiControl from "./control/ApiControl";

const control = new ApiControl();

const App = observer(() => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {control.loading && (
        <ActivityIndicator size="large" color="blue" />
      )}
      <Text style={{ marginVertical: 20 }}>{control.mensagem}</Text>
      <Button title="Carregar dados" onPress={() => control.carregarDados()} />
    </View>
  );
});

export default App;
