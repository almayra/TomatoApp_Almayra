import{
    DATA_RESTO
} from '../action/types'
import { SwitchComponent } from 'react-native'

const INITIAL_STATE={
    name: '',
    featured_image: '',
    user_rating: {
        aggregate_rating: ''
    },
    location: {
        address: ''
    },
    cuisines: '',
    timings: '',
    currency: '',
    average_cost_for_two: ''  
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case DATA_RESTO:
            return action.payload
        default:
            return state
    }
}