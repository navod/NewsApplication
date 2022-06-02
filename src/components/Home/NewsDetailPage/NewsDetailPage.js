import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import FO from 'react-native-vector-icons/Fontisto';
import IO from 'react-native-vector-icons/Ionicons';
import SubHeader from '../../UI/SubHeader/SubHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const NewsDetailPage = () => {
  const navigation = useNavigation();

  const {params} = useRoute();

  const subHeaderLeft = (
    <IO
      name="chevron-back-outline"
      color={ComponentStyles.COLORS.WHITE}
      size={ComponentStyles.ICON_SIZE.MEDIUM}
      onPress={() => navigation.goBack()}
    />
  );

  const subHeaderMiddle = (
    <Text style={styles.subHeaderMiddle}>{params.source.name}</Text>
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={ComponentStyles.COLORS.RED}
        barStyle="light-content"
      />
      <SubHeader left={subHeaderLeft} middle={subHeaderMiddle} />
      <View style={styles.imageContainer}>
        {params.urlToImage ? (
          <FastImage
            source={{uri: params.urlToImage}}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        ) : (
          <IO
            name="image-sharp"
            color={ComponentStyles.COLORS.LIGHT_GRAY_3}
            size={ComponentStyles.ICON_SIZE.LARGE + 60}
          />
        )}

        <TouchableOpacity
          style={styles.hyperlinkBtn}
          onPress={() => Linking.openURL(params.url)}>
          <FO
            name="world-o"
            color={ComponentStyles.COLORS.WHITE}
            size={ComponentStyles.ICON_SIZE.LARGE + 2}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <ScrollView>
          <View style={styles.textContainer}>
            <Text style={styles.category}>{params.category}</Text>
            <Text style={styles.title}>{params.title}</Text>
            <Text style={styles.newsDetail}>
              By {params.author + '  '} |{'  '}
              {moment(params.publishedAt).format('MMMM Do YYYY, h.mm a')}
            </Text>
            <Text style={styles.description}>{params.description}</Text>

            <Text style={styles.content}>
              {params.content === null
                ? 'No content available..!'
                : params.content}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsDetailPage;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',

  },
  subHeaderMiddle: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    color: ComponentStyles.COLORS.WHITE,
    letterSpacing: wp('0.75%'),
  },
  subContainer: {
    borderTopLeftRadius: wp('6%'),
    borderTopRightRadius: wp('6%'),
    backgroundColor: 'white',
    flex: 1,
    marginTop: -20,
    elevation: 2,
    
  },
  textContainer: {
    padding: wp('4%'),
  },
  category: {
    color: ComponentStyles.COLORS.RED,
    fontFamily: ComponentStyles.FONT.MULISH_MEDIUM,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL,
  },
  title: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
    marginTop: wp('4%'),
    lineHeight: hp('3.5%'),
  },
  newsDetail: {
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    color: ComponentStyles.COLORS.DARK_GRAY,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL,
    lineHeight: hp('3%'),
    marginTop: wp('2%'),
  },
  description: {
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    marginTop: wp('4%'),
    lineHeight: hp('3%'),
  },
  content: {
    color: ComponentStyles.COLORS.DARK_GRAY,
    fontFamily: ComponentStyles.FONT.MULISH_LIGHT,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    marginTop: wp('4%'),
    lineHeight: hp('3%'),
  },
  hyperlinkBtn: {
    borderRadius: wp('100%'),
    position: 'absolute',
    bottom: 30,
    backgroundColor: ComponentStyles.COLORS.RED,
    right: 10,
    padding: wp('1.5%'),
    elevation: 5,
  },
});
