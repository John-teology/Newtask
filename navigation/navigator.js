import React from "react"; 
import {createStackNavigator} from '@react-navigation/stack';
import Newtask from "../screens/newtask";
import Current from "../screens/currentask";


const Stack = createStackNavigator();

const Newtasknavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = "                          NewTask"
        component = {Newtask}
        options = {{
          headerStyle: {
            backgroundColor:"#83A598"
          }
        }}
      />
      <Stack.Screen
        name = "CurrentTask"
        component = {Current}
        options = {{
          headerStyle: {
            backgroundColor:"#83A598"
          }
        }}
      />
    </Stack.Navigator>
  );
}
  
export {Newtasknavigator}


