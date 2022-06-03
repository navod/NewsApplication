import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import IO from 'react-native-vector-icons/Ionicons';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import DrawerItem from './DrawerItem/DrawerItem';
import {connect} from 'react-redux';
import defaultLogo from '../../../../assets/logo.png';
import profileLogo from '../../../../assets/profileLogo.png';
import FastImage from 'react-native-fast-image';

const DrawerContent = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.drawerContent}>
      <View style={styles.header}>
        <View style={styles.topContainer}>
          <FastImage
            source={defaultLogo}
            style={styles.logoImg}
            resizeMode="contain"
          />
          <IO
            name="close-outline"
            color={ComponentStyles.COLORS.RED}
            size={ComponentStyles.ICON_SIZE.LARGE}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          />
        </View>

        <View style={styles.userContainer}>
          <FastImage
            source={profileLogo}
            style={styles.profileLogo}
            resizeMode="contain"
          />

          <Text style={styles.welcomeTxt}>
            Welcome{' '}
            <Text style={{fontFamily: ComponentStyles.FONT.MULISH_BOLD}}>
              {props.user?.displayName.split(' ')[0]}
            </Text>
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props} hitSlop={false}>
        <View style={styles.listContainer}>
          <DrawerItem
            icon={() => {
              return (
                <IO
                  name="log-out-outline"
                  size={ComponentStyles.ICON_SIZE.SMALL + 2}
                  color={ComponentStyles.COLORS.RED}
                />
              );
            }}
            label="Signout"
            labelColor={ComponentStyles.COLORS.RED}
            color={ComponentStyles.COLORS.RED}
            marginBottom={'8%'}
            onPress={() => navigation.navigate('SignOut')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(DrawerContent);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  header: {
    zIndex: 200,
    backgroundColor: ComponentStyles.COLORS.RED,
  },

  topContainer: {
    // height: '45%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '8%',
    paddingVertical: '2%',
    backgroundColor: ComponentStyles.COLORS.WHITE,
  },
  listContainer: {
    display: 'flex',
    paddingLeft: '7%',
    paddingRight: '7%',
  },
  appName: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    color: ComponentStyles.COLORS.LIGHT_GRAY_1,
  },
  welcomeTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_LIGHT,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    color: ComponentStyles.COLORS.LIGHT_GRAY_1,
    marginLeft: wp('3%'),
  },
  logoImg: {
    width: wp('20%'),
    height: hp('5%'),
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '8%',
    marginVertical: wp('9%'),
  },
  profileLogo: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('100%'),
    backgroundColor: ComponentStyles.COLORS.WHITE,
  },
});
