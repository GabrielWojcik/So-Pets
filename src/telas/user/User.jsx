import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';
import styles from './styles';
import IconeGato from '../../../assets/cnpj/cat.png';

export default function User(props){

    const [ idUser, setIdUser] = useState(null);
    const [idUsuario, setIdUsuario] = useState([]);
    const [dataUsuario, setDataUsuario] = useState([]);
    const [ senhaAntiga, setSenhaAntiga ] = useState(null);
    const [ novaSenha, setNovaSenha ] = useState(null);
    const [ confNovaSenha, setConfNovaSenha ] = useState(null);
    const [ msg, setMsg ] = useState(null);


    const getUsers = useCallback( async () => {
        try{
            const response = await fetch(`${config.urlRootNode}usuario/${idUsuario}`);
            const json = await response.json();
            // console.log('log do json novo exemplo', json)
            setDataUsuario(json);

        }catch (error) {
            console.log(error)
        }
    }) 

    useEffect(() => {
        async function getIduser()
        {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            // console.log('id' ,json.id);
            setIdUsuario(json.id)
            setIdUser(json.id);
        }
        getIduser();
    })

    const fetchData = async () => {
        try{
            const response = await fetch(`${config.urlRootNode}usuario/${idUsuario}`);
            const json = await response.json();
            // console.log('log do json novo exemplo', json)
            setDataUsuario(json);

        }catch (error) {
            console.log(error)
        }
      };


    useEffect(() => {
        const willFocusSubscription = props.navigation.addListener('focus', () => {
          fetchData();
        });
        return willFocusSubscription;
      }, [props.navigation]);

    // console.log('state' , dataUsuario)

    async function sendForm() {
        Alert.alert(
            "Senha atualizada 😺",
            "Sua senha foi atualizada com sucesso ✅🔒" ,
            [
            {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )


        let response = await fetch(`${config.urlRootNode}verifyPass`,{
            method:'POST',
            headers: {
                Aceept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            })
        });
        let json = await response.json();
        // console.log('log do json', json)
        setMsg(json);
    }
    getUsers();

    return(
        // <ImageBackground source={ImagemDeFundo} style={styles.image}> 
        <View style={styles.container}>

            <Image  source={IconeGato} style={styles.iconeGato} />
            <Text style={styles.msgAlert}>{msg}</Text>
            <Text style={styles.titleUsuario}>Bem Vindo {Object.keys(dataUsuario).findIndex((e) => e=='users') != -1 ? dataUsuario.users.nome : ''  }</Text>
            
            <Text style={styles.titleSenha}>Atualizar Senha</Text>
            <Text style={styles.inputText}>Senha Antiga</Text>
            <TextInput style={styles.TextInput} placeholder='Senha Antiga:' placeholderTextColor="#000" onChangeText={text => setSenhaAntiga(text)} />
            <Text style={styles.inputText}>Nova Senha</Text>
            <TextInput style={styles.TextInput} placeholder='Nova Senha:' placeholderTextColor="#000" onChangeText={text => setNovaSenha(text)}/>
            <Text style={styles.inputText}>Confirme a Nova Senha</Text>
            <TextInput style={styles.TextInput} placeholder='Confirmação da Nova Senha:' placeholderTextColor="#000" onChangeText={text => setConfNovaSenha(text)}  />

            <TouchableOpacity onPress={() => sendForm()}>
                <Text style={styles.btnSenha}>Redefinir senha 🔒</Text>
            </TouchableOpacity>
          
        </View>
            // </ImageBackground>
    )


}