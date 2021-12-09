
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import Pokedex from './components/pokedex/pokedex';
import Controls from './components/controls/controls';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, sort]);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="lds-hourglass"></span>}
      {!loading && (
        <>
          <div className="poke">
            <Controls query={query} setQuery={setQuery} setLoading={setLoading} sort={sort} setSort={setSort}
            />
            <Pokedex pokemon={pokemon} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
