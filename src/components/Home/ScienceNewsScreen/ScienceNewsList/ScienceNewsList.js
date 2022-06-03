import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import ScienceNewsListItem from './ScienceNewsListItem/ScienceNewsListItem';
import NoContentScreen from '../../../UI/NoContentScreen/NoContentScreen';

const ScienceNewsList = props => {
  const renderItem = ({item}) => {
    return <ScienceNewsListItem data={item} />;
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

export default ScienceNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
