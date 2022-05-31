import Toast from 'react-native-root-toast';
import ComponentStyles from '../constants/ComponentStyles';
import {ALERT_COLOR} from '../constants/Constants';
import {Vibration} from 'react-native';

//create custom toast function and used this for the all application messages
export const toast = (message, alertType) => {
  const bgColor = ALERT_COLOR[alertType];

  Vibration.vibrate(75);
  setTimeout(() => Vibration.vibrate(75), 150);

  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: bgColor,
    textStyle: {
      fontFamily: ComponentStyles.FONT.MULISH_BOLD,
      fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
      color: ComponentStyles.COLORS.WHITE,
    },
  });
  //this method used to set toast show time
  setTimeout(() => {
    Toast.hide(toast);
  }, 3000);
};
