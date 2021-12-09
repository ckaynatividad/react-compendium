
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import Pokedex from './components/pokedex/pokedex';
import Controls from './components/controls/controls';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('arc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort);
      setPokemon(data.results);

    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, sort]);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loading"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} sort={sort} setSort={setSort}
          />
          <Pokedex pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
