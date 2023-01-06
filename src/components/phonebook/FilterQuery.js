import React from 'react'

const FilterQuery = ({filterQuery, handleFilterChange}) => 
    <p>
        filter shown with <input value = {filterQuery} onChange = {handleFilterChange} />
    </p>

export default FilterQuery