/**
 * Created by apple on 16/6/21.
 */
import React ,{Component , PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
    handleSave(text,cb){
        if(text.length !== 0){
            this.props.addTodo(text,cb)
        }
    }
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput newTodo
                               onSave={this.handleSave.bind(this)}
                               placeHolder="what needs to be done"/>
            </header>
        )
    }
}

Header.propTypes ={
    addTodo:PropTypes.func.isRequired
}
export default Header;
