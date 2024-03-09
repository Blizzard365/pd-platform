import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

export default function CategoryItem({categoryItem, categoryFilterList, setCategoryFilterList}) {
    const [isFilter, setIsFilter] = React.useState(false);

   React.useEffect(() => {
        if(isFilter) {
            setCategoryFilterList([...categoryFilterList, categoryItem.categoryId]);
        }
        else{
            setCategoryFilterList(categoryFilterList.filter(id => id !== categoryItem.categoryId));
        }
   }, [isFilter]);

  return (
    <FormGroup key={categoryItem.categoryId}>
        <FormControlLabel 
        style={{marginRight: '10px'}}
        control={
            <Checkbox  
            value={isFilter}
            onChange={() => setIsFilter(!isFilter)}
            />
        } 
        label={categoryItem.categoryName} 
        />
    </FormGroup>
  )
}
