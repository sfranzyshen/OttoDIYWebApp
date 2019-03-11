import { Start, Web } from 'App/Containers'
import {
  Home,
  Rate,
  Settings,
  Play,
  Discover,
  Lessons,
  GetStarted,
  Lab} from 'App/Modules'

export default {
  StartScreen: {
    screen: Start,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  WebScreen: {
    screen: Web
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Code & Robots'
    })
  },
  RateScreen: {
    screen: Rate,
    navigationOptions: ({navigation}) => ({
      title: 'Spread the word'
    })
  },
  SettingsScreen: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Settings'
    })
  },
  PlayScreen: {
    screen: Play,
    navigationOptions: ({navigation}) => ({
      title: 'Play & Explore'
    })
  },
  DiscoverScreen: {
    screen: Discover,
    navigationOptions: ({navigation}) => ({
      title: 'Discover'
    })
  },
  LearnScreen: {
    screen: Lessons,
    navigationOptions: ({navigation}) => ({
      title: 'Learn'
    })
  },
  GetStartedScreen: {
    screen: GetStarted,
    navigationOptions: ({navigation}) => ({
      title: 'Get Started'
    })
  },
  LabScreen: {
    screen: Lab,
    navigationOptions: ({navigation}) => ({
      title: 'Lab'
    })
  }
}