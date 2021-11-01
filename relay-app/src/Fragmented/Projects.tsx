import {usePreloadedQuery} from 'react-relay/hooks'
import { Suspense } from 'react';
import  type { PreloadedQuery } from 'react-relay/hooks'
import * as AppFragmentedQuery from './__generated__/AppFragmentedQuery.graphql';
import Project from './Project'

interface Props {
    queryRef : PreloadedQuery<AppFragmentedQuery.AppFragmentedQuery> 
}

const Projects = ({queryRef} : Props) => {
    
    const data = usePreloadedQuery<AppFragmentedQuery.AppFragmentedQuery>(AppFragmentedQuery.default, queryRef)
    console.log(data);
    return (
        <div>
            <h3>Projects</h3>
            <div>Count : {data.projects.length}</div>
            {data.projects.map(project => 
            <Suspense key={project?.id} fallback={<div>Loading Project...</div>}>
                <Project data={project}/>
            </Suspense>
            )}
        </div>
    )
}
export default Projects;