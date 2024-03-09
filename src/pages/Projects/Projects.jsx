import { Box, Typography } from "@mui/material";
import Nav from "../../components/Nav";
import logo from '../../assets/logo.svg';
import Filter from "./components/Filter";
import ProjectsList from "./components/ProjectsList";
import React from "react";
import projectsData from "../../database/projects.json";

export default function Projects () {
   const [filteredProjects, setFilteredProjects] = React.useState(projectsData);

   const [isFilter, setIsFilter] = React.useState(false);

   const toggleFilter = () => {setIsFilter(!isFilter);}

   const handleFilterChange = (roleFilters, themeFilters) => {
      const filtered = projectsData.filter(project => {
          const matchesRoles = roleFilters.every(role => project.roles.includes(role));
          const matchesThemes = themeFilters.every(theme => project.categoryId === theme);
          return matchesRoles && matchesThemes;
      });
      setFilteredProjects(filtered);
  };

   return (
   <Box sx={{ bgcolor: 'background.default', mt: 5}}>
      <Nav />
      <div className="projects_header">
         <img style={{marginBottom: '30px'}} src={logo} alt="Логотип" />
         <Typography mb="30px" variant="h5" color="white" fontWeight="400">ПРОЕКТНАЯ ДЕЯТЕЛЬНОСТЬ</Typography>
         <Typography mb="30px" variant="h3" color="white" fontWeight="700">Витрина проектов!</Typography>

         <Filter 
            isFilter={isFilter}
            toggleFilter={toggleFilter}
            handleFilterChange={handleFilterChange}
         />

      </div>

      <ProjectsList 
         filteredProjects={filteredProjects}
      />
      
    </Box>
   )
}
