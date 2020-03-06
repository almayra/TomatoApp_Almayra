import React, { Component } from 'react'
// import {useEffect} from'react'
import {View, StyleSheet} from 'react-native'
import {Input, Text, Icon, Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable'


const Login=({navigation})=> {
        return (
            <View style={style.loginContainer}>
                <Animatable.View animation={'fadeIn'} duration={1000} >
                    <Text h4 style={{color:'tomato', textAlign:'center'}} >Tomato App</Text>
                    <Icon name='favorite' size={50} color='tomato'  />
                </Animatable.View>
                <View style={style.inputContainer} >
                    <Input style={style.inputContainer} placeholder='Username' />
                </View>
                <View style={style.buttonContainer}>
                    <Button title='Enter' buttonStyle={{backgroundColor:'tomato', color:'white'}}
                    onPress={() => navigation.navigate('Home')} />
                </View>
            </View>
        )
    }

const style=StyleSheet.create({
    loginContainer:{
        flex:1,
        marginTop:100
    },
    inputContainer:{
        marginTop:50,
        marginBottom:50
    },
    buttonContainer:{
        width:200,
        marginLeft:100
    }
})


export default Login