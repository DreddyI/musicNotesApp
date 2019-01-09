import {observable, computed, action} from 'mobx';
import {modes, octaves, notes} from '../config.json';

export default class SettingsStore {
  @observable mode = 'easy';
  @observable config = modes[this.mode]
  @observable correct = 0;
  @observable done = 0;
  @observable total = this.config.questions;
  @observable question = {};
  @observable gameFinished = false;

  @computed get modeName(){
    return this.config.name;
  }

  @computed get isGameFinished(){
    return this.gameFinished;
  }

  @action setMode(mode){
    this.mode = mode;
    this.config = modes[this.mode];
  }
  
  @action resetGame(){
    this.correct = 0;
    this.done = 0;
    this.total = this.config.questions;
  }

  @action updateInfo(answer){
    this.done++;
    if(answer){
      this.correct++;
    }
    this.gameFinished = this.done === this.total;
  }

  @action prepareQuestion(){
    const notes = [];
    for(let i =0; i<3;i++){
      let note = this.generateRandomNote();
      while(notes.indexOf(note) !== -1){
        note = this.generateRandomNote();
      }
      notes.push(note);
    }

    const correctNote = notes[Math.floor(Math.random()*3)];
    const noteName = this.generateNoteName(correctNote);

    this.question = {
      'notes':notes,
      'correctNote':correctNote,
      'noteName':noteName
    };
  }
  generateRandomNote(){
    const randomOctave = Math.floor(Math.random() * this.config.octaves.length);
      const selectedOctave = this.config.octaves[randomOctave];
      const octaveNotes = octaves[selectedOctave].notes
      const randomNoteNum = Math.floor(Math.random() * octaveNotes.length);
      const randomNote = octaves[selectedOctave].notes[randomNoteNum];
      const note = selectedOctave+randomNote;
      return note;
  }
  generateNoteName(note){
    const noteInfo = note.split('');
    const octaveName = octaves[noteInfo[0]].name;
    const noteName = notes[noteInfo[1]];
    return noteName+' '+octaveName+' октавы';
  }
}