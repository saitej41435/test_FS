import axios from 'axios'
import {initialValues} from './constance'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'   

const initialState = {
    isLoading:false,
    errMess:null,
    users:[],
    defaultValues:initialValues.user
}


export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) =>({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (errMess) =>({
    type: FETCH_USERS_FAILURE,
    payload: errMess
})

export const fetchUsers = () => (dispatch)=>{
    dispatch(fetchUsersRequest());
    axios.get('/api/users')
        .then(response=>dispatch(fetchUsersSuccess(response.data)))
        .catch(error=>dispatch(fetchUsersFailure(error)))
}

export const addUser =({url,newRecord}) =>dispatch =>{
    axios.post(url,newRecord)
        .then(response=>dispatch(fetchUsers()))
        .catch(errMess =>console.log(errMess))
}

export const updateUser = ({url,newRecord}) =>dispatch =>{
    axios.put(url,newRecord)
        .then(response=>dispatch(fetchUsers()))
        .catch(errMess => console.log(errMess))
}

export const UsersReducer = (state=initialState,action) =>{
                switch(action.type){
                    case FETCH_USERS_REQUEST:
                        return{
                            ...state,
                            isLoading:true,
                        }
                    case FETCH_USERS_SUCCESS:
                        return{
                            ...state,
                            isLoading:false,
                            errMess:null,
                            users:action.payload
                        }
                    case FETCH_USERS_FAILURE:
                        return{
                            ...state,
                            isLoading:false,
                            errMess:action.payload,
                            users:[]
                        }
                    default:
                        return state
                }
}