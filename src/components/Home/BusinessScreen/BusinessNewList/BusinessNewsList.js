import {View, FlatList, StyleSheet} from 'react-native';
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
    />
  );
};

export default BusinessNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
