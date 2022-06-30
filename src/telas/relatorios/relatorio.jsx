import { View, Text, Image } from "react-native"
import { useState, useCallback } from 'react';
import config from '../../config/config.json';
import styles from './styles';
import PetCheckup from '../../../assets/gifs/PetCheckup.gif';

export default function Relatorio() {
    const[ dadosConsulta, setDadosConsulta ] = useState([]);


    const getConsultas = useCallback( async () => {
        try{
            const response = await fetch(`${config.urlRootNode}relatorios`);
            const json = await response.json();
            setDadosConsulta(json.relatorios);

        }catch (error) {
            console.log(error)
        }
    }) 

    getConsultas()

    return(
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.Titulo}>Relatórios</Text>
            </View>
            <View style={styles.containerDescricao}>
                <Image style={styles.gif} source={PetCheckup} />
                <Text style={styles.subtitulo}>Aqui você encontra informações das consultas realizadas</Text>
            </View>
        {
            dadosConsulta?.map((consulta, id) => {
                return(
                    <View style={styles.containerDados} key={id}>
                    <View style={styles.containerNum}>
                        <Text style={styles.texto}>Nome do Animal {consulta.nomePaciente}</Text>
                        <Text style={styles.numIdentificador}>Identificador {consulta.id}</Text>
                    </View>
                    <Text style={styles.texto}>Raça do Animal {consulta.raca} </Text>
                    <Text style={styles.texto}>Data da Consulta {consulta.dataConsulta}</Text>
                    <Text style={styles.texto}>Diagnostico {consulta.diagnostico}</Text>
                    <Text style={styles.texto}>Tratamento Sugerido {consulta.tratamentoSugerido}</Text>
                    </View>
                )
            })
        }
        </View>
    )
}