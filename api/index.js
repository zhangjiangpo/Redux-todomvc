/**
 * Created by apple on 16/6/22.
 */
var ajaxApi = (function(win){
    const HostUrl = 'http://localhost:4000/';
    function ajax(url,obj){
        return new Promise((resolve,reject) =>{
            console.log(url,obj);
            setTimeout(()=> {
                resolve(true);
            },1000);
        })
    }
    function saveTodo(text){
        let url = HostUrl + 'savetodo';
        return ajax(url,{text:text})
    }
    return {
        saveTodo:saveTodo
    }
})(window)

export default ajaxApi