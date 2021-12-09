import React from 'react';

export default function Controls({ query, setQuery, setLoading, order, setOrder }) {
  return (
    <div>
      <input type="text" placeholder="Search" value={query} onChange={(e) => { setOrder(e.target.value);}} />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      <button onClick={() => setLoading(true)}>Go</button>
    </div>
  );
}