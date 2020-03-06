import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

const Register=(props)=>{
    return (
        <View>
            <Text>ini resep</Text>
            <Button onPress={()=>props.navigate.Drawer()} />
        </View>

    )
}

export default Register