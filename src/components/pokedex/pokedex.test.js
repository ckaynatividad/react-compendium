import { render, screen } from '@testing-library/react';
import Pokedex from './pokedex';

test('render pokemon from pokedex', () => {
  const container = render(
    <Pokedex pokemon={['venusaur', 'abra']} setLoading="false" setCurrentPage="1" />
  );
  expect(container).toMatchSnapshot();
});