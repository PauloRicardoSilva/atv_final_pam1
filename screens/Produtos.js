import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const produtos = [
    {
        codigo_produto:1,
        codigo_categoria:1,
        nome_produto:'Teclado',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/informatica1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:2,
        codigo_categoria:1,
        nome_produto:'Mouse',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/informatica2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:3,
        codigo_categoria:5,
        nome_produto:'Isaac SmartWatch',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/eletronico1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:4,
        codigo_categoria:5,
        nome_produto:'SmartPhone',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/eletronico2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:5,
        codigo_categoria:4,
        nome_produto:'Camiseta',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/vestuario1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:6,
        codigo_categoria:4,
        nome_produto:'Calça',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/vestuario2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:7,
        codigo_categoria:3,
        nome_produto:'Desodorante',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/higiene1.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:8,
        codigo_categoria:3,
        nome_produto:'Shampoo',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/higiene2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:9,
        codigo_categoria:2,
        nome_produto:'Caderno',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/papelaria1.png'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
    {
        codigo_produto:10,
        codigo_categoria:2,
        nome_produto:'Caneta',
        valor_produto:'90,00',
        imagem_produto:require('../assets/imagens/papelaria2.jpg'),
        descricao_produto:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque libero, tempor id blandit id, interdum ut sapien. In at turpis tempor, pulvinar magna non, condimentum tortor. Etiam quis molestie dui, a sagittis purus.'
    },
];

const itemProduto = ({item}) => {

    return (

        <View style={styles.container_produto}>

            <Image
                style={styles.imagem_produto}
                source={item.imagem_produto}
            />

            <View style={styles.container_texto_produto}> 

                <Text style={styles.dados_produto}>{item.nome_produto}</Text> 
                <Text style={styles.preco_produto}>{item.valor_produto}</Text> 

                <TouchableOpacity style={styles.detalhes_botao_produto}> 

                    <Text style={styles.texto_botao_produto}>DETALHES</Text>

                </TouchableOpacity> 

            </View>

        </View>
    );
};

export default function Produtos() {

    return (

        <SafeAreaView styles={styles.container}>

            <FlatList
                data={produtos}
                renderItem={itemProduto}
                ListEmptyComponent={<Text>A lista de produtos está vazia.</Text>}
                keyExtractor={produtos => produtos.codigo_produto}
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
    container_produto:{ 
        flex:1, 
        flexDirection:'row', 
        padding:10, 
        borderWidth:2, 
        borderRadius:10, 
        borderColor:'#CCC', 
        marginBottom:10, 
        backgroundColor:'#999', 
    }, 
    imagem_produto:{ 
        width:150, 
        height:220, 
        marginRight:10, 
        marginBottom:10,
    }, 
    container_texto_produto:{ 
        width:200, 
        justifyContent:'center', 
    }, 
    dados_produto:{ 
        fontSize:16, 
        fontWeight:'600', 
        width:'100%', 
        textAlign:'left', 
    }, 
    preco_produto:{ 
        fontSize:14, 
        fontWeight:'400', 
        width:'100%', 
        textAlign:'left', 
        color:'#CCC', 
        marginBottom:10, 
    },  
    detalhes_botao_produto:{ 
        alignItems: 'center', 
        backgroundColor: '#000000', 
        padding: 10, 
        borderRadius:5, 
        marginTop:90, 
        width:'100%', 
    }, 
    texto_botao_produto:{ 
        color:'#FFF', 
        fontSize:16, 
        fontWeight:'bold', 
    }, 
}); 