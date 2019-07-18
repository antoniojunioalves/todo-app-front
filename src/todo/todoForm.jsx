import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { change, search, addTask, clear } from '../actions/todoForm'

 class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.search(this.props.description) : this.props.addTask(this.props.description)
        } else if (e.key === 'Escape') {
            this.props.clear()
        }        
    } 

    componentDidMount(){
        this.props.search()
    }

    render () {
        const { change, addTask, search, clear } = this.props
        const { description } = this.props
        return (
            <div role='form' className='todoForm todoFormGrid'>
                <Grid cols='12 9 10'>
                    <input 
                        id='description' 
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={(event) => change(event.target.value)}
                        value={description}
                        onKeyUp={this.keyHandler}
                    ></input>
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButton 
                        style='primary' 
                        icon='plus'
                    onClick={() => {addTask(description)}}
                    ></IconButton>
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => search(description)}
                    ></IconButton>
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={() => clear()}
                    ></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.description })

const mapDispatchToProps = dispatch => ({ 
    change: (description) => dispatch(change(description)),
    addTask: (description) => dispatch(addTask(description)),
    search: (description) => dispatch(search(description)),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)