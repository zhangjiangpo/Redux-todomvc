/**
 * Created by apple on 16/6/21.
 */
import {combineReducers } from 'redux'
import todos from './todos'
import loading from './loading'

const rootReducer = combineReducers({
    todos,
    loading
})

export default rootReducer;