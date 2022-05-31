import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTopTabScreen from './HomeTopTabScreen/HomeTopTabScreen';
import NewsDetailPage from '../components/Home/NewsDetailPage/NewsDetailPage';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: true}}>
      <RootStack.Screen name="HomeTopTabScreen" component={HomeTopTabScreen} />
      <RootStack.Screen name="NewsDetailPage" component={NewsDetailPage} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
