import React, {Component} from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

class Settings extends Component {
    render() {
      return (
        <View style={styles.buttonsContainer}>
            <Button title="Настройки" style={styles.button} onPress={this._onPressSettings} />
            <Button title="Начать заново" style={styles.button} onPress={this._onPressRestart} />
            <Button title="Закончить" style={styles.button} onPress={this._onPressEnd} />
        </View>
      );
    }
  _onPressSettings(){
    Alert.alert('Переход к экрану настроек');
  }
  _onPressRestart(){
    Alert.alert(
      'Начать заново',
      'Вы хотите начать заново?',
      [
        {text:'Нет'},
        {text:'Да',onPress: this.restart},
      ]
      );
  }
  _onPressEnd(){
    Alert.alert('Закончить','Вы хотите закончить?',[
      {text:'Нет'},
      {text:'Да',onPress: this.end},
    ]);
  }
  restart(){
    console.log('restart questions list');
  }
  end(){
    console.log('show results window');
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button: {
    height:20,
  }
});

export default Settings;