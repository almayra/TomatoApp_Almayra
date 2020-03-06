import {
    DATA_PRODUCT
} from '../action/types'

const INITIAL_STATE={
    dataProduct:[],
    loading:true
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DATA_PRODUCT:
            return {dataProduct:action.payload, loading: false}
        default:
            return state
    }
}