import {View, RefreshControl, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import SportsNewsIListItem from './SportsNewsListItem/SportsNewsIListItem';
import NoContentScreen from '../../../UI/NoContentScreen/NoContentScreen';

const SportsNewsList = props => {
  const renderItem = ({item}) => {
    return <SportsNewsIListItem data={item} />;
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

export default SportsNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
