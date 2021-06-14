import React from 'react'; 
import {StyleSheet, Text, View,} from 'react-native'; 

const current = (prop) => {
    
    return (
        <View style = {styles.item}>
            <Text style = {styles.Texts}>{prop.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

Texts: {
 maxWidth : "80%"
}

});


export default current;