import React, { useState, useEffect, useCallback } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import config from '../config/config.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconeCachorro from '../../assets/cnpj/icons/dog.png';
import IconeVacina from '../../assets/cnpj/pet-vaccine.png';
import IconeCalendario from '../../assets/cnpj/calendario.png';
import Calendario from '../../assets/cnpj/calendar.png';


export default function ImagePickerExample(props) {
  const [image, setImage] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [dataUsuario, setDataUsuario] = useState([]);
  const [idPet, setIdPet] = useState([]);
  const [ msg, setMsg ] = useState(null);

  const getPets = useCallback( async () => {
    try{
        const response = await fetch(`${config.urlRootNode}pet/${idPet}`);
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
            // await getIduser()
            setIdPet(json.id);
            setIdUser(json.id);
        }
        getIduser();
    })
    const fetchData = async () => {
        try{
            const response = await fetch(`${config.urlRootNode}pet/${idPet}`);
            const json = await response.json();
            // console.log('log do json novo exemplo', json)
            setIdPet(json);

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



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    return result
  };

  getPets()

  return (
    <View style={styles.container}>
        <View style={{  flex: 1, width: '100%', height: 300}}>
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 250}} />}
        <Button title="Escolher Imagem" onPress={pickImage} />
            <View style={styles.containerText}>
                <Image source={IconeCachorro} style={styles.iconeTitulo} />
                <Text style={styles.text}>Carteirinha de {Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].nome : 'Animal não cadastrado'  }</Text>
            </View>

            <View style={styles.containerDescricao}>
                <Text style={styles.textDescricao}>Raça: {Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].raca : 'Raça não informada' }  </Text>
                <Text style={styles.textDescricao}>Próxima Vacina em: 179 dias </Text>
                <Text style={styles.textDescricao}>Última Vacina Aplicada: {Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].vacina : 'Sem Vacinas Registradas' } 💉 </Text>
                <Text style={styles.textDescricao}>Data de nascimento: {Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].nascimento : 'Data de nascimento não informada' }  </Text>
                <Text >{msg}</Text>
                
            </View>

            <View style={styles.containerVacinas}>
                
                <View style={styles.containerItemVacina}>
                <Text>Vacinado em</Text>
                    <Text>{}</Text>
                </View>
                <View style={styles.containerItemVacina}>
                    <Text>Última vacina</Text>
                    <Text>{Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].vacina : 'Sem Vacinas Registradas'}</Text>
                    <Image source={IconeVacina}  style={styles.iconeTitulo}/>
                </View>
                <View style={styles.containerItemVacina}>
                <Text>Revasinar em</Text>
                    <Text>(meses)</Text>
                    <Image source={Calendario}  style={styles.iconeCalendario}/>
                </View>
                <View style={styles.containerItemVacina}>
                <Text>Vacinado em</Text>
                    <Text></Text>
                </View>
                <View style={styles.containerItemVacina}>
                    <Text>Última vacina</Text>
                    <Text>{Object.keys(dataUsuario).findIndex((e) => e=='animal') != -1 ? dataUsuario.animal[0].vacina : 'Sem Vacinas Registradas'} </Text>
                    <Image source={IconeVacina}  style={styles.iconeTitulo}/>
                </View>
                <View style={styles.containerItemVacina}>
                <Text>Revasinar em</Text>
                    <Text>(meses)</Text>
                    <Image source={Calendario}  style={styles.iconeCalendario}/>

                </View>

            </View>
        
        </View>

        
    </View>
    
  );
}


const styles = StyleSheet.create({
    iconeTitulo: {
        width: 60,
        height: 60,
    },

    iconeCalendario: {
        width: 50,
        height: 50
    },

    containerImagem: {
        flex: 1,
        width: '100%',
        height: 20,
    },
    imagemSelecionada: {
        flex: 1,
        marginTop: 0,
        width: '100%',
        height: '50%',
    },
    container: {
        flex: 1,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 10
    },
    text: {
        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold'
    },
    containerDescricao: {
        marginTop: 25,
        marginLeft: 10,
    },
    textDescricao: {
        color: 'blue',
        fontSize: 19,
        fontWeight: 'bold',
        paddingBottom: 15
    },
    containerVacinas: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,
        height: '100%'
    },
    containerItemVacina: {
        alignItems:'center',
        width: '30%',
        height: '15%',
        borderColor: 'orange',
        borderRadius: 10,
        marginTop: 25,
        borderWidth: 2,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: "#7159c1",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    fazenda: {
        flexDirection: "row", 
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color: "black",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});

// export default Vacina;

 {/* <Camera style={{flex: 1}}
        type={type}
        /> */}
        {/* <Image source={cachorro} style={styles.topo} />
        <Text style={styles.titulo}>Golden Retriever</Text>

        <View style={styles.cesta}>
            <Text style={styles.nome}>Carteirinha de Osvaldo 🐕</Text>
            <Star size={60}/>

            
            <Texto style={styles.descricao}>Ultima vacina aplicada: </Texto>
            <Text style={styles.descricao}>Ultima consulta: </Text>
            <Text style={styles.descricao}>Ultima exame: </Text>
            <Text style={styles.preco}> R$ 40,00</Text>
            
        </View> */}