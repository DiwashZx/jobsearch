import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <ImageBackground 
    style={styles.background}
    source={require("../assets/bg.png")} >
        <View style={styles.container}>

        <Image 
        style={styles.logo} 
        source={require ("../assets/logo.png")} />
        {/* Diwash change this line of code */}
        <Text>sell waht you need it the most in the life</Text>

        </View>
        <View style={styles.login}></View>
        <View style={styles.register}></View>
        
    </ImageBackground>
    
  )
}
const styles = StyleSheet.create ({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",


    },
    login:{
        width: "100%",
        height: 70,
        backgroundColor :"#fc5c65",
        
    },
    register:{
        width: "100%",
        height: 70,
        backgroundColor :"#4ecdc4",
        
    },
    logo:{
        width: 380,
        height: 100,
       
    },
    container:{
        
        position: "absolute",
        top: 70,
        alignItems:'center',

    }
}) 

export default WelcomeScreen