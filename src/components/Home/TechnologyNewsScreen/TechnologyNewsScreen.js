import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import TechnologyNewsList from './TechnologyNewsList/TechnologyNewsList';

const TechnologyNewsScreen = props => {
  useEffect(() => {
    props.onGetTechnologyNews();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.space}></View>
      {props.loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size={ComponentStyles.ICON_SIZE.LARGE + 10}
            color={ComponentStyles.COLORS.RED}
          />
        </View>
      ) : (
        <TechnologyNewsList data={props.technologyNews} />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    technologyNews: state.news.technologyNews,
    loading: state.news.technologyNewsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTechnologyNews: () => dispatch(actions.getTechnologyNews()),
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
