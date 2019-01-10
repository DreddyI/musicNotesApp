import React, {Component} from 'react';
import { View, Text, Image, Alert, TouchableHighlight, Button } from 'react-native';
import { observer, inject } from 'mobx-react';
import {notesImages} from '../../config/notesConfig';
import Toast from 'react-native-root-toast';

@inject("settingsStore")
@observer
class Question extends Component {
    componentWillMount(){}
    render() {
        const question = this.props.settingsStore.question;
        
        const notes = question.notes.map((note)=>{
            const noteImage = notesImages[note];
            return (
                <TouchableHighlight key={note} onPress={()=>{this.alert(note === question.correctNote)}}>
                    <Image source={noteImage}/>
                </TouchableHighlight>
            )
        });
        
      return (
        <View style={{flex:5}}>
          <Text>Выбери ноту {question.noteName}</Text>
          <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
            {notes}
          </View>
          {this.props.settingsStore.learning && (<Button title="Закончить" onPress={this.endLearning} />)}
        </View>
      );
    }

    alert = (answer)=>{
        this.props.settingsStore.updateInfo(answer);

        if(this.props.settingsStore.learning){
            let message = 'Ошибочка. Попробуй еще раз';
            if(answer){
                message = 'Ура! Ты ответил правильно!';
                this.props.settingsStore.updateTotal();
                this.props.settingsStore.prepareLearnQuestion();
            }
            let toast = Toast.show(message, {
                duration: Toast.durations.LONG,
                position: 200,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                    // calls on toast\`s appear animation start
                },
                onShown: () => {
                    // calls on toast\`s appear animation end.
                },
                onHide: () => {
                    // calls on toast\`s hide animation start.
                },
                onHidden: () => {
                    // calls on toast\`s hide animation end.
                }
            });
        } else {
            if(this.props.settingsStore.isGameFinished) {
                this.props.navigation.navigate('Results');
            } else {
                this.props.settingsStore.prepareTestQuestion();
            }
        }
    }

    endLearning = () => {
        this.props.settingsStore.finishGame();
        this.props.navigation.navigate('Results');
    }
}

export default Question;