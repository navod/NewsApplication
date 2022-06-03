import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';
import BusinessNewsList from './BusinessNewList/BusinessNewsList';

const BusinessScreen = props => {
  useEffect(() => {
    props.onGetBusinessNews(); //fetch business news data
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
        <BusinessNewsList
          data={props.businessNews}
          refreshing={refreshing}
          refresh={() => {
            setRefreshing(true);
            props.onGetBusinessNews(() => {
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
    businessNews: state.news.businessNews,
    loading: state.news.businessNewsLoading,
    buffering: state.news.buffering,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBusinessNews: callback => dispatch(actions.getBusinessNews(callback)),
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
