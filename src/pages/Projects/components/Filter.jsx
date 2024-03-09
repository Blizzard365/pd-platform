import React from 'react';
import CategoryList from './CategoryList';
import RoleList from './RoleList';

export default function Filter({toggleFilter, isFilter, handleFilterChange}) {
    const [roleFilters, setRoleFilters] = React.useState([]);
    const [themeFilters, setThemeFilters] = React.useState([]);

    React.useEffect(() => {
        handleFilterChange(roleFilters, themeFilters);
    }, [roleFilters, themeFilters])

    const onClickOpenFilter = () => {
        toggleFilter();
    }

  return (
    <div>
          <span onClick={onClickOpenFilter} className={isFilter ? "projects_filter black" : "projects_filter white"}>фильтр</span>
        {
            isFilter && (
                <div className={isFilter ? "project_filter_open" : "project_filter_close"}>
                    <CategoryList 
                        setThemeFilters={setThemeFilters}
                    />
                    <RoleList
                        setRoleFilters={setRoleFilters}
                    />
                </div>
            ) 
        }
    </div>
  )
}
