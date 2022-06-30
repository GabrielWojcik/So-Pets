import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, {useState, useEffect, useRef} from "react";
import styles from './styles';
import Calendario from '../../../assets/consulta/calendar.png';
import Mapa from '../../../assets/consulta/maps.png';
import { Text, View, Image, TextInput, Button, Alert, Platform, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import config from '../../config/config.json';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });


export default function Consulta(props) {
    const [ expoPushToken, setExpoPushToken ] = useState('');
    const [ notification, setNotification ] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const [ nascimentoAnimal, setDataNascimento ] = useState(new Date());
    const [ dataConsulta, setDataConsulta ] = useState(new Date());
    const [ nomeAnimal, setNomeAnimal ] = useState();
    const [ tipoConsulta, setTipoConsulta ] = useState();
    const [ sintomas, setSintomas ] = useState();
    const [ horario, setHorario] = useState();

    useEffect(() => {
        // Passo 1 : token
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        // Passo 3
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        // Passo 3

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

             <View style={styles.containerHeader}>
                 <Image style={styles.IconeCalanderio} source={Calendario} />
                 <Text  style={styles.TextoConsulta}>Agende sua consulta </Text>
             </View>

            <View style={styles.containerMapa}>
                 <Text style={styles.TextoMapa} onPress={() =>{props.navigation.navigate('Maps')}}>Encontrar Clinicas</Text>
                 <Image style={styles.IconeMapa} source={Mapa}/>

             </View>

             <View style={styles.containerInput}>

                <Text>Horário da Consulta</Text>
                
                <TextInput placeholder="Horário" style={styles.TipoConsulta}
                 onChangeText={(text) => setHorario(text)}></TextInput>

                 <Text>Data da Consulta</Text>
                
                 <DatePicker
                 format="DD/MM/YYYY"
                 style={styles.dateComponent}
                 date={dataConsulta}
                 onDateChange={setDataConsulta}
                 /> 

                 <Text>Idade do animal </Text>
                 <DatePicker
                 format="DD/MM/YYYY"
                 style={styles.dateComponent}
                date={nascimentoAnimal}
                 onDateChange={setDataNascimento}
                 /> 
                
                 <Text>Nome do Animal</Text>
                
                 <TextInput placeholder="Nome do Animal" style={styles.TipoConsulta}
                 onChangeText={(text) => setNomeAnimal(text)}></TextInput>

                 <Text>Tipo de Consulta</Text>
                
                 <TextInput placeholder="Tipo de consulta" style={styles.TipoConsulta}
                 onChangeText={(text) => setTipoConsulta(text)}></TextInput>

                 <Text>Sintomas Aparentes (Se houver)</Text>
                 <TextInput placeholder="Ex.Tristesa, falta de apetite" style={styles.TipoConsulta}
                 onChangeText={(text) => setSintomas(text)}></TextInput>
                
                 <View style={styles.containerBtnAgendar}>
                     
                <Button
                    title="Agendar"
                    onPress={async () => {
                    await sendPushNotification(expoPushToken);
                    }}
                />

                 </View>

             </View>



         </View>
         </ScrollView>
      );

      async function sendPushNotification(expoPushToken) {
        


        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Consulta Agendada! ✅',
          body: 'Sua Consulta foi agendanda com sucesso, Obrigado! So Pets 🐶😺 ',
          data: { someData: 'goes here' },
        };
      
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });

        //Requisição para enviar dados da consulta
        const reqs = await fetch(config.urlRootNode+'agendar-consulta', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                horario: setHorario,
                dataConsulta: dataConsulta,
                nascimentoAnimal: nascimentoAnimal,
                nomeAnimal: nomeAnimal,
                tipoConsulta: tipoConsulta,
                sintomas: sintomas,
            })
        })

        let ress = await reqs.json();
        setMessage(ress);

        Alert.alert(
                    "Consulta Registrada 🐶",
                    "Sua Consulta foi registrada com sucesso ✅." ,
                    [
                    {text: "OK", onPress: () => console.log("OK Pressed")}
                    ]
                )
      }
      
      async function registerForPushNotificationsAsync() {
        let token;
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
      }
    
    





    
}
    
    