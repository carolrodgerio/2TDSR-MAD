import React from "react";
import { Image, Switch, Text, View } from "react-native";
import caxorotiti from "./assets/caxoro.jpeg";

export default() => {
    return (
        <View style = {{flex: 1}}>
            <Text>Backup na nuvem: </Text>
            <Switch value = {false}
                thumbColor = "black"
                trackColor = {{false: "red", true: "green"}}
            />
            <Image source = {caxorotiti} style = {{flex: 1}} resizeMode = "contain" resizeMethod="auto"/>
            <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInXLjhngoTseSZr2xdJeWkbr2SsZMYvhxLw&s"}} style = {{flex: 1}} resizeMode = "contain" resizeMethod="auto"/>
        </View>
    )

}