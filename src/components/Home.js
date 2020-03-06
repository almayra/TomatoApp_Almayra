import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'

const Home=({navigation})=>{
    return (
        <View style={styles.homecontainer} >
            <View style={styles.productContainer} >
                <Icon name='home' type='material' size={45} color='tomato' />
                <Icon name='bookmark' type='material' size={45} color='tomato' />
                <Icon name='dashboard' type='material' size={45} color='tomato' />
                <Icon name='favorite' type='material' size={45} color='tomato' />
            </View> 
            <View style={styles.productContainer1} >
                <Icon name='language' type='material' size={45} color='tomato' />
                <Icon name='store' type='material' size={45} color='tomato' />
                <Icon name='today' type='material' size={45} color='tomato' />
                <Icon name='payment' type='material' size={45} color='tomato' />
            </View>
            <View style={styles.drawer}>
                <Button color='tomato' title='Logout' onPress={()=>navigation.navigate('Login')} />
            </View>

        </View>

    )
}

const styles=StyleSheet.create({
    homeContainer:{
        flex:1,
        backgroundColor:'white',
    },
    productContainer:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'space-around'
    },
    productContainer1:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'space-around'
    },
    drawer:{
        width:200,
        color:'tomato',
        marginTop:50,
        marginLeft:100
    }
})

export default Home