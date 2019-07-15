import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { changeDescription } from '../actions'

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    
    return (
        <div role='form' className='todoForm todoFormGrid'>
            <Grid cols='12 9 10'>
                <input 
                    id='description' 
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    // onChange={props.handleChange}
                    onChange={(event) => props.changeComponente(event.target.value)}
                    value={props.description}
                    onKeyUp={keyHandler}
                ></input>
            </Grid>
            
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus'
                    // onClick={props.handleAdd}
                    onClick={() => {console.log(props.description)}}
                ></IconButton>
                <IconButton
                    style='info'
                    icon='search'
                    onClick={props.handleSearch}
                ></IconButton>
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}
                ></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.description })

const mapDispatchToProps = dispatch => ({ 
    changeComponente: (description) => dispatch(changeDescription(description)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)