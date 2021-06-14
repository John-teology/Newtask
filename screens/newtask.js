import React, {useState} from 'react'; 
import {StyleSheet, View, ScrollView, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard, } from 'react-native'; 
import Task from "../components/task";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

export default function home({navigation}){
  const [task,newtask] = useState();
  const [tasklist,SetTaskList]= useState([]);

  const taskholder = () => {
    Keyboard.dismiss()
    SetTaskList([...tasklist,task])
    newtask(null);
  }
  const deletetask = (index) => {
    let itemsD = [...tasklist];
    itemsD.splice(index,1);
    SetTaskList(itemsD);
  }

  const combinefunc = (index,item) => {
    deletetask(index);
    navigation.navigate('CurrentTask',{msg: item});
  }
  return(
    <View style = {styles.background}>
      <ScrollView>
      <View style = {styles.anotherbf}>
        <View style = {styles.items}>
          {
            tasklist.map((item, index) => {
              return(
                <View>
                    <TouchableOpacity key = {index} onPress = {() => deletetask(index)} >
                      
                      <Image source={require('../delete.png')} style={{ width: 40, height: 30 , paddingTop: 10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  key = {index}  onPress = {() => combinefunc(index,item)} >
                        <Task text = {item} />
                    </TouchableOpacity>
                </View>
              ) 
            })
          }
        </View>
      </View>
      </ScrollView>

        <KeyboardAvoidingView
          behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
          style = {styles.taskwrapper}>
          <TextInput style = {styles.input}
            placeholder = {"Add Newtask"}
            value = {task}
            onChangeText = {text => newtask(text)}
            />
          <TouchableOpacity onPress = {() => taskholder()} >
          <Image source={require('../plus.png')} style={{ width: 40, height: 50 }}/>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>

  

  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e3e1dc",

  },
  anotherbf: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
 
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 3,
    width: 250,
    borderColor: "#83A598"

  },
  taskwrapper:{
    position: 'absolute',
    bottom: 60,
    width : "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    height: 50
  },
 

 

  });
