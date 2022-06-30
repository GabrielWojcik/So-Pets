import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerPrincipal: {
        display: 'flex',
        marginTop: 35,
        backgroundColor: 'white',
    },
    containerTitulo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloPrincipal: {
        fontSize: 35,
        color: '#FF6400',
        fontWeight: 'bold'
    },
    containerIcones: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',

    },  
    containerItem: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 65,
        marginLeft: 25,
        marginRight: 25,
        // borderWidth: 1, //BORDA DOS QUADRADOS
        borderRadius: 10,
        width: '30%',
        height: '15%',
        borderColor: '#000000'
    },
    containerCarrinho: {
        display: 'flex',
        justifyContent:'center',
        marginTop: 150,
        width: '100%',
        height: '10%',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#FF6400',
        color: '#FF6400',
    },  
    fotoItem: {
        marginTop: 5,
        width: '90%',
        height: '90%',
    },
    textoItem: {
        
        paddingTop: 10,
        fontSize: 15
    },
    containerPlus: {
        display: 'flex',
        flexDirection: 'row'
    },
    containerTexto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoCarrinho: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 10,
        color: '#FF6400',
    },


})

export default styles;