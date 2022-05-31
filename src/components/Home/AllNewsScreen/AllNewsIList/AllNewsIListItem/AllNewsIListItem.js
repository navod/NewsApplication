import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';
import ComponentStyles, {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../../../../constants/ComponentStyles';

const AllNewsIListItem = props => {
  return (
    <View style={stylse.mainContainer}>
      <NewsCard data={props.data} category="All" />
    </View>
  );
};

export default AllNewsIListItem;

const stylse = StyleSheet.create({
  //   mainContainer: {},
});
