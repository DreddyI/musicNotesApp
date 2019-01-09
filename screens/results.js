import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from "mobx-react";
// import {db} from '../config/firebaseConfig';

@inject("settingsStore")
@observer
class ResultsScreen extends Component {
    componentWillMount(){
    }
    render(){
        const {settingsStore} = this.props;
        const cheerUpText = settingsStore.total === settingsStore.correct 
        ? (<Text>Ты ответил правильно на все вопросы!!! ТЫ МОЛОДЧИНА!!!</Text>)
        : (<Text>Ты ответил правильно на {settingsStore.correct} вопросов из {settingsStore.total}</Text>);
        return(
            <View>
                {cheerUpText}
                <Button title="Еще раз!" onPress={()=>{this.props.navigation.navigate('Game')}}/>
            </View>
        )
    }
}

export default ResultsScreen;