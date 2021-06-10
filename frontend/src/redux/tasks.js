import axios from 'axios'
import {initialValues} from './constance'

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS'
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE'   

const initialState = {
    isLoading:false,
    errMess:null,
    tasks:[],
    defaultValues:initialValues.task
}
export const fetchTasksRequest = () => ({
    type: FETCH_TASKS_REQUEST
});

export const fetchTasksSuccess = (tasks) =>({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks
})

export const fetchTasksFailure = (errMess) =>({
    type: FETCH_TASKS_FAILURE,
    payload: errMess
})

export const fetchTasks = (url) => (dispatch)=>{
    dispatch(fetchTasksRequest());
    axios.get(url)
        .then(response=>dispatch(fetchTasksSuccess(response.data)))
        .catch(error=>dispatch(fetchTasksFailure(error)))
}

export const deleteTask = (url) =>dispatch =>{
    axios.delete(url)
        .then(response =>dispatch(fetchTasks()))
        .catch(errMess => console.log(errMess))
}

export const updateTask = ({url,newRecord}) =>dispatch =>{
    axios.put(url,newRecord)
        .then(response=>dispatch(fetchTasks()))
        .catch(errMess => console.log(errMess))
}

export const addTask =({url,newRecord}) =>dispatch =>{
    axios.post(url,newRecord)
        .then(response=>dispatch(fetchTasks()))
        .catch(errMess =>console.log(errMess))
}


export const TasksReducer = (state=initialState,action) =>{
                switch(action.type){
                    case FETCH_TASKS_REQUEST:
                        return{
                            ...state,
                            isLoading:true,
                        }
                    case FETCH_TASKS_SUCCESS:
                        return{
                            ...state,
                            isLoading:false,
                            errMess:null,
                            tasks:action.payload
                        }
                    case FETCH_TASKS_FAILURE:
                        return{
                            ...state,
                            isLoading:false,
                            errMess:action.payload,
                            tasks:[]
                        }
                    default:
                        return state
                }
}