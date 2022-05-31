import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import BusinessNewsList from './BusinessNewList/BusinessNewsList';

const BusinessScreen = props => {
  useEffect(() => {
    props.onGetBusinessNews();
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
        <BusinessNewsList data={props.businessNews} />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    businessNews: state.news.businessNews,
    loading: state.news.businessNewsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBusinessNews: () => dispatch(actions.getBusinessNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    flex: 1,
  },
  space: {
    height: hp('3%'),
  },
});
