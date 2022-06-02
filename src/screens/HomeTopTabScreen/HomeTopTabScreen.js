import React, {useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BusinessScreen from '../../components/Home/BusinessScreen/BusinessScreen';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../constants/ComponentStyles';
import Input from '../../components/UI/input/Input';
import {
  ALERT_TYPE,
  CATEGORY,
  ERROR_MESSAGE,
  INPUT_TYPES,
} from '../../../constants/Constants';
import defaultLogo from '../../../assets/logo.png';
import AllNewsScreen from '../../components/Home/AllNewsScreen/AllNewsScreen';
import * as actions from '../../../store/actions';
import {connect} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import {toast} from '../../../shared/utility';
import ScienceNewsScreen from '../../components/Home/ScienceNewsScreen/ScienceNewsScreen';
import TechnologyNewsScreen from '../../components/Home/TechnologyNewsScreen/TechnologyNewsScreen';
import SportsNewsScreen from '../../components/Home/SportsNewsScreen/SportsNewsScreen';
import FastImage from 'react-native-fast-image';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabScreen = props => {
  const netInfo = useNetInfo();

  const [timeoutRef, setTimeoutRef] = useState(null);

  const [focusScreen, setFocusScreen] = useState(null);

  const [searchText, setSearchText] = useState('');

  const onSearchNewsHandler = searchText => {
    if (!netInfo.isConnected) {
      toast(ERROR_MESSAGE.NO_INTERNET, ALERT_TYPE.ERROR);
    } else {
      if (focusScreen === CATEGORY.ALL) {
        props.onSearchAllNews(searchText);
      }
      if (focusScreen === CATEGORY.BUSINESS) {
        props.onSearchBusinessNews(searchText);
      }
      if (focusScreen === CATEGORY.SCIENCE) {
        props.onSearchScienceNews(searchText);
      }
      if (focusScreen === CATEGORY.TECHNOLOGY) {
        props.onSearchTechnologyNews(searchText);
      }
      if (focusScreen === CATEGORY.SPORTS) {
        props.onSearchSportsNews(searchText);
      }
    }
  };

  return (
    <View style={styles.parentContainer}>
      <StatusBar
        animated={true}
        backgroundColor={ComponentStyles.COLORS.RED}
        barStyle="light-content"
      />
      <View style={styles.rowContainer}>
        <FastImage
          source={defaultLogo}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <View style={{width: '78%'}}>
          <Input
            placeholder="Search news.."
            type={INPUT_TYPES.TEXT_INPUT}
            iconName="search-outline"
            borderWidth={0}
            value={searchText}
            onChangeText={val => {
              setSearchText(val);
              clearTimeout(timeoutRef);
              props.setBuffering(true);
              setTimeoutRef(
                setTimeout(() => {
                  props.setBuffering(false);
                  onSearchNewsHandler(val);
                }, 1000),
              );
            }}
          />
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarStyle: styles.tabBar,
          tabBarScrollEnabled: true,
          tabBarItemStyle: styles.tabBarItem,
          tabBarIndicatorContainerStyle: styles.tabBarIndicatorContainer,
          tabBarPressColor: 'white',
        }}>
        <Tab.Screen
          name="AllNewsScreen"
          options={{
            title: 'All news',
            tabBarActiveTintColor: ComponentStyles.COLORS.DARK_GRAY,
          }}
          component={AllNewsScreen}
          listeners={({navigation, route}) => ({
            focus: result => {
              setFocusScreen(CATEGORY.ALL);
              setSearchText('');
            },
          })}
        />
        <Tab.Screen
          name="BusinessScreen"
          options={{title: 'Business'}}
          component={BusinessScreen}
          listeners={({navigation, route}) => ({
            focus: () => {
              setFocusScreen(CATEGORY.BUSINESS);
              setSearchText('');
            },
          })}
        />
        <Tab.Screen
          name="ScienceNewsScreen"
          options={{title: 'Science'}}
          component={ScienceNewsScreen}
          listeners={({navigation, route}) => ({
            focus: () => {
              setFocusScreen(CATEGORY.SCIENCE);
              setSearchText('');
            },
          })}
        />
        <Tab.Screen
          name="Sports"
          options={{title: 'Sports'}}
          component={SportsNewsScreen}
          listeners={({navigation, route}) => ({
            focus: () => {
              setFocusScreen(CATEGORY.SPORTS);
              setSearchText('');
            },
          })}
        />
        <Tab.Screen
          name="TechnologyNewsScreen"
          options={{title: 'Technology'}}
          component={TechnologyNewsScreen}
          listeners={({navigation, route}) => ({
            focus: () => {
              setFocusScreen(CATEGORY.TECHNOLOGY);
              setSearchText('');
            },
          })}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchAllNews: searchText => dispatch(actions.searchAllNews(searchText)),

    onSearchBusinessNews: searchText =>
      dispatch(actions.searchBusinessNews(searchText)),

    onSearchScienceNews: searchText =>
      dispatch(actions.searchScienceNews(searchText)),

    onSearchTechnologyNews: searchText =>
      dispatch(actions.searchTechnologyNews(searchText)),

    onSearchSportsNews: searchText =>
      dispatch(actions.searchSportsNews(searchText)),

    setBuffering: buffering => dispatch(actions.setBuffering(buffering)),
  };
};
export default connect(null, mapDispatchToProps)(HomeTopTabScreen);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('2%'),
    backgroundColor: ComponentStyles.COLORS.WHITE,
    paddingTop: wp('4'),
    paddingRight: wp('3%'),
  },
  tabBarLabel: {
    textTransform: 'capitalize',
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL - 1,
    width: wp('25%'),
    textAlign: 'left',
  },
  tabBarIndicator: {
    backgroundColor: ComponentStyles.COLORS.RED,
  },
  tabBar: {
    elevation: 0,
    marginHorizontal: wp('4%'),
  },
  logoImg: {
    width: wp('20%'),
    height: hp('5%'),
  },
  tabBarIndicatorContainer: {
    width: wp('70%'),
  },
  tabBarItem: {
    width: wp('25%'),
    height: hp('6.5%'),
  },
});
