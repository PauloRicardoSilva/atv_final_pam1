import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login({navigation}) {

    return (

      <SafeAreaView style={styles.container}>

        <Text style={styles.texto}>Boas-Vindas!</Text>
  
        <View style={styles.topo}>
          <Image style={styles.lista}
            source={require('../assets/lista.png')}
          />
        </View>

        <Text style={styles.texto}>Clique no botão abaixo para acessar o catálogo de produtos e categorias</Text>
  
        <TouchableOpacity onPress={()=>{
          navigation.navigate('DrawerMenu')
        }}
          style={styles.btndrawer}>
            <Text style={styles.textdrawer}>Catálogo</Text>
        </TouchableOpacity>
  
      </SafeAreaView>
    );
};
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      padding: 16
    },
    topo: {
      alignItems: 'center'
    },
    lista: {
      width: 250,
      height: 250
    },
    texto: {
      fontSize: 28,
      fontWeight: '500',
      color: '#333',
      marginBottom: 30,
      textAlign: 'center'
    },
    btndrawer: {
      backgroundColor: '#3480EB',
      padding: 20,
      marginBottom: 30,
      borderRadius: 10
    },
    textdrawer: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
      color: '#FFF'
    }
});