import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTopTabScreen from './HomeTopTabScreen/HomeTopTabScreen';
import NewsDetailPage from '../components/Home/NewsDetailPage/NewsDetailPage';
import AuthStackScreen from './AuthStackScreen/AuthStackScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: true}}>
      <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      <RootStack.Screen name="HomeTopTabScreen" component={HomeTopTabScreen} />
      <RootStack.Screen name="NewsDetailPage" component={NewsDetailPage} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
