import React from 'react';
import './Filterbar.scss'

function FilterBar({ handleFilterChange, handleStatusChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label htmlFor="status">Status:</label>
      <select id="status" onChange={handleStatusChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}

export default FilterBar;


          {/* {breakingNews.map((news, index) => (
            <li key={index}>{news.title}</li>
          ))} */}
     
 