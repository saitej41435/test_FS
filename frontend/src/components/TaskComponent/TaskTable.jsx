import ItemView from '../../utils/ItemView'
import {useSelector} from 'react-redux'
import {updateTask} from '../../redux/tasks'

function TaskTable(){
    const tasks = useSelector(state=>state.tasks)
    const taskList = !tasks.isLoading && tasks.tasks.map(task=>{
        return(
            <ItemView 
                key={task.id} 
                // itemLink={`/api/user/${user.id}/task`} 
                data={task}
                edit
                displayItems={[task.title,task.completed?'completed':'started']}
                // action={}
                editAction={updateTask}
                type='Task'
            />
        )
    }) 
    return(
    <div className='tableView'>
        {taskList}
    </div>)
}

export default TaskTable