import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator, Button, SafeAreaView, ScrollView } from 'react-native';
import { observer } from "mobx-react-lite";
import CarroView from './view/carroView';
import { ApiControl } from './control/apiControl';

const apiControl = new ApiControl();

const ApiView = observer(() => (
  <View style={styles.sectionContainer}>
    <Text style={styles.titulo}>Teste de API</Text>
    
    {apiControl.loading && (
      <ActivityIndicator size="large" color="#007BFF" />
    )}
    
    <Text style={styles.mensagemApi}>{apiControl.mensagem}</Text>
    
    <Button title="Carregar dados da API" onPress={() => apiControl.carregarDados()} />
  </View>
));

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <CarroView />

        <View style={styles.separator} />

        <ApiView />

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    width: '95%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  mensagemApi: {
    marginVertical: 20,
    fontSize: 16,
    textAlign: 'center',
    minHeight: 25,
  },
  separator: {
    height: 2,
    width: '90%',
    backgroundColor: '#e0e0e0',
    marginVertical: 30,
  }
});
