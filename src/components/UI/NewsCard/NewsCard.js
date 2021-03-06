import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import FO from 'react-native-vector-icons/Fontisto';
import IO from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const NewsCard = props => {
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal: wp('4%')}}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('NewsDetailPage', {
            ...props.data,
            category: props.category,
          })
        }>
        <View style={styles.mainContainer}>
          <View style={styles.imgContainer}>
            {props.data?.urlToImage ? (
              <FastImage
                source={{uri: props.data?.urlToImage}}
                style={styles.backgroundImg}
                resizeMode="cover"
              />
            ) : (
              <IO
                name="image-sharp"
                color={ComponentStyles.COLORS.LIGHT_GRAY_3}
                size={ComponentStyles.ICON_SIZE.LARGE + 10}
                style={{textAlign: 'left'}}
              />
            )}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.description}>
              {props.data?.title.length > 60
                ? props.data?.title.slice(0, 60) + '...'
                : props.data?.title}
            </Text>
            <View
              style={{
                ...styles.iconContainer,
                justifyContent: null,
                marginTop: wp('6%'),
              }}>
              <FO
                name="clock"
                color={ComponentStyles.COLORS.LIGHT_GRAY_3}
                size={ComponentStyles.ICON_SIZE.EX_SMALL - 2}
                style={{textAlign: 'left'}}
              />
              <Text style={styles.time}>
                {moment(props.data?.publishedAt).fromNow()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ComponentStyles.COLORS.LIGHT_GRAY,
    borderRadius: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('23%'),
    elevation: 2,
    marginBottom: wp('6%'),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '40%',
    height: '100%',
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ComponentStyles.COLORS.LIGHT_GRAY_1,
  },
  textContainer: {
    width: '60%',
    height: '100%',
    padding: wp('4%'),
  },
  category: {
    color: ComponentStyles.COLORS.RED,
    fontFamily: ComponentStyles.FONT.MULISH_MEDIUM,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL,
  },
  description: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.SMALL - 1,
    marginTop: wp('3%'),
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: wp('2%'),
    borderBottomLeftRadius: wp('2%'),
  },
  time: {
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    color: ComponentStyles.COLORS.LIGHT_GRAY_3,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL - 2,
    marginLeft: wp('2%'),
  },
  authorTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    color: ComponentStyles.COLORS.LIGHT_GRAY_3,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL,
    marginLeft: wp('2%'),
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL - 2,
  },
});
