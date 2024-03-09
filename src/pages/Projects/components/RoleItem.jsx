import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function RoleItem({roleItem, roleFilterList, setRoleFilterList}) {
    const [isFilter, setIsFilter] = React.useState(false);

   React.useEffect(() => {
        if(isFilter) {
            setRoleFilterList([...roleFilterList , roleItem.roleId]);
        }
        else{
            setRoleFilterList(roleFilterList.filter(id => id !== roleItem.roleId));
        }
   }, [isFilter]);

  return (
    <FormGroup key={roleItem.roleId}>
        <FormControlLabel 
        style={{marginRight: '10px'}}
        control={
            <Checkbox  
            value={isFilter}
            onChange={() => setIsFilter(!isFilter)}
            />
        } 
        label={roleItem.roleName} 
        />
    </FormGroup>
  )
}
