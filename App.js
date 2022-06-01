import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/screens/RootStackScreen';
import NewsReducer from './store/reducers/news';
import AuthReducer from './store/reducers/auth';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {RootSiblingParent} from 'react-native-root-siblings';

const rootReducer = combineReducers({
  news: NewsReducer,
  auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootSiblingParent>
          <RootStackScreen />
        </RootSiblingParent>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
