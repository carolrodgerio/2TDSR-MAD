import { StyleSheet, Text, View } from 'react-native';

interface Contato {
  id : number
  nome : string
  telefone : string
  email : string
}

const listaContatos : Contato[] = [

//  {id: 1, nome: "João", telefone: "11999999999", email: "joao@teste.com"},
//  {id: 2, nome: "Maria", telefone: "11988888888", email: "maria@teste.com"},
//  {id: 3, nome: "José", telefone: "11977777777", email: "jose@teste.com"}

]

export default function App() {

// lista de elementos visuais usando FOR OF

/** const listaElementosVisuais : React.ReactElement[] = []

  for ( const contato of listaContatos ) {
    listaElementosVisuais.push(
    <View>
      <Text>Nome: {contato.nome}</Text>
      <Text>Telefone: {contato.telefone}</Text>
      <Text>Email: {contato.email}</Text>
    </View>
    )
  }

return (
  <View style={{flex: 1}}>
    {listaElementosVisuais}
  </View>
);

 */

// lista de elementos visuais usando MAP

const listaElementosVisuais = listaContatos.map(
  ( contato : Contato ) => {
    return (
      <View style = {{backgroundColor: "lightgray", borderWidth: 1, borderRadius: 16, padding: 10, margin: 10}}>
        <Text style = {{fontSize: 18}}>Nome: {contato.nome}</Text>
        <Text style = {{fontSize: 14}}>Telefone: {contato.telefone}</Text>
        <Text style = {{fontSize: 14}}>Email: {contato.email}</Text>
      </View>
    )
  } // código a ser executado para cada elemento da lista
)

return (
  <View style={{flex: 1, justifyContent: "center"}}>
    { (listaContatos.length <= 0) && <Text>Não foram encontrados contatos</Text>}
    {listaElementosVisuais}

  { // com operador ternário
    listaContatos.length > 0 ?
      listaElementosVisuais :
        <Text>Não foram localizados contatos</Text>

  }

  </View>
);

}