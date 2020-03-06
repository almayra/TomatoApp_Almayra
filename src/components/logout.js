import React  from 'react'
import {View, Text, Button} from 'react-native'

const Logout=(props)=>{
    return (
        <View>
            <Text>ini Logout</Text>
            <Button title='Register' onPress={()=>props.navigation.navigate('Register')} />
            <Button title='Login' onPress={()=>props.navigation.navigate('Login')} />
        </View>

    )
}


export default Logout