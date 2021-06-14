import {createStackNavigator} from 'react-navigation-stack';
import Calendar from '../screens/calendar';

const screens = {
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      headerStyle: {backgroundColor:"#83A598"}
    }
  },

}    


const CalendarStack = createStackNavigator(screens);


export default CalendarStack;


