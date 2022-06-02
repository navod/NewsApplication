import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import ScienceNewsList from './ScienceNewsList/ScienceNewsList';

const ScienceNewsScreen = props => {
  useEffect(() => {
    props.onGetScienceNews();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.space}></View>
      {props.loading || props.buffering ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size={ComponentStyles.ICON_SIZE.LARGE + 10}
            color={ComponentStyles.COLORS.RED}
          />
        </View>
      ) : (
        <ScienceNewsList
          data={props.scienceNews}
          refreshing={refreshing}
          refreshPos={() => {
            setRefreshing(true);
            props.onGetScienceNews(() => {
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
    scienceNews: state.news.scienceNews,
    loading: state.news.scienceNewsLoading,
    buffering: state.news.buffering,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetScienceNews: callback => dispatch(actions.getScienceNews(callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScienceNewsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    flex: 1,
  },
  space: {
    height: hp('3%'),
  },
});
