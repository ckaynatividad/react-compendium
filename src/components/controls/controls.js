import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';

export default function Controls({ query, setQuery, setLoading, sort, setSort, selectedType, setSelectedType, types }) {
  return (
    <div>
      <TextField type="text" variant="outlined" label="Search" value={query} onChange={(e) => { setQuery(e.target.value);}} />
      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="asc">A-Z</MenuItem>
        <MenuItem value="desc">Z-A</MenuItem>
      </Select>
      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </Select>

      <Button variant="contained" onClick={() => setLoading(true)}>Go</Button>
      {}
    </div>
  );
}