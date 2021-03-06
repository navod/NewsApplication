import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import TechnologyNewsListItem from './TechnologyNewsListItem/TechnologyNewsListItem';
import NoContentScreen from '../../../UI/NoContentScreen/NoContentScreen';

const TechnologyNewsList = props => {
  const renderItem = ({item}) => {
    return <TechnologyNewsListItem data={item} />;
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

export default TechnologyNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
