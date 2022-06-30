import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Button, Modal, TouchableOpacity  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import IconeBeagle from '../../../assets/racas/beagle.png';
import IconeGatoPersa from '../../../assets/racas/gato-persa.jpg';
import IconeClose from '../../../assets/icons/close.png';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTTH = SLIDER_WIDTH * 0.88

const carouselItem = [
    {
        title: 'Schnauzer',
        imgUrl:
        'https://www.itl.cat/pngfile/big/244-2441590_running-dog-wallpaper-cachorrinho-plano-de-fundo.jpg'
    },
    {   
        title: 'Pug',
        imgUrl:
        'http://wallpapertops.com/walldb/original/0/a/a/814368.jpg'
    },
    {
        title: 'Pastor Alemão',
        imgUrl:
        'https://besthqwallpapers.com/Uploads/18-1-2018/37680/thumb2-german-shepherd-dog-4k-large-dog-domestic-dog.jpg'
    },
    {
        title: 'Persa',
        imgUrl:
        'https://static1.patasdacasa.com.br/articles/4/39/24/@/16973-persa-branco-felino-precisa-de-cuidados-articles_media_mobile-1.jpg'
    },
    {
        title: 'Beagle',
        imgUrl:
        'https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-18.jpg'
    }

]



function carouselCardItem({ item }){
    return(
        <View style={styles.cardCarousel}>
            <Image style={styles.image} source={{ uri: `${item.imgUrl}`}}/>
            {/* <Text style={styles.textCarrosel}>{item.title}</Text> */}
        </View>
    )
}

export default function Raca() {
    const [modalVisible, setModalVisible] = useState(false);




    return(
    <>
        <View style={styles.containerPrincipal}>
            <Carousel 
            loop={true}
            autoplay={true}
            autoplayDelay={2000}
            autoplayInterval={4000}
            layout={'tinder'}
            layoutCardOffset={10}
            data={carouselItem}
            renderItem={carouselCardItem}
            sliderWidth={500}
            itemWidth={500}
            useScrollView={true}
            />
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>
        <View style={styles.modal}>
            <TouchableOpacity onPress={() => {
                setModalVisible({ isVisible: false });
            }}>
                <Image style={styles.btnClose} source={IconeClose} />

            </TouchableOpacity>
                  <Text style={styles.textoModal}>Beagle</Text>
                  <Text style={styles.textoDecricaoModal}>
                  <Text style={styles.letraInicial}>C</Text>achorros da raça Beagle são conhecidos por serem muito alegres e brincalhões. 
                  Sua principal característica é a paixão por farejar, especialmente comida! 
                  São muito curiosos e adoram botar o focinho no chão e sair à procura de novas descobertas 
                  (e provavelmente querer comer essas descobertas também). Sua origem, no entanto, é meio incerta. 
                  Existem comprovações de que a raça ganhou notoriedade na Inglaterra, onde era muito popular entre os nobres.
                  No entanto, alguns registros mostram cães muito parecidos com os Beagles datados de 400a.c na região da Grécia. 
                  De qualquer forma, foi no Reino Unido que a raça conquistou os corações de todos. Eles apareciam em variados tamanhos 
                  e portes, apesar de apresentarem as mesmas características físicas. A Rainha Elizabeth I (1533 – 1603) tinha como companheiro 
                  um mini Beagle, com apenas nove centímetros de altura. No começo do século XIX, os criadores de cães começaram a padronizar seus exemplares, 
                  mas os Beagles que conhecemos hoje não são muito diferentes dos primeiros cachorros de milhares de anos atrás. O American Kennel Club foi fundado 
                  em 1884 e pouco tempo depois, em 1885 o Beagle já foi oficialmente registrado como uma raça pura.




                  </Text>
            {/* <Button
              title="Clique Para Fechar Modal"
              onPress={() => {
                setModalVisible({ isVisible: false });
              }}
            /> */}
          </View>




        </Modal>
            

            <View style={styles.containerTitulo}>
                <Text style={styles.textoTitulo}>Guia de Raças</Text>
            </View>

            <View style={styles.containerGuia}>
                <Image source={IconeBeagle} style={styles.ContainerImagem} />
                <View>
                    <Text style={styles.textoRaca}>Beagle</Text>
                    <Text style={styles.avaliacaoPet}>Energia ⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Crianças ⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Lealdade ⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Inteligência ⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Latido ⭐⭐⭐⭐</Text>
                    <TouchableOpacity onPress={() =>  setModalVisible(true) } >
                        <Text style={styles.VerMais}>Leia mais</Text>
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.containerGuia}>
                <Image source={IconeGatoPersa} style={styles.ContainerImagem} />
                <View>
                <Text style={styles.textoRaca}>Persa</Text>
                <Text style={styles.avaliacaoPet}>Energia ⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Crianças ⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Lealdade ⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Inteligência ⭐⭐⭐⭐</Text>
                    <Text style={styles.avaliacaoPet}>Miar ⭐</Text>
                    <TouchableOpacity onPress={() =>  setModalVisible(true) } >
                        <Text style={styles.VerMais}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

        
        </View> 
           
    
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      },
    
    btnClose:{
        marginLeft: 280,
        width: 50,
        height: 50,
      },
    
      textoModal:{
        fontSize: 26,
        fontWeight: 'bold',
      },

      textoDecricaoModal:{
        fontSize: 16,
        textAlign: 'justify',
        marginTop: 15,
        width: '80%'
      },
    
      letraInicial: {
        fontSize: 66,
        fontFamily:'sans-serif',
        fontStyle: 'italic'
      },


    containerTitulo:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    textoTitulo: {
        fontSize: 26,

    },

    containerGuia:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 15,
        width: '90%',
        height: 155,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },

    textoRaca: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 65,
    },

    VerMais: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        paddingLeft: 5,
        backgroundColor: 'green',
        marginLeft: 155,
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold'
    },

    avaliacaoPet: {
        marginLeft: 15

    },

    ContainerImagem: {
        marginTop: 25,
        width: 100,
        height: 100
    },

    cardCarousel: {
        borderRadius: 4,
        height: 300,
        padding: 20,
        marginTop: 25,
        alignItems: 'center'

    },
    image: {
        width: 500,
        height: 300,
        borderRadius: 4,
    }
})