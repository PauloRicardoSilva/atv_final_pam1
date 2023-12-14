import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categorias = [
    {
        codigo_categoria:1,
        nome_categoria:'Informática',
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:2,
        nome_categoria:'Papelaria',
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:3,
        nome_categoria:'Higiene pessoal',
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:4,
        nome_categoria:'Vestuário',
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
    {
        codigo_categoria:5,
        nome_categoria:'Eletrônicos',
        observacoes_categoria:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.',
    },
];

const itemCategoria = ({item}) => {

    return (

        <View style={styles.container_categoria}>

            <View style={styles.container_texto_categoria}> 

                <Text style={styles.dados_categoria}>{item.nome_categoria}</Text> 

                <TouchableOpacity style={styles.detalhes_botao_categoria}> 

                    <Text style={styles.texto_botao_categoria}>DETALHES</Text>

                </TouchableOpacity> 

            </View>

        </View>
    );
};

export default function Categorias() {

    return (

        <SafeAreaView styles={styles.container}>

            <FlatList
                data={categorias}
                renderItem={itemCategoria}
                ListEmptyComponent={<Text>A lista de categorias está vazia.</Text>}
                keyExtractor={categorias => categorias.codigo_categoria}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({ 

    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    container_categoria:{ 
        flex:1, 
        flexDirection:'row', 
        padding:10, 
        borderWidth:2, 
        borderRadius:10, 
        borderColor:'#CCC', 
        marginBottom:10, 
        backgroundColor:'#999', 
    }, 
    container_texto_categoria:{ 
        width:200, 
        justifyContent:'center', 
    }, 
    dados_categoria:{ 
        fontSize:16, 
        fontWeight:'600', 
        width:'100%', 
        textAlign:'left', 
    }, 
    detalhes_botao_categoria:{ 
        alignItems: 'center', 
        backgroundColor: '#000000', 
        padding: 10, 
        borderRadius:5, 
        marginTop:90, 
        width:'100%', 
    }, 
    texto_botao_categoria:{ 
        color:'#FFF', 
        fontSize:16, 
        fontWeight:'bold', 
    }, 
}); 