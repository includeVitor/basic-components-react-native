import React from 'react'
import { View, Text } from 'react-native'
import Default from '../style/Default'



function parOuImpar(num){
    if(num % 2 == 0){
        return <Text style={Default.ex}>Par</Text>
    }else{
      return <Text style={Default.ex}>Impar</Text>
    }
}


export default props =>

    <View>
        {parOuImpar(props.numero)}              
    </View>