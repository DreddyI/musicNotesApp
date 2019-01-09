import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject("settingsStore")
@observer
class Results extends Component {
    render() {
      return (
        <View style={{flex:1}}>
          <Text>Пройдено {this.props.settingsStore.done} из {this.props.settingsStore.total} вопросов</Text>
        </View>
      );
    }
}

export default Results;