import React from "react";
import { Button, Text, View } from "react-native";

export default() => {
    return (
        <View>
            <Button title = "Incrementar" onPress={() => alert("Incrementando...")}/>
            <Text>Contagem: 0</Text>
            <Button title = "Decrementar" onPress={() => alert("Decrementando...")}/>
        </View>
    )


}