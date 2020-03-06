import {
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from '../action/types'

const INITIAN_STATE={
    authChecked: false
}

export default (state=INITIAN_STATE, action)=>{
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...action.payload, authChecked:true}
        case LOGIN_FAILED:
            return {authChecked:true}
        default:
            return state
    }
}