import React from 'react'
import { useContext, useState } from "react";
import { useSelector,connect } from "react-redux";
import {Button, Form,FormGroup,Label,Col,Input  } from 'reactstrap'
import {DataContext} from './ButtonCreation'

function FormCreation(props){
    const {dispatch,type} = props
    
    const {data,action,url,mode}=useContext(DataContext)
    const [newRecord,setNewRecord] = useState(data)

    const users = useSelector(state=>state.users.users)
    const handleChange =(e)=>{
        let name = e.target.name
        let value = e.target.type==='checkbox' ? e.target.checked : e.target.value 
        setNewRecord({...newRecord,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(action({url,newRecord}))
        props.closeModel()
    }
    const FormInputs = type==='User' ?
                        <div>
                            <CustomInput type='text' name='first_name' label='First Name' handleChange={handleChange} value={newRecord.first_name}  required />
                            <CustomInput type='text' name='last_name' label='Last Name' handleChange={handleChange} value={newRecord.last_name} />
                        </div>
                        :
                        <div>
                            <CustomInput type='text' name='title' label='Title' handleChange={handleChange} value={newRecord.title}  required />
                            <CustomInput type='textarea' name='description' label='Description' handleChange={handleChange} value={newRecord.description} />
                            <CustomInput type='checkbox' name='completed' label='Completed ?' handleChange={handleChange} style={{'top':'8px','left':'35px'}} value={newRecord.completed}/>
                            <CustomInput type='select' name='assign_to' label='Assign To' handleChange={handleChange} value={newRecord.assign_to? newRecord.assign_to:'select'} required>
                                <option>--select--</option>
                                {users.map(user=><option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>)}
                            </CustomInput>
                        </div>
    return(
        <Form onSubmit={handleSubmit}>
            {FormInputs}
            <div className='float-right'>
                <Button color="primary" type='submit' className='mr-2'>{mode==='New'?'Create':'Update'}</Button>
            </div>   
        </Form>
    )
}

function CustomInput(props){
    const {label,type,name,required,handleChange,value,style} = props

    const InputField = <Input 
                        type={type} 
                        name={name}
                        required={required}
                        onChange={handleChange}
                        value={value}
                        checked={value}
                        style={style}
                        />
        
    const DropDown = <Input type="select" name={name} value={value} onChange={handleChange}>
                        {props.children}
                      </Input>

                    
    return(
        <FormGroup row>
            <Label htmlFor={name} sm={4}>{label}</Label>
            <Col sm={8}>
            {type==='select'?DropDown:InputField }
            </Col>
        </FormGroup>
    )  
}


export default connect()(React.memo(FormCreation))

