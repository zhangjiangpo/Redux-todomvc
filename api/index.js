/**
 * Created by apple on 16/6/22.
 */
import * as types from '../constants/ActionTypes'

var ajaxApi = (function(win){
    var submiting = false;
    const HostUrl = 'http://localhost:4000/';

    function loadingStart(){
        return {type:types.LOADING_START}
    }
    function loadingEnd(){
        return {type:types.LOADING_END}
    }
    function ajax(url,obj,lastParm){
        return new Promise((resolve,reject) =>{
            if(submiting) return ;
            submiting = true;
            var dis = lastParm&&lastParm.dispatch?lastParm.dispatch : null;
            dis?dis(loadingStart()):'';
            setTimeout(()=> {
                dis?dis(loadingEnd()):'';
                submiting = false;
                resolve(true);
            },2000);
        })
    }
    function saveTodo(dispatch,text){
        let url = HostUrl + 'savetodo';
        return ajax(url,{text:text},{dispatch:dispatch})
    }
    return {
        saveTodo:saveTodo
    }
})(window)

export default ajaxApi