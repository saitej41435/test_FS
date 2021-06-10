import TaskTable from "./TaskTable";
import ButtonCreation from '../../utils/ButtonCreation'
import {addTask} from '../../redux/tasks'
import {useSelector} from 'react-redux'


function TaskPage(){

    const defaultValues = useSelector(state=>state.tasks.defaultValues)
    return(
        <div className='col-5 offset-md-1 board'>
            <h1 className='title fustify-content-center'>Tasks</h1>
            <ButtonCreation mode='New' action={addTask} url='/api/task/create' data={defaultValues} type='Task'  />
            <TaskTable />
        </div>
    )
}


export default TaskPage