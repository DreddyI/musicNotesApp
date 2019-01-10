import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from "mobx-react";
// import {db} from '../config/firebaseConfig';

@inject("settingsStore")
@observer
class ResultsScreen extends Component {
    componentWillMount(){}
    render(){
        const {settingsStore} = this.props;
        let cheerUpText = (<Text></Text>);
        if(!settingsStore.learning){
            cheerUpText = settingsStore.total === settingsStore.correct 
                ? (<Text>Ты ответил правильно на все вопросы!!! ТЫ МОЛОДЧИНА!!!</Text>)
                : (<Text>Ты ответил правильно на {settingsStore.correct} вопросов из {settingsStore.total}</Text>);
        }else{
            cheerUpText = (<Text>Ты правильно ответил на {settingsStore.correct} вопросов с {settingsStore.done} попыток</Text>)
        }

        console.log({
            total : settingsStore.total,
            done : settingsStore.done,
            correct : settingsStore.correct,
            learning : settingsStore.learning,
            mode : settingsStore.mode
        })
        
        return(
            <View>
                {cheerUpText}
                <Button title="Еще раз!" onPress={this.restart}/>
            </View>
        )
    }

    restart = ()=>{
        this.props.settingsStore.resetGame();
        this.props.navigation.navigate('Game');     
    }
}

export default ResultsScreen;