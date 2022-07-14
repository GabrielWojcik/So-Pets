import React, { useState } from "react";
import { Text, Image, StyleSheet, ImageBackground, View, TextInput, TouchableOpacity,  Button  } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import imagemLogin from '../../assets/imagemTelaLogin.jpg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config/config.json";

const image = { uri: "../../assets/imagemTelaLogin.jpg"};

export default function Login(props) {
    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [errorLogin, setErrorLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);

    const validar = () => {
        setErrorLogin("Preencha seu login corretamente")
        return false;
    }

    const salvar = () => {
        if (validar()){
            console.log("Salvo com sucesso!");
        }
    }
    //Envio do formulário de login
    async function sendForm()
    {
        console.log('Entrei na função login')
        
        let response = await fetch(`${config.urlRootNode}login`, {
            //let response = await fetch('http://192.168.18.30/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    name: user,
                    password: password
                })
            });
            
        console.log('entreiii')
        let json = await response.json();
        //let json = await response.text();
        //console.log(json);
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none')
            }, 5000)
            console.log('Acesso negado, Digite um usuário')
        }else{
            props.navigation.navigate('home')
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData = await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData));
        }
    }

    return <>

    <View style={styles.container}>
    <ImageBackground source={imagemLogin} style={styles.image}>
        <View style={styles.containerInputsLogin}>
            <Text style={styles.text}>So Pets</Text>
            <Text style={styles.textError(display)}>Usuário ou senha inválidos!</Text>
            <TextInput style={styles.inputUsuarioLogin} 
            placeholder="Insira seu usuario"
            errorMessage={errorLogin}
            onChangeText={text => setUser(text)}
            >
            </TextInput>

        <View style={styles.inputArea}>

            <TextInput style={styles.inputUsuarioLogin} 
            placeholder="Insira sua senha"
            // value={input}
            onChangeText={ (texto) => setPassword(texto)}
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
              sendForm()
            }}>
            </Button>

            {/* <Button title="Entrar" style={styles.btnLogin} color="#00a000"
              onPress={() =>{
                props.navigation.navigate('home')
            }}>
            </Button> */}
        </View>

        <View style={styles.containerCadastro}>
            <Button title="Cadastrar" style={styles.btnLogin} color="red"
            onPress={() =>{
                // props.navigation.navigate('CadastroV1')
                props.navigation.navigate('CadastroUsuario')
              }}> 
              </Button>
              

        </View>

        <View style={styles.containerCadastro}>
            <Button title="Clinica" style={styles.btnLogin} color="orange"
            onPress={() =>{
                // props.navigation.navigate('CadastroV1')
                props.navigation.navigate('QuestionClinca')
              }}> 
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
      }
   
})