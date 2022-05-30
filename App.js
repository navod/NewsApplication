import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ComponentStyles from './constants/ComponentStyles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
const App = () => {
  return (
    <View style={{padding: widthPercentageToDP('2%')}}>
      <Text
        style={{
          fontFamily: ComponentStyles.FONT.MULISH_BOLD,
          fontSize: ComponentStyles.FONT_SIZE.EX_LARGE,
          color: 'black',
        }}>
        6993
      </Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default App;
