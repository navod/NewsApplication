import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTopTabScreen from '../HomeTopTabScreen/HomeTopTabScreen';
import DrawerContent from '../../components/UI/DrawerContent/DrawerContent';
import SignOut from '../../components/Home/SignOut/SignOut';

const HomeDrawer = createDrawerNavigator();
const HomeDrawerScreen = props => {
  return (
    <HomeDrawer.Navigator
      screenOptions={{headerShown: false, unmountOnBlur: true}}
      drawerContent={props => <DrawerContent {...props} />}>
      <HomeDrawer.Screen name="HomeTopTabScreen" component={HomeTopTabScreen} />
      <HomeDrawer.Screen name="SignOut" component={SignOut} />
    </HomeDrawer.Navigator>
  );
};

export default HomeDrawerScreen;
