import {
    LOGIN_SUCCESS,
    LOGIN_INPUT,
    LOADING,
    LOGIN_FAILED
} from './types'
import AsyncStorage from '@react-native-community/async-storage'

export const onUserInput=(props, value)=>{
    return {
        type: LOGIN_INPUT, payload : {props, value}
    }
}

export const onUserLogin=({username})=>{
    return async (dispatch)=>{
        try {
            dispatch({type: LOADING})
            await AsyncStorage.setItem('username', username)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {username}
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FAILED,
            })
        }
    }
}

export const onUserLog=()=>{
    return async (dispatch)=>{
        try {
            const username = await AsyncStorage.getItem('username')
            if(!username){
                return dispatch({type: LOGIN_FAILED })
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {username}
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FAILED
            })
        }
    }
}

export const onUserLogout=()=>{
    return async (dispatch)=>{
        await AsyncStorage.removeItem('username')
        dispatch({type:LOGIN_FAILED})
    }
}