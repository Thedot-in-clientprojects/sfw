import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ProjectItem from './project-item';

function ProjectsGrid({ projects }) {

    console.log("Project Here -> ", projects)
    useEffect(() => {
      
    }, [projects])
    


    return (
        <>
            {Object.entries(projects).map((pro, index) => {
                return( <>
         
                <ProjectItem key={pro[0]} project={pro[1]} />
                    </>
                )
            })}
        </>
    );
}



export default ProjectsGrid;
