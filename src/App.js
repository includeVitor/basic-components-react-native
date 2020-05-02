import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Default from './components/Default'
import ParImpar from './components/ParImpar'
import Inverter, { MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataforma from './components/Plataforma'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndereta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'


function Menu_Flex() {
  return (
    <Flex  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_ListaFlex() {
  return (
    <ListaFlex  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_ComunicacaoIndireta() {
  return (
    <TextoSincronizado  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_ComunicacaoDireta() {
  return (
    <Avo  nome="Vitor" sobrenome="Hugo" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_Evento() {
  return (
    <Evento  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_ValidarProps() {
  return (
    <ValidarProps ano={18} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_Plataform() {
  return (
    <Plataforma style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_Contador() {
  return (
    <Contador style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_MegaSena() {
  return (
    <MegaSena numeros={8} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_Inverter() {
  return (
    <Inverter text="React Native" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_ParImpar() {
  return (
    <ParImpar numero={1} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

function Menu_Defaut() {
  return (
    <Default texto='Flexível!!!' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Flex" component={Menu_Flex} />
      <Drawer.Screen name="Lista Flex" component={Menu_ListaFlex} />
      <Drawer.Screen name="TextoSincronizado" component={Menu_ComunicacaoIndireta} />
      <Drawer.Screen name="ComunicacaoDireta" component={Menu_ComunicacaoDireta} />
      <Drawer.Screen name="Evento" component={Menu_Evento} />
      <Drawer.Screen name="ValidarProps" component={Menu_ValidarProps} />
      <Drawer.Screen name="Plataforma" component={Menu_Plataform} />
      <Drawer.Screen name="Contador" component={Menu_Contador} />
      <Drawer.Screen name="Mega Sena" component={Menu_MegaSena} />
      <Drawer.Screen name="Inverter" component={Menu_Inverter} />
      <Drawer.Screen name="Par ou Impar" component={Menu_ParImpar} />
      <Drawer.Screen name="Default" component={Menu_Defaut} />
    </Drawer.Navigator>
  );
}


export default class App extends Component {
  render(){
    return  (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    )
  }
}