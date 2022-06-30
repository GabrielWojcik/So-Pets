import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/Entypo';
import IconeNotes from 'react-native-vector-icons/Foundation';
import Clinica from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/FontAwesome';



export default function Clinicas(props) {

    function onOpened(result) {
        console.log('Mensagem: ' , result.notifcation.payload.body);
        console.log('Result: ', result);
    }

    return <>
    <View style={styles.containerMain}>
    <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Perfil</Text>
            <User name="user-circle-o" size={48} color="#FF6400" style={styles.icone}
             onPress={() => props.navigation.navigate('User')}
            />
        </View>
        <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Vacinas</Text>
            <Icon name="heart" size={48} color="#FF6400" style={styles.icone}
             onPress={() => props.navigation.navigate('Vacina')}
            />
        </View>

        <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Raças</Text>
            <Icone name="baidu" size={48} color="#FF6400" style={styles.icone}
            onPress={() => props.navigation.navigate('Raca',)}
            />
        </View>

        <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Loja</Text>
            <Icone  name="shopping-cart" size={48} color="#FF6400" style={styles.icone}
            onPress={() => props.navigation.navigate('Carrinho',)}
            />
        </View>
        <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Cadastro</Text>
            <IconeNotes  name="clipboard-notes" size={48} color="#FF6400" style={styles.icone}
            onPress={() => props.navigation.navigate('Cadastro',)}/>
        </View>

        <View style={styles.containerMenu}>
            <Text style={styles.textoMenu}>Clinicas</Text>
            <Clinica  name="hospital-o" size={48} color="#FF6400" style={styles.icone}
            onPress={() => props.navigation.navigate('Maps',)}/>
        </View>
        </View>

    
    </>
}

const styles = StyleSheet.create({
    containerMain:{
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 35,
        alignItems:'center',
        justifyContent:'center',
        display:'flex',

    },
    containerMenu: {
        width: '90%',
        height: '15%',
        borderColor: '#FF6400',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center',
        alignItems:'center',
        display: 'flex',
        flexDirection: 'row'
    },
    textoMenu: {
        color: '#FF6400',
        fontSize: 48,
        fontWeight: 'bold',
        paddingLeft: 10
    },


    container: {
       flex: 1,
       display:'flex',
       flexDirection: 'row',
       justifyContent:'center',
       marginTop: '10%',
       marginLeft: '10%',
       marginRight: '10%',
    },

    containerOptions: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        height: '15%',
        marginBottom: 50,
        borderWidth: 2,
        borderRadius: 10,
        alignItems:'center',
        borderColor: 'white',
        justifyContent: 'center',
    },
    containerIcone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    
    textoIcone:{
        color: 'white',
        fontWeight: 'bold',
        justifyContent:'center',
        fontSize: 45,
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

    icone: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    }
})