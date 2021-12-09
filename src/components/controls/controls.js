import React from 'react';

export default function Controls({ query, setQuery, setLoading, sort, setSort }) {
  return (
    <div>
      <input type="text" placeholder="Search" value={query} onChange={(e) => { setQuery(e.target.value);}} />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      <button onClick={() => setLoading(true)}>Go</button>
    </div>
  );
}