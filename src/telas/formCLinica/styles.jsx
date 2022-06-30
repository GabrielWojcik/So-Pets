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
        // backgroundColor: "#4D4DFF",
        
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
        // backgroundColor: 'red'
    
    },

    Button: {
        borderRadius: 15,
    },
    containerCadastro: {
        width: '85%',
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
        width: '85%',
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
        // justifyContent: 'center',
        resizeMode: 'cover'
        // justifyContent: "center"
    },

    text: {
        color: "#FFFFFF",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        // backgroundColor: "#000000c0"
      },
    
      textLoginCNPJ: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold',

      },
    
})


export default styles;