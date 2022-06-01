import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import IO from 'react-native-vector-icons/Ionicons';
import ComponentStyles from '../../../../constants/ComponentStyles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import DrawerItem from './DrawerItem/DrawerItem';

const DrawerContent = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContent}>
      <View style={styles.header}>
        <View style={styles.topContainer}>
          <IO
            name="close-outline"
            color={ComponentStyles.COLORS.EX_DARK_GREY}
            size={ComponentStyles.ICON_SIZE.LARGE}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          />
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

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

  header: {
    height: '17.7%',
    display: 'flex',
    zIndex: 200,
    backgroundColor: ComponentStyles.COLORS.RED,
  },

  topContainer: {
    height: '45%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  listContainer: {
    display: 'flex',
    paddingLeft: '7%',
    paddingRight: '7%',
  },
});
