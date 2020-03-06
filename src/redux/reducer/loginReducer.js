import {
    LOGIN_INPUT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOADING
} from '../action/types'

const INITIAL_STATE={
    username='',
    error='',
    loading=false
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN_INPUT:
            return {...state, [action.payload.prop]:action.payload.value}
        case LOGIN_SUCCESS:
            return INITIAL_STATE
        case LOGIN_FAILED:
            return {...state, loading:false, error: action.payload }
        case LOADING:
            return {...state, loading:true, error:''}
        default:
            return state
    }
}