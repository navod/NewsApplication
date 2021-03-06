import {View, RefreshControl, FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import AllNewsIListItem from './AllNewsIListItem/AllNewsIListItem';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import NoContentScreen from '../../../UI/NoContentScreen/NoContentScreen';

const AllNewsList = props => {
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
      scrollEnabled
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.refresh}
        />
      }
      contentContainerStyle={{flexGrow: 1}}
      ListEmptyComponent={() => <NoContentScreen />}
    />
  );
};

export default AllNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
