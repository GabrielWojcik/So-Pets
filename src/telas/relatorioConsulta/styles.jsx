import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        marginTop: 35,

    },

    containerTitulo: {
        display: 'flex',
        alignItems: 'center',
    },

    tituloSecao: {
        fontSize: 26
    },
    
    iconeRelatorio: {
        width: 80,
        height: 80

    },

    containerIcone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    subTitulo: {
        color: '#615ab8',
        fontSize: 16
    },

    containerInput: {
        marginLeft: 20,
        marginTop: 25,
        width: '100%',
        

    },

    tituloInput: {
        fontSize: 16

    },

    inputRelatorio: {
        width: '89%',
        marginTop: 5,
        height: 50,
        borderWidth: 1,
        borderColor: '#808080',
        // marginBottom: 10
    },

    dateComponent: {
        width: '89%',
        marginTop: 5,
        height: 50,
        // marginBottom: 10
    },

    btnContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingTop: 8

    },

    relatorios: {
        marginTop: 15,
        width: '100%',
        height: 300,
        backgroundColor: 'red',
    },
  
    



})

export default styles;