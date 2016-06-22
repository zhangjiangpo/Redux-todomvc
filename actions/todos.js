/**
 * Created by apple on 16/6/21.
 */
import * as types from '../constants/ActionTypes'
import ajaxApi from '../api'


export function addTodo(text,cb){
    return dispatch => {
        ajaxApi.saveTodo(dispatch,text).then((res) =>{
            if(res){
                dispatch({
                    type: types.ADD_TODO, text
                })
                cb?cb(res):'';
            }
        })
    }
}

export function deleteTodo(id){
    return {type:types.DELETE_TODO, id}
}

export function editTodo(id,text){
    return {type :types.EDIT_TODO,id,text}
}

export function completeTodo(id){
    return {type :types.COMPLETE_TODO,id}
}

export function completeAll(){
    return {type:types.COMPLETE_ALL}
}

export function clearCompleted(){
    return {type:types.CLEAR_COMPLETED}
}