import styles from './styles';
import {View, Text, Button } from 'react-native';

export default function CodigoConsulta() {

    const gerarNumeroAleatorio = () => {
        var numero_aleatorio = Math.random();

        numero_aleatorio = Math.floor(numero_aleatorio * 100000);
        alert(numero_aleatorio);
    }

    return(
        <>
            <View style={styles.containerPrincipal}>
                <Text style={styles.tituloPagina}>Código da Consulta</Text>
                <Text style={styles.codigoConsulta}> O código da sua consulta é:</Text>
                <View style={styles.containerBtn}>
                    <Button title='Gerar Código'
                    onPress={gerarNumeroAleatorio}>
                    </Button>
                </View>

            </View>
        </>
    )
};