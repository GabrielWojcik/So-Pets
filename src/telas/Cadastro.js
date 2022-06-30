import { Picker  } from "react-native";
import DatePicker from 'react-native-datepicker';
import React, { useState } from "react";
import { Text, Image,Alert ,StyleSheet, ImageBackground, View, TextInput, TouchableOpacity,  Button } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import imagemLogin from '../../assets/imagemTelaLogin.jpg';
import imagem from '../../assets/wallpaperCadastro.png';
import config from "../config/config.json";

export default function Cadastro() {

        const [ nome, setNome ] = useState();
        const [ peso, setPeso ] = useState();
        const [ altura, setAltura ] = useState();
        const [ nascimento, setDataNascimento ] = useState(new Date());
        const [ vacina, setVacinas ] = useState();  
        const [ raca, setRaca ] = useState();

    async function regiterUser(){
        Alert.alert(
            "Animal Cadastrado 🐶",
            "Cadastro Realizado com sucesso ✅." ,
            [
            {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )
        
        const reqs = await fetch(config.urlRootNode+'pet-cadastro', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                peso: peso,
                altura: altura,
                nascimento: nascimento,
                vacina: vacina,
                raca: raca,
            })
        })

        

        let ress = await reqs.json();
        setMessage(ress);
        
    }

    return<>
     <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Cadastro Animal</Text>
            </View>
        <View style={styles.containerInput}> 
            <TextInput placeholder="Nome Animal" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setNome(text)}>
            </TextInput>

            <TextInput placeholder="Peso" 
            keyboardType="number-pad"
            style={styles.input} onChangeText={(text) => setPeso(text) }>
            </TextInput>

            <TextInput placeholder="Altura" 
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.input} onChangeText={(text) => setAltura(text)}>

            </TextInput>

            <DatePicker
            format="DD/MM/YYYY"
            style={styles.dateComponent}
            date={nascimento}
            onDateChange={setDataNascimento}
            /> 

          

            <TextInput placeholder="Vacinas" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setVacinas(text) }>

            </TextInput>


            <Picker
            selectedValue={setRaca}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setRaca(itemValue)}
            onChangeText={text => setRaca(text)}
            >
                <Picker.Item label="Afegão Hound" value="Afegão Hound" />
                <Picker.Item label="Affenpinscher" value="Affenpinscher" />
                <Picker.Item label="Airedale Terrier" value="Airedale Terrier" />
                <Picker.Item label="Akita" value="Akita" />
                <Picker.Item label="Basset Hound" value="Basset Hound" />
                <Picker.Item label="Border Collie" value="Border Collie" />
                <Picker.Item label="Boxer" value="Boxer" />
                <Picker.Item label="Buldogue Francês" value="Buldogue Francês" />
                <Picker.Item label="Buldogue Inglês" value="Buldogue Inglês" />
                <Picker.Item label="Bull Terrier" value="Bull Terrier" />
                <Picker.Item label="Chow Chow" value="Chow Chow" />
                <Picker.Item label="Fila Brasileiro" value="Fila Brasileiro" />
                <Picker.Item label="Pastor Alemão" value="Pastor Alemão" />
                <Picker.Item label="Pug" value="Pug" />
                <Picker.Item label="Pinscher Miniatura" value="Pinscher Miniatura" />
            </Picker> 
            
            <View style={styles.containerBtn}>

             <Button title="Cadastrar"  color={'#FF6400'}  style={styles.btn}
             onPress={() => regiterUser}>
            </Button> 

             </View>
        </View>

    </View>
    
    </>
}

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