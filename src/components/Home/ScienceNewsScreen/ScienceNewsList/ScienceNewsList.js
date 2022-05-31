import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import ScienceNewsListItem from './ScienceNewsListItem/ScienceNewsListItem';

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
    />
  );
};

export default ScienceNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
