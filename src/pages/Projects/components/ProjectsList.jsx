import React from 'react'
import ProjectItem from './ProjectItem';
import { Typography } from '@mui/material';

export default function ProjectsList({filteredProjects}) {

  return (
    <div className='projects_list'>
        {
            filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectItem projectItem={project} />
                ))
            ) : (
                <Typography mb="30px" variant="h5" fontWeight="400">Список проектов пуст</Typography>
            )
        }
    </div>
  )
}
