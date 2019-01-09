import {observable, computed, action} from 'mobx';
import {modes} from '../config.json';

export default class SettingsStore {
  @observable mode = 'easy';
  @observable correct = 0;
  @observable done = 0;
  @observable config = modes[this.mode]

  @action setMode(mode){
    this.mode = mode;
    this.config = modes[this.mode];
  }

  @computed get config(){
    return this.config;
  }
  
  @computed get modeName(){
    return this.config.name;
  }
}