import React, {useState} from "react";
import styles from './styles';
import { View, Text, TextInput, Button } from 'react-native';
import config from '../../config/config.json';


export default function CadastroCLinica() {
    const [ cnpj, setCnpj ] = useState();
    const [ endereco, setEndereco ] = useState();
    const [ nomeFantasia, setNomeFantasia ] = useState();
    const [ nomeRepresentante, setNomeRepresentante ] = useState(new Date());
    const [ crmv, setCRMV ] = useState();
    
    async function registerCNPJ(props)
    {
        
        const reqs = await fetch(config.urlRootNode+'cadastro-cnpj', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                cnpj: cnpj,
                endereco: endereco,
                nomeFantasia: nomeFantasia,
                nomeRepresentante: nomeRepresentante,
                crmv: crmv,
            })
        })

        let ress = await reqs.json();
        setMessage(ress);
        
    }

    
    return<>
    <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Cadastro CNPJ</Text>
            </View>
        <View style={styles.containerInput}> 
            <TextInput placeholder="CNPJ" 
            keyboardType="number-pad"
            style={styles.input} onChangeText={(text) => setCnpj(text)}>
            </TextInput>

            <TextInput placeholder="Endereço" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setEndereco(text) }>
            </TextInput>
        
            <TextInput placeholder="Nome Fantasia" 
            keyboardType="default"
            returnKeyType="done"
            style={styles.input} onChangeText={(text) => setNomeFantasia(text)}>

            </TextInput>

            <TextInput placeholder="Nome Representante" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setNomeRepresentante(text) }>

            </TextInput>

            <TextInput placeholder="CRMV-CE" 
            keyboardType="default"
            style={styles.input} onChangeText={(text) => setCRMV(text) }>

            </TextInput>


            
            
            <View style={styles.containerBtn}>

             <Button title="Cadastrar"  color={'#FF6400'}  style={styles.btn}
             onPress={registerCNPJ}>
            </Button> 

             </View>
        </View>

    </View>
    
    </>





}