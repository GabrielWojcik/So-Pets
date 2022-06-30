import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        width: '100%',
        marginTop: 55,
        backgroundColor: '#FFF',
    },

    containerTitulo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    Titulo: {
        fontSize: 26
    },

    containerDescricao: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 15,
        paddingRight: 15,
        color: '#808080',
        height: 50
    },

    gif:{
        width: 60,
        height: 60
    },
        

    subtitulo: {
        color: '#808080',
        fontSize: 13,
    },

    containerDados: {
        backgroundColor: '#615ab8',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        width: '90%',
        marginTop: 25,
        marginLeft: 15,

    },

    texto: {
        color: 'white',
        fontWeight: "bold",
        paddingLeft: 15
    },

    containerNum: {
        display: 'flex',
        flexDirection: 'row',

    },

    numIdentificador: {
        paddingLeft: 85,
        color: 'orange',
        fontWeight: 'bold'
    }

})

export default styles;
