/**
 * Created by apple on 16/6/20.
 */
import React, {Component , PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Loading from '../components/Loading'
import * as TodoActions from '../actions/todos'

class App extends Component {
    render(){
        const {todos , actions, loading} = this.props
        return (
            <div>
                <Header addTodo={actions.addTodo}/>
                <MainSection todos={todos} actions = {actions}/>
                <Loading loading={loading}/>
            </div>
        )
    }
}

App.propTypes={
    todos:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

export default connect(
    state => {return {todos: state.todos,loading:state.loading}},
    dispatch => {return {actions:bindActionCreators(TodoActions,dispatch)}}
)(App)