import Axios from 'axios'
import {
    DATA_PRODUCT,
    DATA_RESTO
} from './types'

export const getProduct=()=>{
    return async (dispatch)=>{
        try {
            const res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',{
                headers:{
                    'user-key':'30db02e4bb5d6a6f4d4923a2f1d8df31'
                }
            })
            dispatch({
                type: DATA_PRODUCT, payload: res.data.restaurant
            })
        } catch (error) {
            console.log(err)
        }
    }
}

export const detailResep=(restaurant)=>{
    return{
        type: DATA_RESTO, payload: restaurant
    }
}