import React, { useState } from "react";
import { Text, Image, StyleSheet, ImageBackground, View, TextInput, TouchableOpacity,  Button, Alert  } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import imagemLogin from '../../assets/imagemTelaLogin.jpg';
import imagem from '../../assets/wallpaperCadastro.png';
// import { text } from "body-parser";
import config from "../config/config.json";

export default function Cadastro() {

    const [nameUser, setNameUser] = useState(null);
    const [userNameLast, setUserNameLast] = useState(null);
    const [dataNasc, setDataNasc] = useState(null);
    const [userCpf, setCpf] = useState(null);
    const [userEndereco, setEndereco] = useState(null);
    const [userEstado, setEstado] = useState(null);
    const [userTelefone, setTelefone] = useState(null);
    const [userLogin, setLogin] = useState(null);
    const [userPassoword, setPassoword] = useState(null);
    const [message, setMessage] = useState(null);
    const [hidePass, setHidePass] = useState(true);


    async function regiterUser(){
        Alert.alert(
            "Cadastro Realizado 🐶",
            "Cadastro Realizado com sucesso ✅." ,
            [
            {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )
        const reqs = await fetch(config.urlRootNode+'create', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: nameUser,
                userNameLast: userNameLast,
                dataNasc: dataNasc,
                userCpf: userCpf,
                userEndereco: userEndereco,
                userEstado: userEstado,
                userTelefone: userTelefone,
                userLogin: userLogin,
                userPassoword: userPassoword,
            })
        })
        let ress = await reqs.json();
        setMessage(ress);
    }

    return<>
     <View style={styles.container}>
        {
            message && (
              <Text>{message}</Text>
            )
        }
        <ImageBackground source={imagem} style={styles.image}>
        <View style={styles.containerInput}> 
            <TextInput placeholder="Nome" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setNameUser(text)}>
            </TextInput>

            <TextInput placeholder="Sobrenome" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setUserNameLast(text) }>
            </TextInput>


            <TextInput placeholder="Data de Nascimento" 
            style={styles.input} onChangeText={(text) => setDataNasc(text)}>

            </TextInput>

            <TextInput placeholder="CPF" 
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.input} onChangeText={(text) => setCpf(text)}>

            </TextInput>

            <TextInput placeholder="Endereço" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setEndereco(text) }>

            </TextInput>


            <TextInput placeholder="Estado" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setEstado(text)}>

            </TextInput>

            <TextInput placeholder="Telefone" 
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.input} onChangeText={(text) => setTelefone(text)}>

            </TextInput>

            <TextInput placeholder="Login" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setLogin(text)}>

            </TextInput>

            <TextInput placeholder="Senha" 
            secureTextEntry={hidePass}
            style={styles.input} onChangeText={(text) => setPassoword(text)}>

            </TextInput>

            <View style={styles.containerBtn}>

             <Button title="Cadastrar"  color="#00a000" style={styles.btn}
             onPress={regiterUser}>
            </Button> 

             </View>

        </View>

        
    
    </ImageBackground>

    </View>
    
    
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    containerInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 65
    },
    input: {
        backgroundColor: '#cfcfcf',
        borderColor: '#cfcfcf',
        borderWidth: 1,
        width: '80%',
        height: 50,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10
        },
    containerBtn: {
        width: '80%',
        borderRadius: 20
    },
    btn: {
        borderRadius: 20
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

});