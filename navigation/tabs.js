import React, { version } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Newtasknavigator} from '../navigation/navigator'
import calendar from '../screens/calendar'
import { View,Image} from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
    return(
        <>
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions = {{
                        showLabel: false,
                        activeTintColor : 'black',
                        style: {
                            position :'absolute',
                            backgroundColor: "#83A598",
                            borderRadius: 5,
                            height: 50
                        
                        }
                    
                    }}

                >
                    <Tab.Screen name = "Task" component = {Newtasknavigator} options = {{
                        tabBarIcon: ({focused}) => (    
                            <View>
                                <Image source={require('../until.png')} style={{ width: 85, height:85, tintColor: focused ? 'black' : '#d2cfcf'}} />
                            </View>
                        ) 
                    }}
                    />
                    <Tab.Screen name = "Calendar" component = {calendar} options = {{
                         tabBarIcon: ({focused}) => (    
                            <View>
                                <Image source={require('../calendar.png')} style={{ width: 85, height:85, tintColor: focused ? 'black' : '#d2cfcf'}} />
                            </View>
                        ) 
                    }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
      );
};

export default App;