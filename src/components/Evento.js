import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Default from '../style/Default'

export default class Evento extends Component{

    state = {
        text: ''
    }

    alterarTexto = text => {
        this.setState({text: text})
    }


    render(){
        return(
            <View>
                <TextInput value={this.state.texto}
                    style={Default.input}
                    onChangeText={this.alterarTexto}></TextInput>
                <Text style={Default.fonte40}>{this.state.text}</Text>
            </View>
        )
    }

}