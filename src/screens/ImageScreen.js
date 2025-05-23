import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImageScreen = () => {
  return (
    <View style={style.container}>
        <View style={style.b1}></View>
        <View style={style.b2}></View>
      <Image 
      resizeMode='contain'
      style={style.image} 
      source={require("../assets/bg.png")} />
    </View>
  )
}

const style=StyleSheet.create({
    b1:{
        
        width: 50,
        height: 50,
        backgroundColor: 'green',
        position: 'relative',
        top: 40,
        left: 30,
        
        

    },
    b2:{
        
         width: 50,
        height: 50,
        backgroundColor: 'red',
        position: 'absolute',
        top: 40,
        left: "80%",
        

    },
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
     
    image:{
       width: '100%',
        height: "100%",
    },
   
})
export default ImageScreen