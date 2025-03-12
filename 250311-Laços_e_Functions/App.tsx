import React from "react";
import { Alert, Button, Text, View } from "react-native"

function meAperte() {
    Alert.alert("Botão apertado");
}

export default () => {
    return (
        <View>
            <Text>Aperte o botão abaixo</Text>
            <Button title = "Me aperte" onPress={meAperte}/>
        </View>
    )

}