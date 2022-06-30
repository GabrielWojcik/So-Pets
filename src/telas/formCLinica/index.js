import React from "react";
import styles from './styles';
import imagemLogin from '../../../assets/imagemTelaLogin.jpg';

import { Text, ImageBackground, View,  Button  } from "react-native";


export default function QuestionClinca(props) {
    

    return<>
    <View style={styles.container}>
    <ImageBackground source={imagemLogin} style={styles.image}>
        <View style={styles.containerInputsLogin}>
            <Text style={styles.text}>So Pets CNPJ</Text>



        <View style={styles.containerBtn}>
            <Text style={styles.textLoginCNPJ}>Já possui cadastro CNPJ?</Text>
            
            <Button title="Login" style={styles.btnLogin} color="#00a000"
               onPress={() => {
                props.navigation.navigate('loginClinica')
            }}
            >
            </Button>

        </View>


        <View style={styles.containerCadastro}>
        <Text style={styles.textLoginCNPJ}>Realizar Cadastro</Text>
            <Button title="Cadastrar" style={styles.btnLogin} color="red"
            onPress={() =>{
                props.navigation.navigate('CadastroCLinica')
              }}> 
              </Button>
              

        </View>

        </View>
    </ImageBackground>
    </View>
    </>



}