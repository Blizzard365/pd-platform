import React from 'react'
import projectImage from "../../../assets/project_image.png";

export default function ProjectItem({projectItem}) {
  return (
    <div className="project_item" key={projectItem.projectId}>
        <img src={projectImage} />
        <span>{projectItem.projectName}</span>
    </div>
  )
}
