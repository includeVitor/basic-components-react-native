import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Default from '../style/Default'

export const Entrada = props => 
    <View>
        <TextInput value={props.text}
            style={Default.input}
            onChangeText={props.chamarQuandoMudar}/>
    </View>


export class TextoSincronizado extends Component{

    state = {
        text: ''
    }

    alterarTexto = text => {
        this.setState({text})
    }

    render(){
        return(
            <View>
                <Text style={Default.fonte40}>{this.state.text}</Text>
                <Entrada text={this.state.text}
                    chamarQuandoMudar={this.alterarTexto} />
            </View>
        )
    }
}

export default TextoSincronizado