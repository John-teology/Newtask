import React from 'react'; 
import {StyleSheet, Text, View,Image } from 'react-native'; 

const task = (prop) => {
    
    return (
        <View style = {styles.item}>
            <Text style = {styles.Texts}>{prop.text}</Text>
            <Image source={require('../arrow.png')} style={{ width: 50, height: 60 }}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
item :{
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: 'row', 
    alignItems :"center",
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#83A598',
    maxHeight: "70%",
    paddingLeft: 20,

},

Texts: {
    maxWidth : "80%",
    fontSize: 15

}

});


export default task;