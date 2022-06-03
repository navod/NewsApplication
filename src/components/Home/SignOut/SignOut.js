import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, StatusBar} from 'react-native';
import ComponentStyles from '../../../../constants/ComponentStyles';
import * as actions from '../../../../store/actions';
import {connect} from 'react-redux';

//This screen was used for user 's signout
const SignOut = props => {
  useEffect(() => props.onSignOut(), []);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={ComponentStyles.COLORS.WHITE}
        barStyle="dark-content"
      />
      <ActivityIndicator
        size={ComponentStyles.ICON_SIZE.LARGE + 20}
        color={ComponentStyles.COLORS.RED}
      />
    </View>
  );
};

const mapDipatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.userSignOut()),
  };
};

export default connect(null, mapDipatchToProps)(SignOut);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ComponentStyles.COLORS.WHITE,
  },
});
