import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AllNewsList from './AllNewsIList/AllNewsList';
import ComponentStyles, {
  widthPercentageToDP as wp,
} from '../../../../constants/ComponentStyles';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions';

const AllNewsScreen = props => {
  useEffect(() => {
    props.onGetAllNews();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTxtWrapper}>
        <Text style={styles.headerTxt}>Recent News</Text>
      </View>
      {props.loading || props.buffering ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size={ComponentStyles.ICON_SIZE.LARGE + 10}
            color={ComponentStyles.COLORS.RED}
          />
        </View>
      ) : (
        <AllNewsList
          data={props.allNews}
          refreshing={refreshing}
          refreshPos={() => {
            setRefreshing(true);
            props.onGetAllNews(() => {
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
    allNews: state.news.allNews,
    loading: state.news.allNewsLoading,
    buffering: state.news.buffering,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllNews: callback => dispatch(actions.getAllNews(callback)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllNewsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    flex: 1,
  },
  headerTxtWrapper: {
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('4%'),
  },
  headerTxt: {
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    color: ComponentStyles.COLORS.LIGHT_GRAY_2,
  },
});
