import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import AllNewsIListItem from './AllNewsIListItem/AllNewsIListItem';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';

const AllNewsList = props => {
  let data = [{}, {}, {}];
  const renderItem = ({item}) => {
    return <AllNewsIListItem data={item} />;
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

export default AllNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
