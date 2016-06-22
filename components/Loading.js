/**
 * Created by apple on 16/6/22.
 */
import React,{Component,PropType} from 'react'
import CircularProgress from 'material-ui/CircularProgress';

var tcc={
    position:'absolute',
    left:'0px',
    top:'0px',
    zIndex:'9999',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.5)'
},tcc_p = {
    width:'80px',
    margin:'50px auto 0 auto'
}
export default class Loading extends Component{
    render(){
        const { loading } = this.props
        let element = loading.loading ? (
            <div style={tcc}>
                <div style={tcc_p}><CircularProgress /></div>
            </div>
        ): (<div></div>);
        return element
    }
}