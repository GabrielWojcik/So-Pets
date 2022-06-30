import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import IconeDoctor from '../../../assets/cnpj/icons/doctor-male.png'
import IconeDog from '../../../assets/cnpj/icons/dog.png';
import IconeAnimal from '../../../assets/cnpj/icons/animal.png';
import IconeTurtle from '../../../assets/cnpj/icons/turtle.png';
import IconeFrog from '../../../assets/cnpj/icons/frog.png';
import config from '../../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function HomeClinicas(props) {
    const [ dataUsuario, setDataUsuario ] = useState([]);
    const [ idUsuario, setIdUsuario ] = useState([]);
    const [ idUser, setIdUser ] = useState(null);


    
    const getUsers = useCallback( async () => {
        try{
            const response = await fetch(`${config.urlRootNode}usuario/${idUsuario}`);
            const json = await response.json();
            setDataUsuario(json);

        }catch (error) {
            console.log(error)
        }
    }) 

    // useEffect(() => {
    //     getIduser();
    //     return () => {
    //         setIdUsuario();
    //         setIdUser();
    //     }
    // })
    useEffect(() => {
        async function getIduser()
        {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            // console.log('id' ,json.id);
            setIdUsuario(json.id)
            setIdUser(json.id)
            // .finally(() => {
            //     console.log('Carregado o ID')
            // })
        }
        getIduser();
    })

    // function getIduser( () =>
    
    // {
    //     let response = AsyncStorage.getItem('userData');
    //     let json = JSON.parse(response);
    //     setIdUsuario(json.id)
    //     setIdUser(json.id);
    // })



    // const fetchData = async () => {
    //     try{
    //         const response = await fetch(`${config.urlRootNode}usuario/${idUsuario}`);
    //         const json = await response.json();
    //         // console.log('log do json novo exemplo', json)
    //         setDataUsuario(json);

    //     }catch (error) {
    //         console.log(error)
    //     }
    //   };

    //   useEffect(() => {
    //     const willFocusSubscription = props.navigation.addListener('focus', () => {
    //       fetchData();
    //     });
    //     return willFocusSubscription;
    //   }, [props.navigation]);


    // getUsers()
    return<>
    <View style={styles.containerPrincipal}>
       
            <Image style={styles.iconeUsuario} source={IconeDoctor} />
            
            {/* {
                dataUsuario.map((usuario) => {
                    return(
                        <Text style={styles.textoBemVindo}>Olá, {usuario.nomeRepresentante}</Text>
                    )
                })
            } */}

             {/* <Text style={styles.textoBemVindo} >Olá, Gabriel</Text> */}
             <Text style={styles.textoBemVindo} >Olá, {Object.keys(dataUsuario).findIndex((e) => e=='userCnpj') != -1 ? dataUsuario.userCnpj.nomeRepresentante : ''  }</Text>
             <Text style={styles.lembrete}>Não se esqueça!</Text>
             
             <View style={styles.containerLembre}>
                 <Text style={styles.textoLembreConsulta}> 🩺 Consulta com Max 🐶</Text>
             </View>
             
             <View style={styles.containerPrincipalCard}>
                <View style={styles.containerCard}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Patient')}>
                  <View style={styles.containertextoCard}>
                    <Text style={styles.textoCard}>Agenda</Text>

                  </View>
                    <View style={styles.containerIconeCard}>
                        <Image style={styles.IconeDog} source={IconeDog}/>

                    </View>
                </TouchableOpacity>
                
                </View>

                <View style={styles.containerCard}>
                <TouchableOpacity onPress={() => props.navigation.navigate('RelatorioConsulta')}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Paciente</Text>

                    </View>
                    <View style={styles.containerIconeCard}>
                        <Image style={styles.IconeDog} source={IconeAnimal} />
                    </View>
                </TouchableOpacity>



                </View>

                <View style={styles.containerCard}>
                <TouchableOpacity onPress={() => props.navigation.navigate('CodigoConsulta')}>
                <View style={styles.containertextoCard}>
                    <Text style={styles.textoCard}>Código</Text>

                  </View>
                    <View style={styles.containerIconeCard}>
                        <Image style={styles.IconeDog} source={IconeTurtle} />
                    </View>
                </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Relatorio')}>
                
                <View style={styles.containertextoCard}>
                    <Text style={styles.textoCard}>Relatórios</Text>

                  </View>
                    <View style={styles.containerIconeCard}>
                        <Image style={styles.IconeDog} source={IconeFrog} />
                    </View>

                </TouchableOpacity>
                </View>
            </View>
    </View>
    </>
}