import React, {useState} from 'react'; 
import { View ,Text,Image,Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';


const HelloWorldApp = () => {
  const [date,newDate] = useState();
  const [final,setfinal] = useState ('')
  
  
  
  
  const combinefunc = (datestring,day,month,year) => {    
    var currentday = new Date().getDate()
    var currentmonth = new Date().getMonth() + 1
    var currentyear = new Date().getFullYear()
    newDate(datestring)
    timeChecker(currentday,currentmonth,currentyear,day,month,year)

  }

  const timeChecker = (cday,cmonth,cyear,nday,nmonth,nyear) => {
    var staticy = 365;
    var staticm = 31;
    var year = nyear-cyear;
    var month = nmonth-cmonth;
    var newday  = (nday + (staticm * month) + (year *staticy));
    var final = newday - cday;
    if (final > 1) 
    {
      setfinal('Approximately'+' '+[final] +' '+'days left')
    }
    else if (final == 0)
    {
      setfinal('Things are should be done!')
      Alert.alert('Set Date is up!')
      
    }
    else if (final < 0)
    {
      Alert.alert('You are kinda late!')
    }
    else
    {
      setfinal('Approximately'+' '+[final] +' '+'day left')
    }

  }




  

  
  return (
    <View style = {{ flex: 1,backgroundColor : "#e3e1dc"}}>
      <Calendar
            style={{
              borderWidth: 1,
              borderColor: "#e3e1dc",
              height: 400
            }}
            markingType={"custom"}
            onDayPress={(day) => {combinefunc(day.dateString, day.day, day.month,  day.year )}}
            markedDates={{
              [date]: {selected: true, marked: false, selectedColor: "#83A598"},

            }}
        />
        <View style = {{alignItems: 'center'}}>   
          <Text style = {{fontSize: 24, fontWeight: 'bold',color: 'black'}}>{final}</Text>
          <Image source={require('../target.png')} style={{ width: 300, height:200}}/>
        </View>
    </View>
  )
}
export default HelloWorldApp;

