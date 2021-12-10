
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getTypes } from './services/pokemon';
import Pokedex from './components/pokedex/pokedex';
import Controls from './components/controls/controls';
import Anime from 'react-anime';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort, selectedType, currentPage);
      setPokemon(data.results);
      setLoading(false);

    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, sort, currentPage, selectedType]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="lds-hourglass"></span>}
      {!loading && (
        <>
          <div className="poke">
            <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
              <Controls query={query} setQuery={setQuery} setLoading={setLoading} sort={sort} setSort={setSort} types={types} selectedType={selectedType} setSelectedType={setSelectedType}
              />
              <Pokedex pokemon={pokemon} currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} setLoading={setLoading}/>
            </Anime>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
