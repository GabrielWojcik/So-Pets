import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInputsLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '30%',
        width: 300,
        height: 395,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: 'rgba(240, 248, 255, 0.1)'
        
    },
    textError:(text='none')=>({
        color: 'red',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 10,
        display: text
    }),
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 50
    },
    icons:{
        paddingLeft: 5,
        marginTop: -50,
    
    },

    Button: {
        borderRadius: 15,
    },
    containerCadastro: {
        width: '50%',
        marginTop: 15,
    },

    input:{
        width: '85%',
    },

    inputUsuarioLogin: {
        height: 40,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 55,
        padding: 8,

    },
    containerBtn: {
        width: '50%',
        borderRadius: 10,

    },

    btnLogin: {
        width: 15,
        height: 25,
        fontWeight: 'bold',
        backgroundColor: 'red',
        marginBottom: 5,
    },

    image: {
        flex: 1,
        resizeMode: 'cover'
    },

    text: {
        color: "#FFFFFF",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
      }
   
})

export default styles;