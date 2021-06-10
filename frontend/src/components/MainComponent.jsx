import { Suspense, lazy } from 'react';
import TaskPage from "./TaskComponent/TaskPage"

const UserPage = lazy(() => import("./UserComponent/UserPage"));

function MainComponent(){
    return(
        <div>
            <h1 className='jumbotron'>Task Board</h1>
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <UserPage />
                    </Suspense>
                    <TaskPage />
                </div>
            </div>
        </div>
    )
}

export default MainComponent
