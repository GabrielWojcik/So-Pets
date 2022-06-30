import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPrincipal: {
        width: '100%',
        height: '100%',
        marginTop: 45,
        marginLeft: 25,
        // backgroundColor: 'red'
    },
    iconeUsuario: {
        marginLeft: 15,
        width: 100,
        height: 150,
    },
    containerUsuario: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    textoBemVindo: {
        marginTop: 25,
        marginLeft: 15,
        fontSize: 26,
        fontWeight: 'bold',
        // color: '#FF6400',
        color: 'black',
    },

    lembrete: {
        marginTop: 35,
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080',

    },

    containerLembre: {
        width: '78%',
        height: 40,
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 10,
        borderColor:  '#808080',
        borderWidth: 2,
        justifyContent: 'center'



    },

    textoLembreConsulta: {
       marginLeft: 15

    },

    containerPrincipalCard: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        flexWrap: 'wrap',
        
    },

    containerCard: {
        marginTop: 45,
        width: '40%',
        height: '20%',
        backgroundColor: '#FF6400',
        marginRight: 30,
        borderRadius: 10,
        alignItems: 'center'
    },

    containertextoCard: {
        marginTop: 15,
    },

    textoCard: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,

    },

    containerIconeCard: {
        width:'100%',
        marginTop: 10,
        alignItems: 'center',
    },

    IconeDog: {
        width: 80,
        height: 80
    },




});

export default styles
   