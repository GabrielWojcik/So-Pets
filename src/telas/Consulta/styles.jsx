import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 55,
        marginLeft: 25,
        display: 'flex',
    },

    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    TextoConsulta: {
        fontSize: 21,
        marginLeft: 15,
        fontWeight: 'bold'

    },

    scrollView: {
        width: '100%',
        height: '100%',

    },

    containerInput: {
        width: '100%',
    },

    dateComponent: {
        width: '89%',
        marginTop: 10,
        height: 50,
        marginBottom: 20
    },

    TipoConsulta: {
        width: '89%',
        marginTop: 10,
        height: 50,
        borderWidth: 1,
        borderColor: '#808080',
        marginBottom: 20
    },

    containerMapa: {
        marginTop: -65,
        height: 210,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },

    TextoMapa: {
        fontSize: 18,
        marginRight: 15,
        fontWeight: 'bold'
    },

    IconeMapa: {
        width: '20%',
        height: '30%'
    },

    containerBtnAgendar:{
        width: '89%',
        marginBottom: 35,

    },
    btnAgendar: {
        width: '80%',
    }
    

});


export default styles;