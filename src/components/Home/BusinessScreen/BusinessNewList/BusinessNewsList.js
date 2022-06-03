import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import BusinessNewsListItem from './BusinessNewsListItem/BusinessNewsListItem';

const BusinessNewsList = props => {
  const renderItem = ({item}) => {
    return <BusinessNewsListItem data={item} />;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      ListFooterComponent={() => {
        return <View style={styles.footer}></View>;
      }}
      scrollEnabled
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.refresh}
        />
      }
    />
  );
};

export default BusinessNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
