import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import TechnologyNewsList from './TechnologyNewsList/TechnologyNewsList';

const TechnologyNewsScreen = props => {
  useEffect(() => {
    props.onGetTechnologyNews(); //fetch technology news data
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
        <TechnologyNewsList
          data={props.technologyNews}
          refreshing={refreshing}
          refresh={() => {
            setRefreshing(true);
            props.onGetTechnologyNews(() => {
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
    technologyNews: state.news.technologyNews,
    loading: state.news.technologyNewsLoading,
    buffering: state.news.buffering,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTechnologyNews: callback =>
      dispatch(actions.getTechnologyNews(callback)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TechnologyNewsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    flex: 1,
  },
  space: {
    height: hp('3%'),
  },
});
