import React, { useState } from "react";
import styles from './styles';
import imagemLogin from '../../../assets/imagemTelaLogin.jpg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Ionicons} from '@expo/vector-icons';
import { Text, ImageBackground, View, TextInput, TouchableOpacity,  Button  } from "react-native";

export default function LoginClinica(props) {
    const [ cnpj, setCNPJ ] = useState(null);
    const [ crmv, setCRMV ] = useState(null);
    const [ nomeFantasia, setNomeFantasia] = useState(null);
    const [ nomeRepresentante, setNomeRepresentante ] = useState(null);
    const [ hidePass, setHidePass ] = useState(true);
    const [ errorLogin, setErrorLogin ] = useState(null);
    const [ errorPassword, setErrorPassword ] = useState(null);

    const validar = () => {
        setErrorLogin("Preencha seu login corretamente")
        return false;
    }

    const salvar = () => {
        if (validar()){
            console.log("Salvo com sucesso!");
        }
    }

    async function sendForm()
    {
        let response = await fetch('http://192.168.18.2:3000/login-cnpj', {
            method: 'POST',
            headers: {
                Aceept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cnpj: cnpj,
                crmv: crmv,
                nomeFantasia: nomeFantasia,
                nomeRepresentante: nomeRepresentante
            })
        });

        let json = await response.json();
        console.log(json);
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none')
            }, 5000)
            console.log('Acesso negado, Digite um usuário')
        }else{
            props.navigation.navigate('homeClinicas')
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData = await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData));
        }
    }

    return<>
    <View style={styles.container}>
    <ImageBackground source={imagemLogin} style={styles.image}>
        <View style={styles.containerInputsLogin}>
            <Text style={styles.text}>So Pets CNPJ</Text>
            <TextInput style={styles.inputUsuarioLogin} 
            placeholder="Insira seu nome fantasia"
            errorMessage={errorLogin}
            onChangeText={text => setCNPJ(text)}
            >
            </TextInput>

        <View style={styles.inputArea}>

            <TextInput style={styles.inputUsuarioLogin} 
            placeholder="Insira seu CRMV"
            onChangeText={ (texto) => setCRMV(texto)}
            secureTextEntry={hidePass}
            errorMessage={errorPassword}
            >
            
            </TextInput>
            <TouchableOpacity style={styles.icons} onPress={ () => setHidePass(!hidePass)}>
                { hidePass ? 
                    <Ionicons name="eye" color="#FFF" size={25} />
                    :
                    <Ionicons name="eye-off" color="#FFF" size={25} />               
                }
            </TouchableOpacity>
        
        </View>

        <View style={styles.containerBtn}>
            
            <Button title="Entrar" style={styles.btnLogin} color="#00a000"
              onPress={() =>{
                props.navigation.navigate('homeClinicas')
            }}>
            </Button>
        </View>

        </View>
    </ImageBackground>
    </View>
    </>

}