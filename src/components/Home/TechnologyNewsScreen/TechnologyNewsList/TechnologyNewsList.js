import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from '../../../../../constants/ComponentStyles';
import TechnologyNewsListItem from './TechnologyNewsListItem/TechnologyNewsListItem';

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
    />
  );
};

export default TechnologyNewsList;

const styles = StyleSheet.create({
  footer: {
    height: hp('15%'),
  },
});
