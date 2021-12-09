
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/pokemon';
import Pokedex from './components/pokedex/pokedex';
import Controls from './components/controls/controls';
import Anime from 'react-anime';


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
            <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
              <Controls query={query} setQuery={setQuery} setLoading={setLoading} sort={sort} setSort={setSort}
              />
              <Pokedex pokemon={pokemon} />
            </Anime>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
