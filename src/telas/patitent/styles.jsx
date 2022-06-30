import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent: 'center',
        marginTop: 50
        
    },

    tituloContainer: {
        fontSize: 26,
        marginLeft: 15,

    },

    containerTitulo: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },

    iconeLixeira: {
        width: 30,
        height: 30,
        marginLeft: 15,
    },

    tituloInput: {
        paddingLeft: 15
    },

    icone: {
        width: 50,
        height: 50,
        marginLeft: 15
    },

    ContainerDivisao: {
        marginLeft: 15,
        width: '89%',
        height: 2,
        backgroundColor: '#808080',
    },

    ContainerInput: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: 55,
    },

    containerDesmarcarConsulta: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15


    },

    containerBtn: {
        width: '20%'
    },

    btn: {
        width: 25
    },

    TextInput: {
        marginLeft: 15,
        marginBottom: 15,
        justifyContent: 'center',
        borderWidth: 1,
        height: 50,
        width: '89%',
        borderColor: '#808080',
    }





})

export default styles