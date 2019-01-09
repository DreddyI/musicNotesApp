import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Settings from '../components/game/settingsComponent';
import Questions from '../components/game/questionsComponent';
import Results from '../components/game/resultsComponent';
import { observer, inject } from "mobx-react";

@inject("settingsStore")
@observer
class GameScreen extends Component {
  componentDidMount(){
    const {gameStore, navigation} = this.props;
  }
  
  render(){
    const { gameStore, navigation } = this.props;
    // if(gameStore.mode === 'easy'){
        return (
          <View style={styles.container}>
            <Settings />
            <Questions />
            <Results />
          </View>
        );
      // }else{
        // return (
          // <View style={styles.container}>
            // <Settings />
            // <Text>Доступен только легкий вариант</Text>
          // </View>
        // );
      // }
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