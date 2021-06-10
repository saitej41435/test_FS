import {connect, useSelector} from 'react-redux' 
import { useEffect } from 'react'
import {fetchUsers,addUser} from '../../redux/users'
import UserTable from "./UserTable";
import ButtonCreation from '../../utils/ButtonCreation'

function UserPage({dispatch}){

    const defaultValues = useSelector(state=>state.users.defaultValues)
    useEffect(()=>dispatch(fetchUsers()),[])
    return(
        <div className='col-5 board'>
            <h1 className='title'>Users</h1>
            <ButtonCreation mode='New' action={addUser} url='/api/user/create' data={defaultValues} type='User' />
            <UserTable/>
        </div>
    )
}


export default connect()(UserPage)