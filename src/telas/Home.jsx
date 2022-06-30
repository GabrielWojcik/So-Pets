import React,{ useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView  } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconeCachorro from '../../assets/cnpj/icons/dog.png';
import IconeGato from '../../assets/cnpj/icons/cat.png';
import IconeMapa from '../../assets/consulta/mapaAmerelo.png';
import IconeLoja from '../../assets/consulta/petshop.png';
import IconeRaca from '../../assets/consulta/pets.png';
import IconeConsulta from '../../assets/consulta/animaldoctor.png';
import IconeCadastro from '../../assets/consulta/paw-print.png';
import IconeGuia from '../../assets/start/icone-inicio.png';
import config from '../../config/config.json';


export default function Home(props) {

    const [ idUser, setIdUser ] = useState(null);
    const [ idUsuario, setIdUsuario ] = useState([]);
    const [ dataUsuario, setDataUsuario ] = useState([]);


    const getUsers = useCallback( async () => {
        try{
            const response = await fetch(`${config.urlRootNode}usuario-home/${idUsuario}`);
            const json = await response.json();
            console.log('log do json novo exemplo', json)
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
            console.log('id' ,json.id);
            setIdUsuario(json.id)
            setIdUser(json.id);
        }
        getIduser();
    })

    const fetchData = async () => {
        try{
            const response = await fetch(`${config.urlRootNode}usuario/${idUsuario}`);
            const json = await response.json();
            console.log('log do json novo exemplo', json)
            setDataUsuario(json);

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


    getUsers()

    return(
        <View style={styles.containerMain}>
            <View style={styles.containerTitulo}>
                <Text style={styles.containerTexto}>Olá, {Object.keys(dataUsuario).findIndex((e) => e=='users') != -1 ? dataUsuario.users.nome : ''  }</Text>
                <Image source={IconeCachorro} style={styles.iconeTitulo} />    
                <Image source={IconeGato} style={styles.iconeTitulo} />    
            </View>    

        <ScrollView style={styles.scrollView}>
            <View style={styles.containerCards}>
                <View style={styles.containerCard}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Pet</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                         <TouchableOpacity onPress={() => props.navigation.navigate('Vacina')}>
                            <Image style={styles.iconeTitulo} source={IconeCachorro} />
                         </TouchableOpacity>

                        </View>
                </View>


                <View style={styles.containerCardPurple}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Cadastro</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Cadastro',)}>
                            <Image style={styles.iconeTitulo} source={IconeCadastro} />
                        </TouchableOpacity>
                        </View>
                </View>


                <View style={styles.containerCardPurple}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Clinicas</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Maps',)}>
                            <Image style={styles.iconeTitulo} source={IconeMapa} />
                        </TouchableOpacity>
                        </View>
                </View>

                <View style={styles.containerCard}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Loja</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Carrinho')}>
                        <View style={styles.containerIconeCard}>
                            <Image style={styles.iconeTitulo} source={IconeLoja} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Perfil</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
                            <Image style={styles.iconeTitulo} source={IconeRaca} />
                        </TouchableOpacity>
                        </View>
                </View>

                <View style={styles.containerCardPurple}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Consulta</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Consulta',)}>
                            <Image style={styles.iconeTitulo} source={IconeConsulta} />
                        </TouchableOpacity>
                        </View>
                </View> 

                <View style={styles.containerCardPurple}>
                    <View style={styles.containertextoCard}>
                        <Text style={styles.textoCard}>Raças</Text>
                    </View>
                        <View style={styles.containerIconeCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Raca',)}>
                            <Image style={styles.iconeTitulo} source={IconeGuia} />
                        </TouchableOpacity>
                        </View>
                </View> 
            </View>
            </ScrollView>
        </View>


    
    )
}

const styles = StyleSheet.create({
    containerCards: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 800,
        flexWrap: 'wrap',
        marginLeft: 20,
        marginBottom: 40

    },

    containerCardPurple: {
        marginTop: 45,
        width: '40%',
        height: '20%',
        backgroundColor: '#AB66EA',
        marginRight: 30,
        borderRadius: 10,
        alignItems: 'center'
    },

    containerCard: {
        marginTop: 45,
        width: '40%',
        height: '20%',
        backgroundColor: '#FF6400',
        marginRight: 30,
        borderRadius: 10,
        alignItems: 'center'
    },

    containertextoCard: {
        marginTop: 15,
    },


    textoCard: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 21,

    },

    containerIconeCard: {
        width:'100%',
        marginTop: 10,
        alignItems: 'center',
    },

    scrollView: {
        width: '100%',
        height: '100%',
    },

    containerMain:{
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 35,
        display:'flex',
        width: '100%',

    },

    containerTitulo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },

    containerTexto: {
        marginLeft: 15,
        fontSize: 26,
    },  

    iconeTitulo: {
        width: 60,
        height: 60,
    },

    containerMenu: {
        width: '90%',
        height: '15%',
        borderColor: '#FF6400',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center',
        alignItems:'center',
        display: 'flex',
        flexDirection: 'row'
    },
    textoMenu: {
        color: '#FF6400',
        fontSize: 48,
        fontWeight: 'bold',
        paddingLeft: 10
    },


    container: {
       flex: 1,
       display:'flex',
       flexDirection: 'row',
       justifyContent:'center',
       marginTop: '10%',
       marginLeft: '10%',
       marginRight: '10%',
    },

    containerOptions: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        height: '15%',
        marginBottom: 50,
        borderWidth: 2,
        borderRadius: 10,
        alignItems:'center',
        borderColor: 'white',
        justifyContent: 'center',
    },
    containerIcone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    
    textoIcone:{
        color: 'white',
        fontWeight: 'bold',
        justifyContent:'center',
        fontSize: 45,
    },
    image: {
        flex: 1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: '100%',
        resizeMode: 'cover'
    },

    icone: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    }
})