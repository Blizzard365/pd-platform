import React from 'react';
import categoryData from '../../../database/category.json';
import CategoryItem from './CategoryItem';

export default function CategoryList({setThemeFilters}) {
  const [categoryFilterList, setCategoryFilterList] = React.useState([]);

  React.useEffect(() => {
    setThemeFilters([...categoryFilterList]);
  }, [categoryFilterList])

  return (
    <div>
        <span><b className='filter_name'>Тематика</b></span>
        {
            categoryData.map((category) => (
                <CategoryItem 
                    categoryItem={category}
                    categoryFilterList={categoryFilterList}
                    setCategoryFilterList={setCategoryFilterList}
                />
            ))
        }
    </div>
  )
}
