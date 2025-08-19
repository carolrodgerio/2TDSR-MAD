import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { CarroControl } from "../control/carroControl";
import { Carro } from "../model/carro";

export default function CarroView() {
    const control = new CarroControl();
    const [ano, setAno] = useState("");
    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [carros, setCarros] = useState<Carro[]>(control.listar());

    const adicionar = () => {
        if (ano && placa && modelo) {
            control.criar(Number(ano), placa, modelo);
            setCarros(control.listar());
            setAno("");
            setPlaca("");
            setModelo("");
        }
    };

    const remover = (id: number) => {
        control.remover(id);
        setCarros(control.listar());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Carros</Text>
            <TextInput placeholder="Ano" keyboardType="numeric" value={ano} onChangeText={setAno} style={styles.input} />
            <TextInput placeholder="Placa" value={placa} onChangeText={setPlaca} style={styles.input} />
            <TextInput placeholder="Modelo" value={modelo} onChangeText={setModelo} style={styles.input} />
            <Button title="Adicionar" onPress={adicionar} />

            <FlatList
                data={carros}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.ano} - {item.modelo} ({item.placa})</Text>
                        <Button title="Remover" onPress={() => remover(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 40 },
    titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    input: { borderWidth: 1, padding: 8, marginBottom: 10 },
    item: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 }
});
