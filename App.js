import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/telas/Login';
import Home from './src/telas/Home';
import Vacina from './src/telas/Vacina';
import Cadastro from './src/telas/Cadastro';
import CadastroUsuario from './src/telas/Registro';
import Carrinho from './src/telas/shop/Carrinho';
import Raca from './src/telas/breed/Raca';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Maps from './src/telas/maps/maps';
import User from './src/telas/user/User';
import Clinicas from './src/telas/clinica';
import QuestionClinca from './src/telas/formCLinica';
import CadastroCLinica from './src/telas/formCadastroClinica';
import LoginClinica from './src/telas/formLoginClinicas';
import HomeClinicas from './src/telas/homeClinicas';
import Consulta from './src/telas/Consulta/Consulta';
import Patient from './src/telas/patitent/Patient';
import CodigoConsulta from './src/telas/codigoConsulta';
import RelatorioConsulta from './src/telas/relatorioConsulta/relatorioConsulta';
import Relatorio from './src/telas/relatorios/relatorio';

export default function App() {

  async function teste () {
    let resData = await AsyncStorage.getItem('userData');
    console.log(JSON.parse(resData));
  }
  teste()
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Clinicas" component={Clinicas} />
            <Stack.Screen name="QuestionClinca" component={QuestionClinca} />
            <Stack.Screen name="CadastroCLinica" component={CadastroCLinica} />
            <Stack.Screen name="loginClinica" component={LoginClinica} />
            <Stack.Screen name="homeClinicas" component={HomeClinicas} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Vacina" component={Vacina} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Raca" component={Raca} />
            <Stack.Screen name="Maps" component={Maps} />
            <Stack.Screen name="Consulta" component={Consulta} />
            <Stack.Screen name="Patient" component={Patient} />
            <Stack.Screen name="CodigoConsulta" component={CodigoConsulta} />
            <Stack.Screen name="RelatorioConsulta" component={RelatorioConsulta} />
            <Stack.Screen name="Relatorio" component={Relatorio} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

