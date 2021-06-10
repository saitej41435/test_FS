import React from 'react'
import {connect} from 'react-redux'
import ButtonCreation from './ButtonCreation'
import { createContext } from 'react';


export const DataContext = createContext()

function ItemView(props){
    const {data,type,editAction} = props
    
    const content = props.displayItems.map((item,index)=><span key={index}>{item}</span>)
    const actionItem = props.edit && <ButtonCreation 
                                        mode='Edit' 
                                        action={editAction} 
                                        url={type==='User'?`/api/user/update/${data.id}`:`/api/task/update/${data.id}`} 
                                        data={data} 
                                        delete={type==='User'?false:true}
                                        type={type}
                                        />
    const itemAction= ()=>{
        props.action && props.dispatch(props.action(props.itemLink)) 
    }
    return(
            
            <div className='d-flex itemView justify-content-between' 
                onClick={itemAction}>
                {content}
                <span>
                    {actionItem}
                </span>
            </div>
            
    )
}


export default connect()(React.memo(ItemView))
