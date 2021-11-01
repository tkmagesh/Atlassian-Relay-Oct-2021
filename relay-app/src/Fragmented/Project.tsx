import {useFragment, useRefetchableFragment } from 'react-relay/hooks'
import type { Project_project$key} from './__generated__/Project_project.graphql'
import Bug from './Bug';
import { Suspense } from 'react';

const graphql = require('babel-plugin-relay/macro')

interface Props {
    data : Project_project$key | null
}


/* const Project = ({data} : Props) => {
    const project = useFragment(graphql`
        fragment Project_project on Project{
            id
            name
            description
            bugs(status : $status) {
                ...Bug_bug
            }
        }
    `, data)

    return (
        <div>
            <b>Project : {project?.name}</b>
            <p>{project?.description}</p>
            <Suspense fallback={<div>Loading Bugs...</div>}>
                <h4>Bugs</h4>
                {project?.bugs?.map(bug => (<Bug data={bug}/>))}
            </Suspense>
            <hr/>
        </div>
    )
} */

const Project = ({data} : Props) => {
    const [project, reload] = useRefetchableFragment(graphql`
        fragment Project_project on Project
        @refetchable(queryName: "BugsRefetchQuery") 
        @argumentDefinitions(
            status : {type : Status, defaultValue : OPEN}
        ){ 
            id
            name
            description
            bugs(status : $status) {
                id
                ...Bug_bug
            }
        }
    `, data)

    return (
        <div>
            <b>Project : {project?.name}</b>
            <p>{project?.description}</p>
            <Suspense fallback={<div>Loading Bugs...</div>}>
                <h4>Bugs</h4>
                <button onClick={() => { reload({ status: "CLOSED"})}}>Closed</button>
                {project?.bugs?.map(bug => (<Bug key={bug?.id} data={bug}/>))}
            </Suspense>
            <hr/>
        </div>
    )
}

export default Project;