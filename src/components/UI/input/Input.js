import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import ComponentStyles from '../../../../constants/ComponentStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {INPUT_TYPES} from '../../../../constants/Constants';
import IO from 'react-native-vector-icons/Ionicons';

const Input = props => {
  let input = null;

  let textInputStyles = {...styles.textInput};

  if (props.iconName) {
    textInputStyles.paddingLeft = wp('11.5%');
  }
  if (props.color) {
    textInputStyles.color = props.color;
  }

  if (props.bgColor) {
    textInputStyles.backgroundColor = props.bgColor;
  }

  if (props.borderColor) {
    textInputStyles.borderColor = props.borderColor;
  }

  if (props.borderWidth) {
    textInputStyles.borderWidth = props.borderWidth;
  }

  if (props.font) {
    textInputStyles.fontFamily = props.font;
  }

  if (props.width) {
    textInputStyles.width = props.width;
  }

  if (props.height) {
    textInputStyles.height = props.height;
    textInputStyles.textAlignVertical = 'top';
    textInputStyles.paddingTop = hp('2.2%');
    textInputStyles.paddingRight = hp('4%');
  }

  if (props.fontSize) {
    textInputStyles.fontSize = props.fontSize;
  }

  if (props.borderRadius) {
    textInputStyles.borderRadius = props.borderRadius;
  }

  if (props.textAlign) {
    textInputStyles.textAlign = props.textAlign;
    textInputStyles.paddingLeft = 0;
    textInputStyles.paddingRight = wp('5%');
  }

  // radio button styles
  let radioTextStyles = {...styles.radioText};

  if (props.font) {
    radioTextStyles.fontFamily = props.font;
  }

  if (props.color) {
    radioTextStyles.color = props.color;
  }

  switch (props.type) {
    case INPUT_TYPES.TEXT_INPUT:
      input = (
        <View style={styles.textInputWrapper}>
          {props.iconName ? (
            <IO
              style={styles.textInputIcon}
              name={props.iconName}
              size={ComponentStyles.ICON_SIZE.SMALL}
              color={
                props.color ? props.color : ComponentStyles.COLORS.LIGHT_GRAY_2
              }
            />
          ) : null}
          <TextInput
            placeholder={props.placeholder}
            style={textInputStyles}
            placeholderTextColor={
              props.placeholderTextColor
                ? props.placeholderTextColor
                : props.color
                ? props.color
                : ComponentStyles.COLORS.LIGHT_GRAY_2
            }
            multiline={!!props.height}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            value={props.value}
            maxLength={props.maxLength}
            autoCapitalize="none"
            onFocus={props.onFocus}
            selectTextOnFocus={props.selectTextOnFocus}
          />
          {props.rightIcon ? (
            <IO
              style={styles.textRightIcon}
              name={props.rightIcon}
              size={ComponentStyles.ICON_SIZE.SMALL}
              color={
                props.color ? props.color : ComponentStyles.COLORS.DARK_GRAY
              }
            />
          ) : null}
        </View>
      );
      break;
    case INPUT_TYPES.PASSWORD_INPUT:
      input = (
        <View style={styles.textInputWrapper}>
          {props.iconName ? (
            <IO
              style={styles.textInputIcon}
              name={props.iconName}
              size={ComponentStyles.ICON_SIZE.SMALL}
              color={
                props.color ? props.color : ComponentStyles.COLORS.LIGHT_GRAY_2
              }
            />
          ) : null}
          <TextInput
            placeholder={props.placeholder}
            style={
              props.iconName
                ? {...styles.textInput, paddingLeft: wp('11.5%')}
                : styles.textInput
            }
            secureTextEntry={!props.passwordVisible}
            placeholderTextColor={
              props.color ? props.color : ComponentStyles.COLORS.LIGHT_GRAY_2
            }
            onChangeText={props.onChangeText}
            value={props.value}
            autoCapitalize="none"
          />

          <IO
            name={props.passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={ComponentStyles.ICON_SIZE.SMALL}
            style={styles.visibilityIcon}
            onPress={props.toggleVisibility}
            color={
              props.color ? props.color : ComponentStyles.COLORS.LIGHT_GRAY_2
            }
          />
        </View>
      );
      break;
    case INPUT_TYPES.RADIO_BUTTON:
      input = (
        <TouchableWithoutFeedback onPress={props.toggleCheck}>
          <View style={styles.radio}>
            <View
              style={
                !props.checked
                  ? styles.radioButton
                  : {
                      ...styles.radioButton,
                      backgroundColor: props.radioBtnColor
                        ? props.radioBtnColor
                        : ComponentStyles.COLORS.RED,
                      borderWidth: 0,
                    }
              }>
              <IO
                name="checkmark-outline"
                color={ComponentStyles.COLORS.WHITE}
                size={ComponentStyles.ICON_SIZE.EX_SMALL}
              />
            </View>

            <Text style={radioTextStyles}>{props.placeholder}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
      break;

    default:
      input = null;
  }

  return input;
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: ComponentStyles.COLORS.GRAY,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    height: hp('6%'),
    paddingLeft: wp('5%'),
    color: ComponentStyles.COLORS.BLACK,
  },
  textInputIcon: {
    position: 'absolute',
    left: wp('4.2%'),
  },
  textRightIcon: {
    position: 'absolute',
    right: wp('4.2%'),
  },
  visibilityIcon: {
    position: 'absolute',
    right: wp('4%'),
  },
  textInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: wp('5%'),
    height: wp('5%'),
    borderRadius: wp('1.5%'),
    borderWidth: 1,
    borderColor: ComponentStyles.COLORS.LIGHT_GRAY_2,
    marginRight: wp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioText: {
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    color: ComponentStyles.COLORS.LIGHT_GRAY_2,
  },
});
