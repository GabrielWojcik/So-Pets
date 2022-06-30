import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, ScrollView } from "react-native";
import IconeRelatorio from "../../../assets/icons/report.gif";
import styles from "./styles";
import DatePicker from 'react-native-datepicker';
import config from '../../config/config.json';



export default function RelatorioConsulta() {
    
    const [ nomePaciente, setNomePaciente ] = useState();
    const [ dataConsulta, setDataConsulta ] = useState(new Date());
    const [ horarioConsulta, setHorarioConsulta ] = useState();
    const [ raca, setRaca ] = useState();
    const [ diagnostico, setDiagnostico ] = useState();
    const [ tratamentoSugerido, setTratamentoSugerido ] = useState();
    

    async function SendReport() {
        const reqs = await fetch(config.urlRootNode + 'relatorio-consulta', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nomePaciente: nomePaciente,
                dataConsulta: dataConsulta,
                horarioConsulta: horarioConsulta,
                raca : raca,
                diagnostico: diagnostico,
                tratamentoSugerido: tratamentoSugerido
            })
        })
        let ress = await reqs.json();
        setMessage(ress);




    }

    
    return(
            <View style={styles.Container}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.tituloSecao}>Relatórios</Text>
                </View>
                
                <View style={styles.containerIcone}>
                    <Image style={styles.iconeRelatorio} source={IconeRelatorio} />
                    <Text  style={styles.subTitulo}>Preencha os campos durante a consulta!</Text>
                </View>
                <ScrollView style={styles.ScrollView}>
                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}> Nome do paciente  </Text>
                    <TextInput style={styles.inputRelatorio} onChangeText={(text) => setNomePaciente(text)}></TextInput>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}> Data da consulta  </Text>
                    <DatePicker
                    format="DD/MM/YYYY"
                    style={styles.dateComponent}
                    date={dataConsulta}
                    onDateChange={setDataConsulta}
                    />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}> Horario da Consulta  </Text>
                    <TextInput style={styles.inputRelatorio} onChangeText={(text) => setHorarioConsulta(text)}></TextInput>
                </View>


                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}> Raça  </Text>
                    <TextInput style={styles.inputRelatorio} onChangeText={(text) => setRaca(text)}></TextInput>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}>Diagnostico  </Text>
                    <TextInput style={styles.inputRelatorio} onChangeText={(text) => setDiagnostico(text)}></TextInput>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.tituloInput}>Tratamento Sugerido  </Text>
                    <TextInput style={styles.inputRelatorio} onChangeText={(text) => setTratamentoSugerido(text)}></TextInput>
                </View>

                <View style={styles.btnContainer}>
                    <Button title="Finalizar" onPress={SendReport} />
                </View>
                
               
                </ScrollView>

                

            </View>


    )


}