import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject("settingsStore")
@observer
class SettingsScreen extends Component {
    componentDidMount(){
        const {settingsStore} = this.props
    }
    render(){
        const {settingsStore, navigation} = this.props;
        const modeName = settingsStore.modeName;
        return(
            <View>
                <Text>Настройки</Text>
                <View>
                    <Text>Режимы</Text>
                    <Text>Выбран режим: {modeName}</Text>
                    <View>
                        <Button title="Легко" onPress={this._onPressEasy} />
                        <Button title="Нормально" onPress={this._onPressNormal} />
                        <Button title="Сложно" onPress={this._onPressHard} />
                    </View>
                    {/* <Button title="Назад" onPress={()=>{navigation.navigate('Home')}} /> */}
                </View>
            </View>
        )
    }

    _onPressEasy = () => {
        this.props.settingsStore.setMode('easy');
    }
    _onPressNormal = () => {
        this.props.settingsStore.setMode('normal');
    }
    _onPressHard = () => {
        this.props.settingsStore.setMode('hard');
    }
}

export default SettingsScreen;