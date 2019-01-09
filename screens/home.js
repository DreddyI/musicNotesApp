import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    componentWillMount(){}
    render(){
        return(
            <View>
                <Text>Привет, давай учить ноты!</Text>
                <Button title='Играть' onPress={this._onPressPlay}/>
                <Button title='Настройки' onPress={this._onPressSettings}/>
                <Button title='Результаты' onPress={this._onPressResults}/>
            </View>
        )
    }
    _onPressPlay = ()=>{
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