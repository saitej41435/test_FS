import React, { useState, createContext } from 'react';
import CustomModel from './CustomModel'
import {connect} from 'react-redux'
import { Button} from "reactstrap";
import {deleteTask} from '../redux/tasks'

import FormCreation from './FormCreation'

export const DataContext = createContext()
function ButtonCreation(props){
    const {mode,url,action,data,type} = props
    const [isShown,setModel]=useState(false)
    
    const toggle = () => setModel(preState=>!preState)

    const handleDelete = (e)=>{
        props.dispatch(deleteTask(`/api/task/delete/${data.id}`))
    }

    return(
        <div className='d-flex justify-content-end mr-4'>
            <DataContext.Provider value={{
                            data:data,
                            action:action,
                            url:url,
                            mode:mode}} >
                <Button outline color={mode==='New'?'info':'warning'} size="sm" onClick={toggle}>{mode==='New'?`Create ${type}`:'Edit'}</Button>
                {props.delete && <Button outline color='danger' size='sm' className='ml-2' onClick={handleDelete} >Delete</Button>}
                <CustomModel isOpen={isShown} toggle={toggle} title={mode==='New'?`New ${type}`:`Update ${type}`} FormComponent={FormCreation} type={type} />
            </DataContext.Provider>
        </div>
    )    
}

export default React.memo(connect()(ButtonCreation))

