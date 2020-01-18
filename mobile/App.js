/* 
quando for usar uma propriedade do css que contém um hífen, tem que tirar o hifen e colocar a primeira letra depois do hífen em maiusculo. 
E o valor passado tem que ser em formato de uma string menos os números.
Não possui herança de estilização.
*/

import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7D40E7' />    
      <Routes />
    </>
  );
}
