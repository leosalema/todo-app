/** In this component we set up our registration screen, containing the field 
 * for insertion of the task and the add buttons, search and clear the field. 
 * It is important to verify that the grid that is responsible for converting 
 * to the standard 12-cols bootstrap */
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
 
    return  (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.descriptin}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>  
                    <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton> 
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>   
            </Grid>
        </div>
    )
}