import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject("settingsStore")
@observer 
class HomeScreen extends Component {
    componentWillMount(){}
    render(){
        return(
            <View>
                <Text>Привет, давай учить ноты!</Text>
                <Button title='Учить' onPress={this._onPressLearn}/>
                <Button title='Проверить' onPress={this._onPressPlay}/>
                <Button title='Настройки' onPress={this._onPressSettings}/>
                <Button title='Результаты' onPress={this._onPressResults}/>
            </View>
        )
    }
    _onPressLearn = ()=>{
        this.props.settingsStore.setLearnMode(true);
        this.props.navigation.navigate('Game')
    }
    _onPressPlay = ()=>{
        this.props.settingsStore.setLearnMode(false);
        this.props.navigation.navigate('Game');
    }
    _onPressSettings= ()=>{
        this.props.navigation.navigate('Settings');
    }
    _onPressResults = ()=>{
        this.props.navigation.navigate('Results');
    }
}

export default HomeScreen;