/**
 * Created by apple on 16/6/22.
 */
import {LOADING_START,LOADING_END} from '../constants/ActionTypes'

const state = {
    loading : false
}

export default function loading(state = state ,action ) {
    switch(action.type){
        case LOADING_START:
            return {loading:true}
        case LOADING_END:
            return {loading:false}
        default:
            return {loading:false}
    }
}