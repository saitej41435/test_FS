import {fetchTasks} from '../../redux/tasks'
import ItemView from '../../utils/ItemView'
import {useSelector} from 'react-redux'
import {updateUser} from '../../redux/users'


function UserTable(){
    const users = useSelector(state=>state.users)
    const userList = !users.isLoading && users.users.map(user=>{
        return(
            <ItemView 
                key={user.id} 
                itemLink={`/api/user/${user.id}/tasks`} 
                displayItems={[`${user.first_name} ${user.last_name}`]}
                data={user}
                edit 
                action={fetchTasks}
                editAction={updateUser}
                type='User'
            />
        )
    }) 
    return(
        <div className='tableView' >
            {userList}  
        </div>        
    )
}



export default UserTable