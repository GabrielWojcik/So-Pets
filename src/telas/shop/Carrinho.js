import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import petisco from '../../../assets/loja/petisco.png';
import detastix from '../../../assets/loja/detastix.png'
import whiskas from '../../../assets/loja/whiskas.png';
import magnuscat from '../../../assets/loja/magnuscat.png';
import Plus from 'react-native-vector-icons/EvilIcons';
import Coins from 'react-native-vector-icons/FontAwesome5';


export default function Carrinho() {
   
    const [contador, setContador] = useState([0]);

    const addItem = () => {
        setContador([...contador, ""]);
    }

    const removeItem = (position) => {
        setContador([...contador.filter((_, index) => index === 0)])
    }



    
    
    return(
        <>
        <View style={styles.containerPrincipal}>
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloPrincipal}>Carrinho de Compras</Text>
            </View>
                    <View style={styles.containerIcones}>    
                        <View style={styles.containerItem}>
                            <Image source={petisco} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                                <Text style={styles.textoItem}>Biscrok <Coins  name="coins" size={15} color="#FF6400"  style={styles.icone}/> 25</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} onPress={addItem}
                                value='25'
                                />

                            </View>
                        </View>

                        <View style={styles.containerItem}>
                            <Image source={detastix} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.textoItem}>Dentastix <Coins  name="coins" size={15} color="#FF6400" style={styles.icone}/> 25</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} />

                            </View>

                        </View>

                        <View style={styles.containerItem}>
                            <Image source={whiskas} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.textoItem}>Whiskas <Coins  name="coins" size={15} color="#FF6400" style={styles.icone}/> 25</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} />

                            </View>
                        </View>

                        <View style={styles.containerItem}>
                            <Image source={magnuscat} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.textoItem}>Magnus <Coins  name="coins" size={15} color="#FF6400" style={styles.icone}/> 75</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} />

                            </View>
                        </View>

                        <View style={styles.containerItem}>
                            <Image source={magnuscat} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.textoItem}>Magnus <Coins  name="coins" size={15} color="#FF6400" style={styles.icone}/> 75</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} />

                            </View>
                        </View>
                        
                         <View style={styles.containerItem}>
                            <Image source={magnuscat} style={styles.fotoItem}  />
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.textoItem}>Magnus <Coins  name="coins" size={15} color="#FF6400" style={styles.icone}/> 75</Text>
                                <Plus  name="plus" size={25} color="green" style={styles.icone} />

                            </View>
                        </View>

                        <View style={styles.containerCarrinho}>

                            <Text style={styles.textoCarrinho}>Saldo:</Text>
                            {/* {
                                contador.map((item, index) => {
                                    return(
                                        <View key={index}>
                                            <Text>
                                            {`valor ${index + 0}`}
                                            </Text>
                                            
                                        </View>
                                    )
                                })
                            } */}
                            <Text style={styles.textoCarrinho}>Total:</Text>

                        </View>
                    </View>
                



        </View>
        </>



    )







}
