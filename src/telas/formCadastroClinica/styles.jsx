
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerTitulo: {
        justifyContent:'center',
        alignItems:'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
        color: "#FF6400",
    },
    containerInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20
    },
    picker: {
        width: '80%',
        height: 50,
        borderColor: 'orange',
        borderRadius: 10,
        borderWidth: 2,
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#FF6400',
        borderWidth: 2,
        width: '80%',
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10
        },
    dateComponent: {
        width: '80%',
        borderWidth: 2,
        borderColor: '#FF6400',
        height: 50,
        marginBottom: 20
    },
    containerBtn: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#FF6400",
    },
    btn: {
        borderRadius: 20,
        borderColor: "#FF6400",
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

});

export default styles;