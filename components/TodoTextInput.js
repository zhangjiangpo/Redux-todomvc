/**
 * Created by apple on 16/6/21.
 */
import React,{Component ,PropTypes} from 'react'
import classnames from 'classnames'


class TodoTextInput extends Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            text :this.props.text || ''
        }
    }

    handlKeyDown(e){
        const {onSave,newTodo} = this.props
        var _this = this;
        if(e.which == 13){
            var val = e.target.value;
            if(!val)return ;
            //此处用回调 onSave返回undefined,不能处理成Promise
            onSave(val, function (res) {
                if(res){
                    _this.setState({text:''})
                }
            })
        }
    }
    handleChange(e){
        this.setState({text:e.target.value})
    }
    handleBlur(e){
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render(){
        const {placeHolder} = this.props
        return(
            <input type="text"
                   className ={
                    classnames({
                        edit : this.props.editing,
                        'new-todo' : this.props.newTodo
                    })
                   }
                   autoFocus="true"
                   value = {this.state.text}
                   onBlur = {this.handleBlur.bind(this)}
                   onChange = {this.handleChange.bind(this)}
                   placeholder={placeHolder}
                   onKeyDown={this.handlKeyDown.bind(this)}/>
        )
    }
}
export default TodoTextInput