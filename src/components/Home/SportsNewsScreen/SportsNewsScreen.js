import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import SportsNewsList from './SportsNewsList/SportsNewsList';

const SportsNewsScreen = props => {
  useEffect(() => {
    props.onGetSportsNews(); //fetch sports news data
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.space}></View>
      {props.loading || props.buffering ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator // This indicator is rendered until the data is fetched
            size={ComponentStyles.ICON_SIZE.LARGE + 10}
            color={ComponentStyles.COLORS.RED}
          />
        </View>
      ) : (
        <SportsNewsList
          data={props.sportsNews}
          refreshing={refreshing}
          refresh={() => {
            setRefreshing(true);
            props.onGetSportsNews(() => {
              setRefreshing(false);
            });
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    sportsNews: state.news.sportsNews,
    loading: state.news.sportsNewsLoading,
    buffering: state.news.buffering,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSportsNews: callback => dispatch(actions.getSportsNews(callback)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SportsNewsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    flex: 1,
  },
  space: {
    height: hp('3%'),
  },
});
