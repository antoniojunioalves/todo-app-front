import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { changeDescription, buscarDados, addDescription } from '../actions'


 class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }


    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }        
    } 
    render () {
        const desc = this.props.description
        const add = this.props.handleAdd

        return (
            <div role='form' className='todoForm todoFormGrid'>
                <Grid cols='12 9 10'>
                    <input 
                        id='description' 
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        // onChange={props.handleChange}
                        onChange={(event) => this.props.changeComponente(event.target.value)}
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                    ></input>
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButton 
                        style='primary' 
                        icon='plus'
                    onClick={() => {this.props.addDescription(this.props.description)}}
                    //onClick={() => {console.log(this.props.description)}}
                    ></IconButton>
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={() => this.props.buscarDados()}
                    ></IconButton>
                    <IconButton
                        style='default'
                        icon='close'
                        onClick={this.props.handleClear}
                    ></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.description })

const mapDispatchToProps = dispatch => ({ 
    changeComponente: (description) => dispatch(changeDescription(description)),
    buscarDados: () => dispatch(buscarDados()),
    addDescription: (description) => dispatch(addDescription(description))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)