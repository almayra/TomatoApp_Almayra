import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Icon} from 'react-native-elements'
import Hometab from './hometab'
import Logout from './logout'

const Drawer=createDrawerNavigator()

const Drawermain=({navigation})=>{
    return(
        <Drawer.Navigator
        initialRouteName='Hometab'
        drawerType='slide'
        drawerPosition='right'
        drawerContentOptions={
            {
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                activeBackgroundColor:'transparent'
            }
        }
        >
            <Drawer.Screen
                name='Logout'
                options={{
                    drawerLabel:'Logout',
                    drawerIcon:({color})=>{
                        return(
                            <Icon name='settings' color={color} />
                        )
                    },
                }
            }
        >   
            {
                ()=>{
                    return(
                        <Logout screenprops={navigation} />
                    )
                }
            }
            </Drawer.Screen>
            <Drawer.Screen 
            name='Hometab'
            component={Hometab}
            options={{
                drawerLabel:()=>null,
                gestureEnabled:false
            }}
            />
        </Drawer.Navigator>
    )
}

export default Drawermain