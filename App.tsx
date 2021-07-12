import React from 'react';

import { useFonts} from 'expo-font' // useFonts é responsavel por carregar as fontes no dispositivo
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'; // importação das fontes 
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { Routes }  from './src/routes';
import { Background } from './src/components/Background'; // Importa a função Background feita para app.tsx pois todas as páginas
                                                          // usarão dele

export default function App(){
  const [fontsLoaded] = useFonts({  // carregamento das fontes
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded){ // Significa que se as fontes não foram carregadas
      return <AppLoading/>  // continue mostrando a tela de Splash
  }
  return(
    <Background> 
      <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent // define que os itens da barra estejam por cima da transparência dela
            />
      <Routes /> 
    </Background> // Uso do background para formar apenas um elemento guardando outros
                  // já que o return não consegue compilar mais de um elemento
  )
}