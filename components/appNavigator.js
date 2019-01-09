import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import GameScreen from '../screens/game';
import SettingsScreen from '../screens/settings';
import ResultsScreen from "../screens/results";

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Game: {
      screen: GameScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Results: {
      screen: ResultsScreen
    },
  },
  {
    // mode: "modal",
    // headerMode: "none",
    initialRouteName: 'Home'
  });

export default AppNavigator;