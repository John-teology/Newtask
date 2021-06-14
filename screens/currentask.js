
import React, {useState,useEffect} from 'react'; 
import { Alert } from 'react-native';
import {StyleSheet, Text, View,Keyboard, TouchableOpacity,Image, TextInput} from 'react-native'; 
import BackgroundTimer from 'react-native-background-timer'
export default function Home({route}){
  const [Secondleft,setSecondleft] = useState(0);
  const [timeron,setTimeron] = useState(false);
  
  var hour = 0;
  const addhour = (times) => {
    hour = times * 3600;
    return hour
  }

  var mins = 0;
  const addmins = (times) => {
    mins = 60 * times;
    return mins
  }

  var secs = 0;
  const addsecs = (times) => {
    secs = times * 1;
    return secs
  }

  const reset = () => {
    setSecondleft(0);
    hour = 0;
    mins = 0;
    secs = 0;
    setTimeron((current) => !current)

  }
  useEffect(() => {
    if(timeron) startTimer();
    else BackgroundTimer.stopBackgroundTimer();

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [timeron]);

  useEffect(() => {
    if (Secondleft === 0) {
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [Secondleft])

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondleft( secs => {
        if(secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  }

  const clockify = () => {
    let hours = Math.floor(Secondleft/ 60 / 60);
    let mins = Math.floor(Secondleft/ 60 % 60);
    let seconds = Math.floor(Secondleft % 60)

    let displayhours = hours < 10 ? `0${hours}` :hours;
    let displaymins = mins < 10 ? `0${mins}` :mins;
    let displaysecs = seconds < 10 ? `0${seconds}` :seconds;

    if (displaysecs == 1)
    {
      reset()
      Alert.alert('Your Time is Up!')
    }
    
    return{
      displayhours ,
      displaymins,
      displaysecs,
   
      }
  

  }
  
  
    return(
    <View style = {styles.background}>
          <View style = {styles.item}>
            <Text style = {styles.ct}>{route.params.msg}</Text>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TextInput style = {styles.hour}
              placeholder = {"Hours"}
              keyboardType= 'number-pad'
              onChangeText = {num => addhour(num)}

              />
            <TextInput style = {styles.mins}
              placeholder = {"Minutes"}
              keyboardType= 'number-pad'
              onChangeText = {num1 => addmins(num1)}
              />
            <TextInput style = {styles.secs}
              placeholder = {"Seconds"}
              keyboardType= 'number-pad'
              onChangeText = {num2 => addsecs(num2)}
              />

          </View>
          
        <View style = {styles.Time}>
            <Text style = {styles.displayTime}>{clockify().displayhours}:{clockify().displaymins}:{clockify().displaysecs}</Text>    
              <View style= {{flexDirection: 'row',justifyContent: 'space-evenly'}}>
                  <TouchableOpacity onPress = {() => setSecondleft(hour+mins+secs)} style = {{marginBottom: 300}}>
                  <View style = {styles.onehour}>
                    <Text>Set</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {() => setTimeron((current) => !current)}>
                    <View style = {{paddingTop:90}}>
                      <Image source={require('../clock.png')} style={{ width: 150, height:250,}}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {() => reset()} style = {{marginBottom: 300}} >
                  <View style = {styles.onehour}>
                    <Text>Reset</Text>
                  </View>
                </TouchableOpacity>
              </View>
        </View>
    </View>

  );
}


const styles = StyleSheet.create({
  background: { 
    flex: 1,
    backgroundColor: "#e3e1dc",
    paddingTop: 20,
    paddingHorizontal: 20,

  },
  button: {
    justifyContent: "flex-start",

  },
  text: {
    fontSize : 25,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  Time: {
    alignContent: 'center',
    padding:75,
  },
  displayTime: {
    fontSize:50,
    fontWeight: 'bold'
  },
  onehour: {
    backgroundColor: "#83A598",
    padding:15,
    borderRadius: 10,
    width: 80,
  },
  hour: {
    backgroundColor: "white",
    padding: 15, 
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#83A598",
    width: 90
  },
  mins: {
    backgroundColor: "white",
    padding: 15, 
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#83A598",
    width: 90
  },
  item :{
    backgroundColor: "white",
    padding: 15, 
    borderRadius: 10,
    flexDirection: 'row', 
    alignItems :"center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor :"#83A598"
  },
  secs: {
    backgroundColor: "white",
    padding: 15, 
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#83A598",
    width: 90
  },
  ct: {
    maxWidth : "80%"
   }
  
});