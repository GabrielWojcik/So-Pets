import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: 'center',
        width: '100%',
    },
    titleUsuario: {
        color: '#FF6400',
        fontWeight: 'bold',
        fontSize: 26,
    
    },

    iconeGato:{
        width: 70,
        height: 70
    },


    image: {
            flex: 1,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            height: '100%',
            resizeMode: 'cover'
    },

    TextInput: {
        width: '90%',
        height: '10%',
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        paddingLeft: 15
    },
    titleSenha: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 25,
        color: 'black'
    },  
    inputText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',

    },
    btnSenha: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    msgAlert: {
        color: '#FF6400',
        fontWeight: 'bold',
        fontSize: 22
    },


});

export default styles;

