import { render, screen } from '@testing-library/react';
import Pokedex from './components/pokedex/pokedex';
import App from './App';

test('render pokemon from pokedex in app', () => {
  const container = render(
    <><App /><Pokedex pokemon={['venusaur', 'abra']} setLoading="false" setCurrentPage="1" /></> 
  );
  expect(container).toMatchSnapshot();
});