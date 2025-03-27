import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// desconstrução
const {Navigator, Screen} = createNativeStackNavigator();

const TelaA = (props : any) : React.ReactElement =>  {
  return ( 
    <View style={{flex: 1, justifyContent: "center",
        backgroundColor: "lightyellow", 
        alignItems: "center"
    }}>
      <Text style={{fontSize: 48}}>Tela A</Text>
      <Button title="Ir para Tela B" onPress={()=>{
        props.navigation.navigate("Tela B");
      }}/>
    </View>
  )
}

const TelaB = (props : any) : React.ReactElement =>  {
  return ( 
    <View style={{flex: 1, justifyContent: "center",
        backgroundColor: "lightcyan", 
        alignItems: "center"
    }}>
      <Text style={{fontSize: 48}}>Tela B</Text>
      <Button title="Ir para Tela C" onPress={()=>{
        props.navigation.navigate("Tela C");
      }}/>
    </View>
  )
}

const TelaC = (props : any) : React.ReactElement =>  {
  return ( 
    <View style={{flex: 1, justifyContent: "center",
        backgroundColor: "lightpink", 
        alignItems: "center"
    }}>
      <Text style={{fontSize: 48}}>Tela C</Text>
      <Button title="Ir para Tela A" onPress={()=>{
        // props.navigation.navigate("Tela A");
        // props.navigation.popTo("Tela A"); // não guarda no backstack
        props.navigation.popToTop(); // volta para a rota inicial
      }}/>
    </View>
  )
}

// só pode haver um navigation container por projeto

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style = {{fontSize: 48}}>Cabeçalho</Text>
        <Navigator initialRouteName="Tela B">
          <Screen name = "Tela A" component={TelaA} />
          <Screen name = "Tela B" component={TelaB} />
          <Screen name = "Tela C" component={TelaC} />
        </Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
