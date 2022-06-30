import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import styles from './style';
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Baidu from 'react-native-vector-icons/Entypo';

export default  function Maps() {
    const[latitude, setLatitude] = useState(-25.4282);
    const[longitude, setLongitude] = useState(-49.2733);
        return(
            <MapView
            region={{
                latitude,
                longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              style={styles.mapView}
              rotateEnabled={false} //não deixa o usuario rotacionar
              scrollEnabled={true}
              zoomEnabled={true}
              showsPointsOfInterest={false}
              showsBuildings={false}
              >
                  <Marker coordinate={{ latitude : -25.5874 , longitude : -49.405 }}
                    image={require('../../../assets/maps/markerv4.png')}
                    title="SOe pets"
                    description='daijdiojadio'>
                        
                  <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                            <Text style={styles.name}>CLINICA FAVORITA</Text>
                            <Text>A short description</Text>
                            <Image style={styles.image} source={require('../../../assets/cachorro.png.jpg')} />
                            </View>
                            <View style={styles.arrowBorder} />
                            <View style={styles.arrow} />

                        </View>
                  </Callout>
                  </Marker>

                  <Marker coordinate={{ latitude : latitude , longitude : longitude }}
                    image={require('../../../assets/maps/markerv4.png')}
                    title="SOe pets"
                    description='daijdiojadio'
                  >
                  
                  <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                            <Text style={styles.name}>Clinica So Pets</Text>
                            <Text>Cães e Gatos</Text>
                            <Text>🐶😺🧑‍⚕️</Text>
                            {/* <Image style={styles.image} source={require('../../../assets/cachorro.png.jpg')} /> */}
                            </View>
                            <View style={styles.arrowBorder} />
                            <View style={styles.arrow} />

                        </View>
                  </Callout>
                  </Marker>

                  <Marker coordinate={{ latitude : -23.5489 , longitude : -46.6388 }}
                    image={require('../../../assets/maps/markerv4.png')}
                    title="SOe pets"
                    description='daijdiojadio'
                  >
                  
                  <Callout tooltip>
                        <View>
                            <View style={styles.bubble}>
                            <Text style={styles.name}>CLINICA FAVORITA</Text>
                            <Text>A short description</Text>
                            <Image style={styles.image} source={require('../../../assets/cachorro.png.jpg')} />
                            </View>
                            <View style={styles.arrowBorder} />
                            <View style={styles.arrow} />

                        </View>
                  </Callout>
                  </Marker>
              </MapView>

        );
    }
 const styles = StyleSheet.create({
        mapView:{
            width:'100%',
            height: '100%',
        },
        bubble: {
            flexDirection: 'column',
            alignSelf: 'flex-start',
            backgroundColor: "#fff",
            borderRadius: 6,
            borderColor: '#ccc',
            borderWidth: 0.5,
            padding: 15,
            width: 150,
        },
        name: {
            fontSize: 15,
            marginBottom: 5,
        },
        arrow: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderTopColor: '#fff',
            borderWidth: 16,
            alignItems: 'center',
            marginTop: -32,
        },
        arrowBorder: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderTopColor: '#007a87',
            borderWidth: 16,
            alignSelf: 'center',
            marginTop: -0.5,
        },
        image: {
            width: 120,
            height: 80,
        },
    })
   