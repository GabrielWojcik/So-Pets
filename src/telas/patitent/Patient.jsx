import { useState, useCallback } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import config from '../../config/config.json';
import IconeElefante from '../../../assets/elephant.png';
import IconeLixeira from '../../../assets/trash.png';
import IconeEditar from '../../../assets/icons/edit.png';
import IconeClose from '../../../assets/close.png';
export default function Patient() {
    const[ dadosConsulta, setDadosConsulta ] = useState([]);
    const[ atualizar, setAtualizar] = useState([]);
    const[ nomeAnimal, setNome ] = useState();
    const[ sintomas, setSintomas ] = useState();
    const[ consulta, setConsulta ] = useState();
   

    const getConsultas = useCallback( async () => {
        try{
            const response = await fetch(`${config.urlRootNode}consulta`);
            const json = await response.json();
            setDadosConsulta(json.consulta);

        }catch (error) {
            console.log(error)
        }
    }) 

    //Envia o formulário com os dados para edição
    async function sendForm() {
        console.log('DADOSSS ATUALIZADOS')
        let response = await fetch(`${config.urlRootNode}update`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                nomeAnimal: nomeAnimal,
                sintomas: sintomas,
                consulta: consulta

            })
        })
        let json = await response.json();
        console.log(json);
    }






    function removerConsulta() {
        Alert.alert(
            "Desmarcar Consulta? 🐶",
            "Consulta desmarcada com sucesso ✅🗑." ,
            [
            {text: "Cancelar", onPress: () => console.log("Cancelar Pressed")},
            {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )
        
        fetch(`${config.urlRootNode}consulta/${dadosConsulta[0].id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        })
        setDadosConsulta(dadosConsulta)
    }

  async  function atualizarCampos() {
        const response = await fetch(`${config.urlRootNode}consulta-atualizar/${dadosConsulta[0].id}`,{
        method: 'GET',
        headers: {
            Aceept: 'application/json',
            'Content-Type':'application/json'
        }

        })
        const json = await response.json();
        console.log('DADOS DO NOVO GET' , json);
    }

    async  function atualizaConsulta() {
        const response = await fetch(`${config.urlRootNode}atualizar-consulta/${dadosConsulta[0].id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            sintomas: sintomas,
            consulta: consulta
        })

        })
       const json = await response.json()
       setAtualizar(json)
    }



    // const atualizarCampos = useCallback( async () => {
    //     try{
    //         const response = await fetch(`${config.urlRootNode}consulta-atualizar/${dadosConsulta[0].id}`);
    //         const json = await response.json();
    //         console.log('log do json novo exemplo', json)
    //         setDadosConsulta(json.consulta);

    //     }catch (error) {
    //         console.log(error)
    //     }
    // }) 
    


    getConsultas()
    return(
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloContainer}>Consultas Marcadas</Text>
                <Image style={styles.icone} source={IconeElefante} />
            </View>
            {
                dadosConsulta.map((consulta) => {
                    return(
                    <View>
                        <View  style={styles.ContainerInput}>
                        <Text style={styles.tituloInput}>Nome do Paciente</Text>
                        <TextInput style={styles.TextInput} onChangeText={text => setNome(text)}>{consulta.nomeAnimal}</TextInput>
                        <Text style={styles.tituloInput}>Sintomas</Text>
                        <TextInput style={styles.TextInput} onChangeText={text => setSintomas(text)}>{consulta.sintomas}</TextInput>
                        <Text style={styles.tituloInput}>Tipo de Consulta</Text>
                        <TextInput style={styles.TextInput} onChangeText={text => setConsulta(text)}>{consulta.tipoConsulta}</TextInput>
                            <TouchableOpacity onPress={removerConsulta}>
                            <View style={styles.containerDesmarcarConsulta}>
                                <Text>Desmarcar Consulta?</Text>
                                <Image style={styles.iconeLixeira} source={IconeClose}  />
                                <Image style={styles.iconeLixeira} source={IconeEditar} onPress={sendForm}  />
                            </View>
                            </TouchableOpacity>
                        <View style={styles.ContainerDivisao}></View>
                        </View>
                    </View>
                    )
                    
                })
            }
        </View>
    )
}