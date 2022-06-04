import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTopTabScreen from './HomeTopTabScreen/HomeTopTabScreen';
import NewsDetailPage from '../components/Home/NewsDetailPage/NewsDetailPage';
import AuthStackScreen from './AuthStackScreen/AuthStackScreen';
import HomeDrawerScreen from './HomeDrawerScreen/HomeDrawerScreen';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import BlankScreen from '../components/UI/BlankScreen/BlankScreen';

const RootStack = createStackNavigator();

const RootStackScreen = props => {
  useEffect(() => {
    props.onTryAutoSignin();
  }, []);

  // when app loading checking localStorage to have user data
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: true}}>
      {props.autosignInLoading ? (
        <RootStack.Screen name="BlankScreen" component={BlankScreen} />
      ) : props.token && props.redirectHome ? (
        <RootStack.Screen
          name="HomeDrawerScreen"
          component={HomeDrawerScreen}
        />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}

      <RootStack.Screen name="NewsDetailPage" component={NewsDetailPage} />
    </RootStack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    redirectHome: state.auth.redirectHome,
    autosignInLoading: state.auth.autosignInLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.tryAutoSignin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootStackScreen);
