import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Settings from '../components/game/settingsComponent';
import Question from '../components/game/singleQuestionComponent';
import Results from '../components/game/resultsComponent';
import { observer, inject } from "mobx-react";

@inject("settingsStore")
@observer
class GameScreen extends Component {
  componentWillMount(){
    const {settingsStore, navigation} = this.props;
    settingsStore.resetGame();
    if(settingsStore.learning){
      settingsStore.prepareLearnQuestion();
    }else{
      settingsStore.prepareTestQuestion();
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Question navigation={this.props.navigation}/>
        <Results />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:30,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });

export default GameScreen;